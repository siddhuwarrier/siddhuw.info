# Infrastructure

Terraform configuration for the Cloudflare resources that power [siddhuw.info](https://siddhuw.info):

- **Cloudflare Pages** project (GitHub integration, custom domains, DNS records)
- **Cloudflare R2** bucket for static assets (e.g. CV PDF), with a custom domain (`assets.siddhuw.info`)

## Prerequisites

- [Terraform](https://developer.hashicorp.com/terraform/install) >= 1.14.0
- Access to the [HCP Terraform](https://app.terraform.io/) workspace `siddhuw-info` in the `siddhuw` organisation
- A Cloudflare API token with permissions for Pages, DNS, and R2

## Running a plan locally

1. Log in to HCP Terraform:

   ```bash
   terraform login
   ```

2. Initialise the workspace (downloads providers and connects to the remote backend):

   ```bash
   terraform init
   ```

3. Run a plan:

   ```bash
   terraform plan
   ```

   This executes remotely in HCP Terraform using the variables and state stored there. No local `.tfvars` file is needed.

## Formatting and validation

```bash
terraform fmt -recursive .
terraform validate
```

Both of these checks run automatically on every pull request via GitHub Actions.
