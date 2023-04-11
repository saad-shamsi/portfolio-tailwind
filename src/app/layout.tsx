// These styles apply to every route in the application
import { Playfair_Display } from "next/font/google";
import Header from "@/components/layout/Header";
// import Footer from '@/components/widgets/Footer';
import "./globals.css";
const Playfair = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const metadata = {
  title: "Portfolio Website",
  description:
    "web development, web design, jamstack,fullstack,postman,contentful, tailwind-css",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={Playfair.className}>
        {/* Navbar */}
        <Header />
        {children}
      </body>
    </html>
  );
}
