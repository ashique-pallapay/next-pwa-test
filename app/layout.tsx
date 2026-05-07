import RegisterSW from "./register-sw";

export default function RootLayout({ children }: any) {
  return (
    <html>
      <body>
        <RegisterSW />
        {children}
      </body>
    </html>
  );
}
