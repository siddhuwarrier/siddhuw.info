resource "cloudflare_turnstile_widget" "site" {
  account_id     = var.cloudflare_account_id
  domains        = [cloudflare_pages_domain.site.name]
  mode           = "managed"
  bot_fight_mode = false
  name           = "siddhuw-info-turnstile-widget"
}