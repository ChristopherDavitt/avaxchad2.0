import type { Metadata } from "next/types";
import ThemeRegistry from "./theme/ThemeRegistry";

export const metadata: Metadata = {
  title: 'Avax Chad',
  description: 'Welcome Chads to the memecoin era on $AVAX. Ape in with confidence and enjoy the gains... we aint just talking muscle here.',
}

// app/layout.tsx
export default function RootLayout(props: any) {
  const { children } = props;
  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: 'joy' }}>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
