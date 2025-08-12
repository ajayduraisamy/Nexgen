import "@/styles/globals.css";
import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "DRNEXGEN Pvt. Ltd.",
  description: "Final Year Projects | ML | Web | Android | Blockchain",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/vercel/geist-font@main/css/geist-sans.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/vercel/geist-font@main/css/geist-mono.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "var(--font-geist-sans)" }}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
