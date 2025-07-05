export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/private", "/api", "/_next", "/server"],
      },
    ],
    sitemap: "https://www.getstrongerme.com/sitemap.xml",
  };
}
