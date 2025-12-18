import "./globals.css";

export const metadata = {
  title: "Teppa Trading",
  description: "Free and Paid Trading Education by Teppa Trading",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
