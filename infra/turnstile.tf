resource "cloudflare_turnstile_widget" "site" {
  account_id     = var.cloudflare_account_id
  domains        = [var.domain]
  mode           = "managed"
  bot_fight_mode = false
  name           = "siddhuw-info-turnstile-widget"
}