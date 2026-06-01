import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-story",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-ui",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Juca e a Caça ao Tesouro do Rio",
  description:
    "Uma história interativa sobre Juca, o jacaré mais esperto (e mais cego) do Rio Cachoeira. Para leitores de 7 a 14 anos. Totalmente acessível.",
  openGraph: {
    title: "Juca e a Caça ao Tesouro do Rio",
    description: "Uma aventura interativa com o jacaré Juca em Joinville.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${lora.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full bg-[#0a1628] font-(--font-ui)">
        {children}
      </body>
    </html>
  );
}
