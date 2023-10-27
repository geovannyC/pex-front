import Head from "next/head";
import "../../styles/globals.css";
import { Providers } from "@/redux/provider";

export const metadata = {
  title: "Planet Express",
  description: "App",
  icons: {
    icon: "/logo3.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/logo3.ico" />
      </Head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
