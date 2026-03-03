resource "cloudflare_worker" "send_email_service" {
  account_id = var.cloudflare_account_id
  name       = "email-validation-worker"
  logpush    = false #free tier
  observability = {
    enabled = true
    logs = {
      enabled = true
    }
  }
  subdomain = {
    enabled          = true
    previews_enabled = true
  }
}
