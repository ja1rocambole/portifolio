import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" style={{ scrollBehavior: "smooth" }}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
// // // app/layout.tsx
// import { Providers } from './providers'

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="pt">
//       <body><Providers>{children}</Providers></body>
//     </html>
//   )
// }
