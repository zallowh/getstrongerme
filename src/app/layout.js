import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/footer";

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
