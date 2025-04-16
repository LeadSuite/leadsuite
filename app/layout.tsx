import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LeadSuite",
  description: "AI-powered lead generation and chat automation",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0B121A] text-white font-sans">
        {children}

        {/* Chatbase Bot Integration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                if(!window.chatbase || window.chatbase("getState") !== "initialized"){
                  window.chatbase = (...arguments) => {
                    if (!window.chatbase.q) { window.chatbase.q = [] }
                    window.chatbase.q.push(arguments)
                  };
                  window.chatbase = new Proxy(window.chatbase, {
                    get(target, prop) {
                      if (prop === "q") { return target.q }
                      return (...args) => target(prop, ...args)
                    }
                  });
                }
                const onLoad = function() {
                  const script = document.createElement("script");
                  script.src = "https://www.chatbase.co/embed.min.js";
                  script.id = "8PxCTobzpQtc48GZJgz0q";
                  script.domain = "www.chatbase.co";
                  document.body.appendChild(script);
                };
                if (document.readyState === "complete") {
                  onLoad();
                } else {
                  window.addEventListener("load", onLoad);
                }
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
