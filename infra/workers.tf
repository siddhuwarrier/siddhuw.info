locals {
  send_email_service = {
    service_name = "email-validation-worker"
    hostname     = "email-service.${var.domain}"
  }
}
resource "cloudflare_worker" "send_email_service" {
  account_id = var.cloudflare_account_id
  name       = local.send_email_service.service_name
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

resource "cloudflare_workers_custom_domain" "send_email_service" {
  account_id = var.cloudflare_account_id
  hostname   = local.send_email_service.hostname
  service    = local.send_email_service.service_name
  zone_id    = var.cloudflare_zone_id
}