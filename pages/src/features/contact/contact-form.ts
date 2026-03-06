declare const turnstile: {
  render: (container: string | HTMLElement, options: Record<string, unknown>) => string;
  remove: (widgetId: string) => void;
};

function revealEmail(): void {
  const introEl = document.getElementById("contact-intro");
  const linkEl = document.getElementById("contact-email-link") as HTMLAnchorElement | null;
  const placeholderEl = document.getElementById("contact-email-placeholder");
  if (!introEl || !linkEl || !placeholderEl) return;

  const email = introEl.dataset.email;
  if (!email) return;

  linkEl.href = `mailto:${email}`;
  linkEl.textContent = email;
  linkEl.classList.remove("hidden");
  placeholderEl.classList.add("hidden");
}

let currentWidgetId: string | null = null;

function waitForTurnstile(): Promise<void> {
  if (typeof turnstile !== "undefined") return Promise.resolve();
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      if (typeof turnstile !== "undefined") {
        clearInterval(interval);
        resolve();
      }
    }, 50);
  });
}

async function renderTurnstile(sitekey: string): Promise<void> {
  const container = document.getElementById("turnstile-container");
  if (!container || !sitekey) return;

  await waitForTurnstile();

  if (currentWidgetId !== null) {
    turnstile.remove(currentWidgetId);
    currentWidgetId = null;
  }

  currentWidgetId = turnstile.render(container, {
    sitekey,
    theme: "dark",
    callback: () => revealEmail(),
  });
}

interface FormElements {
  form: HTMLFormElement;
  submitBtn: HTMLButtonElement;
  errorEl: HTMLParagraphElement;
  successEl: HTMLDivElement;
  successTextEl: HTMLSpanElement;
}

function getFormElements(): FormElements | null {
  const form = document.getElementById("contact-form") as HTMLFormElement | null;
  const submitBtn = document.getElementById("contact-submit") as HTMLButtonElement | null;
  const errorEl = document.getElementById("contact-error") as HTMLParagraphElement | null;
  const successEl = document.getElementById("contact-success") as HTMLDivElement | null;
  const successTextEl = document.getElementById("contact-success-text") as HTMLSpanElement | null;
  if (!form || !submitBtn || !errorEl || !successEl || !successTextEl) return null;
  return { form, submitBtn, errorEl, successEl, successTextEl };
}

function getFormData(form: HTMLFormElement) {
  return {
    token: form.querySelector<HTMLInputElement>("[name='cf-turnstile-response']")?.value,
    email: form.querySelector<HTMLInputElement>("#contact-email")?.value,
    message: form.querySelector<HTMLTextAreaElement>("#contact-message")?.value,
  };
}

async function submitContactForm(token: string, email: string, message: string): Promise<void> {
  const baseUrl = import.meta.env.PUBLIC_SEND_EMAIL_SERVICE_URL;
  const res = await fetch(`${baseUrl}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      turnstileToken: token,
      fromEmail: email,
      contactMessage: message,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Request failed (${res.status})`);
  }
}

function showError(errorEl: HTMLParagraphElement, label: string): void {
  errorEl.textContent = label;
  errorEl.classList.remove("hidden");
}

function showSuccess(form: HTMLFormElement, successEl: HTMLDivElement, successTextEl: HTMLSpanElement, label: string): void {
  form.classList.add("hidden");
  successTextEl.textContent = label;
  successEl.classList.remove("hidden");
}

function setSubmitting(submitBtn: HTMLButtonElement, submitting: boolean, form: HTMLFormElement): void {
  submitBtn.disabled = submitting;
  submitBtn.textContent = submitting
    ? (form.dataset.submittingLabel ?? "Sending…")
    : (form.dataset.submitLabel ?? "Send");
}

export function initContactForm(): void {
  const els = getFormElements();
  if (!els) return;

  const { form, submitBtn, errorEl, successEl, successTextEl } = els;

  const sitekey = form.dataset.sitekey ?? "";
  renderTurnstile(sitekey);
  const errorLabel = form.dataset.errorLabel ?? "Verification failed. Please try again.";
  const successLabel = form.dataset.successLabel ?? "Thanks for your interest! An e-mail's been sent to me using a Cloudflare worker, and I'll get back to you as soon as I see it!";

  form.addEventListener("submit", async (e: SubmitEvent) => {
    e.preventDefault();

    const { token, email, message } = getFormData(form);

    if (!token) {
      showError(errorEl, errorLabel);
      return;
    }

    errorEl.classList.add("hidden");
    setSubmitting(submitBtn, true, form);

    try {
      await submitContactForm(token, email ?? "", message ?? "");
      showSuccess(form, successEl, successTextEl, successLabel);
    } catch {
      showError(errorEl, errorLabel);
    } finally {
      setSubmitting(submitBtn, false, form);
    }
  });
}
