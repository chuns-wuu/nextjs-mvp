import "../about.css"

export default function AboutLayout({
  children,
}: Readonly<{children: React.ReactNode}>) {
  return (
    <body>{children}</body>
  );
}