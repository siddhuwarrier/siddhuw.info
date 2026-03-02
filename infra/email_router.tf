locals {
  cloudflare_email_address = "contact@siddhuw.info"
}
resource "cloudflare_email_routing_dns" "example_email_routing_dns" {
  zone_id = var.cloudflare_zone_id
  name    = "mail.cf.${var.domain}"
}

resource "cloudflare_email_routing_address" "example_email_routing_address" {
  account_id = var.cloudflare_account_id
  email      = local.cloudflare_email_address
}

resource "cloudflare_email_routing_rule" "example_email_routing_rule" {
  zone_id = var.cloudflare_zone_id
  actions = [{
    type  = "forward"
    value = [var.actual_email_address]
  }]
  matchers = [{
    type  = "literal"
    field = "to"
    value = local.cloudflare_email_address
  }]
  enabled  = true
  name     = "Forward emails from ${local.cloudflare_email_address} to my actual e-mail address"
  priority = 0
}
