export function initContactForm(): void {
  const form = document.getElementById("contact-form") as HTMLFormElement | null;
  if (!form) return;

  const submitBtn = document.getElementById("contact-submit") as HTMLButtonElement | null;
  const errorEl = document.getElementById("contact-error") as HTMLParagraphElement | null;
  const successEl = document.getElementById("contact-success") as HTMLDivElement | null;
  const successTextEl = document.getElementById("contact-success-text") as HTMLSpanElement | null;
  if (!submitBtn || !errorEl || !successEl || !successTextEl) return;

  const errorLabel = form.dataset.errorLabel ?? "Verification failed. Please try again.";
  const successLabel = form.dataset.successLabel ?? "Thanks for your interest! Server-side email sending is not yet implemented — coming soon.";

  form.addEventListener("submit", (e: SubmitEvent) => {
    e.preventDefault();

    const token = (form.querySelector<HTMLInputElement>("[name='cf-turnstile-response']"))?.value;

    if (!token) {
      errorEl.textContent = errorLabel;
      errorEl.classList.remove("hidden");
      return;
    }

    errorEl.classList.add("hidden");

    // TODO: POST to Cloudflare Worker for server-side siteverify + form handling.
    form.classList.add("hidden");
    successTextEl.textContent = successLabel;
    successEl.classList.remove("hidden");
  });
}
