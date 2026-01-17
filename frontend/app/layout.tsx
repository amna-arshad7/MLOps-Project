import Navbar from "@/components/Navbar"; // Ye line add karein
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* Navbar yahan add karein */}
        {children}
      </body>
    </html>
  );
}