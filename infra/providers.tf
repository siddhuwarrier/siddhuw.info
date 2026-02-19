terraform {
  required_version = ">= 1.14.0"

  cloud {
    organization = "siddhuw" # change this if you're forking my setup

    workspaces {
      name = "siddhuw-info" # change this if you're forking my setup
    }
  }

  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 5.0"
    }
  }
}

provider "cloudflare" {
  api_token = var.cloudflare_api_token
}