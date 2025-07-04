import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/footer";

<meta name="google-site-verification" content="OaiF7KTgvKv92jCi09phUANThw4wLYBIphOX5wuE7GU" />

export const metadata = {
  title: "GetStrongerMe | Business Websites & SEO",
  description: "Affordable websites, SEO, and hosting for small businesses in Johannesburg.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-50 text-gray-900">
        <NavBar/>{children} <Footer/></body>
    </html>
  );
}
