import "./globals.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <Header></Header>
      <Navbar></Navbar>
      
      <body className="bg-[#141416] text-white">{children}</body>
    </html>
  );
}
