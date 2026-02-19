resource "cloudflare_pages_project" "site" {
  account_id        = var.cloudflare_account_id
  name              = var.site_name
  production_branch = var.pages_production_branch

  build_config = {
    root_dir = "pages"
  }
}

resource "cloudflare_pages_domain" "site" {
  account_id   = var.cloudflare_account_id
  project_name = cloudflare_pages_project.site.name
  domain       = var.domain
}

resource "cloudflare_dns_record" "site" {
  zone_id = var.cloudflare_zone_id
  name    = var.domain
  type    = "CNAME"
  content = "${cloudflare_pages_project.site.name}.pages.dev"
  proxied = true
  ttl     = 1
  comment = "Points ${var.domain} to Cloudflare Pages"
}