import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/footer";

export const metadata = {
  title: "Strongerme RSA | Business Websites & Google Ads, SEO",
  description: "Affordable websites, SEO, and hosting for small businesses in Johannesburg.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="OaiF7KTgvKv92jCi09phUANThw4wLYBIphOX5wuE7GU" />

        {/* Google Tag Manager Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-5PFRTWL2');`,
          }}
        />
      </head>
      <body className="font-sans bg-gray-50 text-gray-900">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5PFRTWL2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
