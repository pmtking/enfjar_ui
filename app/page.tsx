"use client";
import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { useEffect } from "react";
import { io } from "socket.io-client";

export default function Home() {
  // useEffect(() => {
  //   const token: string | null = localStorage.getItem("token");


  //   // Initialize Socket.io connection
  //   const socket = io("http://localhost:5000", {
  //     transports: ["websocket", "polling"],
  //     reconnection: true,
  //   });
    
  //   socket.on("connect", () => {
  //     console.log("✅ Connected! Socket ID:", socket.id);
  //   });
  //   socket.emit('hello', 'world');
    
  //   socket.on("connect_error", (error) => {
  //     console.error("⚠️ Connection Error:", error);
  //   });
  //   // Cleanup function to close socket when component unmounts
  //   return () => {
  //     socket.disconnect();

  //   };
  // }, []);

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Make&nbsp;</span>
        <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
        <br />
        <span className={title()}>
          websites regardless of your design experience.
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </div>

      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
