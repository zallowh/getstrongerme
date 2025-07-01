import { MetadataRoute } from 'next'

export default function sitemap() {
  const baseUrl = "https://getstrongerme.com";

  const routes = [
    "",
    "/About",
    "/pricing",
    "/contactus",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));
}
