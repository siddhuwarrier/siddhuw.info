resource "cloudflare_r2_bucket" "cloudflare-bucket" {
  account_id = var.cloudflare_account_id
  name       = var.storage_bucket_name
  location   = var.storage_bucket_location
}
