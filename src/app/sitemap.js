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
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));
}
