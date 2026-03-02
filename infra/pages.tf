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

  deployment_configs = {
    production = {
      environment_variables = {
        PUBLIC_TURNSTILE_SITE_KEY = cloudflare_turnstile_widget.site.sitekey
      }
    }
    preview = {
      environment_variables = {
        PUBLIC_TURNSTILE_SITE_KEY = cloudflare_turnstile_widget.site.sitekey
      }
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
}

resource "cloudflare_pages_domain" "site_www" {
  account_id   = var.cloudflare_account_id
  project_name = cloudflare_pages_project.site.name
  name         = "www.${var.domain}"
}