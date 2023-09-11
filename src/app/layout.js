import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter, Italianno } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import AuthProvider from "@/components/authProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });
const italianno = Italianno({ weight: "400", subsets: ["vietnamese"] });

export const metadata = {
  title: "Signor Dev",
  description: "This is a  NextJS Tutorials",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
