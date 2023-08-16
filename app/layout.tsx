'use client'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import {Toaster} from "@/components/ui/toaster";
import AuthLayout from "@/app/authLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <AuthLayout>
                {children}
            </AuthLayout>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
