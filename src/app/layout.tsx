
import type { Metadata } from "next";
import "./globals.css";


import AppProvider from "@/components/provider/AppProvider";

import Header from "@/components/main/header";
import Footer from "@/components/main/footer";

import checkCookie from "@/shared/utils/auth/checkCookie";

export const metadata: Metadata = {
  title: "티밍",
  description:
    "나와 함께 할 팀을 찾고, 가르침과 배움이 공존하는 티밍에서 다양한 팀원들과 함께 성장해보세요",
};

export default async function RootLayout({children, modal,}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  // 로그인 상태 확인
  const isLoggedIn = checkCookie("accessToken");
  return (
    <html lang="ko">

      <body className="w-full h-screen pt-[80px]">
        <div id="modal-root">{modal}</div>

        <Header isLoggedIn={isLoggedIn} />

        <main className="max-w-[1200px] mx-auto h-full">
          <AppProvider>{children}</AppProvider>
        </main>

        <footer>
          <Footer />
        </footer>
      </body>

    </html>
  );
}
