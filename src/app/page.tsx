"use client";

import Button from "@/components/Button";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";

export default function Home() {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (imageRef.current && containerRef.current) {
        const { clientX: mouseX, clientY: mouseY } = e;
        const { offsetWidth: imageWidth, offsetHeight: imageHeight } =
          imageRef.current;
        const { offsetLeft, offsetTop, clientWidth, clientHeight } =
          containerRef.current;

        // Calculate image position
        const x = mouseX - offsetLeft - imageWidth / 2;
        const y = mouseY - offsetTop - imageHeight / 2;

        // Constrain the image to stay within the container bounds
        const constrainedX = Math.max(0, Math.min(clientWidth - imageWidth, x));
        const constrainedY = Math.max(
          0,
          Math.min(clientHeight - imageHeight, y)
        );

        // Apply the transform style to move the image
        imageRef.current.style.transform = `translate(${constrainedX}px, ${constrainedY}px)`;
      }
    };

    // Add event listeners for mouse movement
    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup function on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-2 py-6 md:p-8 lg:p-24 bg-zinc-900">
      <div className="flex flex-col md:flex-row w-full max-w-screen-xl h-auto py-8">
        {/* left-content */}
        <div className="flex flex-col gap-4 p-4 md:p-6 lg:p-8 font-serif leading-5 w-full xl:w-2/3 h-auto md:h-auto">
          <div className="flex items-center mb-4">
            <Link href="/">
              <Image
                src="/bot.png"
                alt="logo"
                width={60}
                height={60}
                className="pt-2"
              />
            </Link>

            <Header />
          </div>
          {/* features */}

          <Features />
        </div>

        {/* right-content */}
        <div
          ref={containerRef}
          className="relative xl:flex items-center justify-center w-full xl:w-1/2 hidden h-96"
        >
          <Image
            src="/heroBot.png"
            alt="bot"
            width={400}
            height={400}
            ref={imageRef}
            className="absolute transition-transform duration-150 ease-out"
          />
        </div>
      </div>

      <Faq />
      <Button path="[...url]/page.tsx" />
    </main>
  );
}
