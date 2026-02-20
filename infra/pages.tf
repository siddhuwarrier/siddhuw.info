resource "cloudflare_pages_project" "site" {
  account_id        = var.cloudflare_account_id
  name              = var.site_name
  production_branch = var.pages_production_branch

  build_config = {
    build_command   = "npm install && npm run build"
    destination_dir = "dist"
    root_dir        = "pages"
  }

  source = {
    type = "github"
    config = {
      owner                          = "siddhuwarrier"
      repo_name                      = "siddhuw.info"
      production_branch              = var.pages_production_branch
      production_deployments_enabled = true
      path_includes                  = ["pages/*"]
    }
  }

  lifecycle {
    ignore_changes = [latest_deployment]
  }
}

resource "cloudflare_pages_domain" "site" {
  account_id   = var.cloudflare_account_id
  project_name = cloudflare_pages_project.site.name
  name         = var.domain
  lifecycle {
    ignore_changes = [latest_deployment, canonical_deployment]
  }
}

resource "cloudflare_pages_domain" "site_www" {
  account_id   = var.cloudflare_account_id
  project_name = cloudflare_pages_project.site.name
  name         = "www.${var.domain}"
  lifecycle {
    ignore_changes = [latest_deployment, canonical_deployment]
  }
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

resource "cloudflare_dns_record" "site_www" {
  zone_id = var.cloudflare_zone_id
  name    = "www.${var.domain}"
  type    = "CNAME"
  content = "${cloudflare_pages_project.site.name}.pages.dev"
  proxied = true
  ttl     = 1
  comment = "Points www.${var.domain} to Cloudflare Pages"
}