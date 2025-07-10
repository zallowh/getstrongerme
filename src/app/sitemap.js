import { MetadataRoute } from 'next'

export default function sitemap() {
  const baseUrl = "https://www.getstrongerme.com";

  const routes = [
    "",
    "/About",
    "/pricing",
    "/contactus",
    "/ourservice/seo",
    "/ourservice/profile",
    "/ourservice/websites",
    "/ourservice/hosting",
    "/ourservice/googleAds",
    "/blog/free-backlinks-sa",
    "/blog/domain-rating-vs-authority",
    "/blog",
    "/faq/choose-us",
    "/faq/seo-basics",
    "/faq/website-design-project",
    "/faq/creating-googleads",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));
}
