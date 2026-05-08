import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "爪爪沐光宠物洗护店",
  description:
    "爪爪沐光宠物洗护店提供犬猫洗护、美容造型、SPA护理、除结梳毛与上门接送服务。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
