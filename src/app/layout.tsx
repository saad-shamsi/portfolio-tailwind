// These styles apply to every route in the application
import Header from "@/components/layout/Header";
// import Footer from '@/components/widgets/Footer';
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-teal-400">
        {/* Navbar */}
        <Header />
        {children}
      </body>
    </html>
  );
}
