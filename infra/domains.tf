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
  content = "\"v=DKIM1;h=sha256;k=rsa;p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsGktQd5oOOoQ92evBaIu5zkwsw5ls3FtF33leN52H1VXBD8SGrys9kvb3RuaA3T6FDE62FyYXtKc7RA/8lnnR6gHTReCHtVlmqWZqz2Rfjo0fm59I6Zsqcuh23bhaLnqtiesPfvGbKkFlop+igdthTnienVyBmgzujj1Px06+EKlsoYVKfJBLjg4n0gZdjkZxMSO1yLtODPew+yfC37Ceuo8UzQRPfT90tCFPgnWv7SoMAm0Z6CFBangd4cuB/mkLjV+n8Og5Nhwgofs2XYYTtwnhvI6HvD7bjR3b85YpuhIG2TjIMRfNXXL8g9sf4nSK2zlVlgpv14SXudpW9xlEQIDAQAB\""
  ttl = 1
}

resource "cloudflare_dns_record" "txt2_siddhuw_uk" {
  zone_id  = var.cloudflare_alt_zone_id
  name     = "siddhuw.uk"
  type     = "TXT"
  content  = "\"v=spf1 include:_spf.mx.cloudflare.net ~all\""
  ttl = 1
}