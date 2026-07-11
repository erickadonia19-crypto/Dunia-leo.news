import "./globals.css";

export const metadata = {
  title: "DuniaLeo.news",
  description: "Habari za Dunia, Kila Wakati"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sw">
      <body>{children}</body>
    </html>
  );
}
