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

resource "cloudflare_ruleset" "skip_sbfm_email_service" {
  zone_id = var.cloudflare_zone_id
  kind    = "zone"
  name    = "Skip SBFM for email service worker"
  phase   = "http_request_firewall_custom"

  rules = [{
    ref         = "skip_sbfm_email_service"
    description = "Skip Super Bot Fight Mode for email service worker"
    expression  = "(http.host eq \"${local.send_email_service.hostname}\")"
    action      = "skip"
    action_parameters = {
      phases = ["http_request_sbfm"]
    }
  }]
}
