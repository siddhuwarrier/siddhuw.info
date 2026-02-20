variable "cloudflare_api_token" {
  description = "My Cloudflare API token"
  type        = string
  sensitive   = true
}

variable "cloudflare_account_id" {
  description = "My Cloudflare account ID"
}

variable "cloudflare_zone_id" {
  description = "Cloudflare zone ID for siddhuw.info"
}

variable "domain" {
  description = "The domain name"
  default     = "siddhuw.info"
}

variable "site_name" {
  description = "The name of the Cloudflare pages site you want to create"
  default     = "siddhuw"
}

variable "pages_production_branch" {
  description = "The branch where the Cloudflare pages are located"
  default     = "master"
}

variable "storage_bucket_name" {
  description = "Bucket to put stuff into"
  default     = "siddhuw.assets"
}

variable "storage_bucket_location" {
  description = "Bucket location"
  default     = "weur"
  validation {
    condition = contains(["apac", "eeur", "enam", "weur", "wnam", "oc"], var.storage_bucket_location)
    error_message = "Valid value is one of the following: apac, eeur, enam, weur, wnam, oc."
  }
}