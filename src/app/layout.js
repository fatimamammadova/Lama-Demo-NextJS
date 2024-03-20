import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Provider from "@/components/Provider/Provider";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: {
    tamplate: "%s | Lama Store",
    default: "Craft Your Own Blogging Experience",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Provider>
          <div className="container">
            <Header />
            {children}
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
}
