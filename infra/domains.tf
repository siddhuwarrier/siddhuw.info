# siddhuw.info
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

# siddhuw.uk
resource "cloudflare_dns_record" "mx1_siddhuw_uk" {
  zone_id  = var.cloudflare_alt_zone_id
  name     = "siddhuw.uk"
  priority = 75
  type     = "MX"
  content  = "route1.mx.cloudflare.net"
  ttl = 1
}

resource "cloudflare_dns_record" "mx2_siddhuw_uk" {
  zone_id  = var.cloudflare_alt_zone_id
  name     = "siddhuw.uk"
  priority = 87
  type     = "MX"
  content  = "route2.mx.cloudflare.net"
  ttl = 1
}

resource "cloudflare_dns_record" "mx3_siddhuw_uk" {
  zone_id  = var.cloudflare_alt_zone_id
  name     = "siddhuw.uk"
  priority = 4
  type     = "MX"
  content  = "route3.mx.cloudflare.net"
  ttl = 1
}

resource "cloudflare_dns_record" "txt1_siddhuw_uk" {
  zone_id  = var.cloudflare_alt_zone_id
  name     = "siddhuw.uk"
  type     = "TXT"
  content  = "\"v=DKIM1; h=sha256; k=rsa; p=M"
  ttl = 1
}

resource "cloudflare_dns_record" "txt2_siddhuw_uk" {
  zone_id  = var.cloudflare_alt_zone_id
  name     = "siddhuw.uk"
  type     = "TXT"
  content  = "v=spf1 include:_spf.mx.cloudflare.net ~all"
  ttl = 1
}