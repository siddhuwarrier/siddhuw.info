resource "cloudflare_r2_bucket" "cloudflare-bucket" {
  account_id = var.cloudflare_account_id
  name       = var.storage_bucket_name
  location   = var.storage_bucket_location
}

resource "cloudflare_r2_custom_domain" "assets" {
  account_id  = var.cloudflare_account_id
  zone_id     = var.cloudflare_zone_id
  bucket_name = cloudflare_r2_bucket.cloudflare-bucket.name
  domain      = "assets.${var.domain}"
  enabled     = true
}