import "../../styles/globals.css";
import { Providers } from "@/redux/provider";

export const metadata = {
  title: "Planet Express",
  description: "App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
