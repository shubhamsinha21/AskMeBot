"use client";

import { features } from "@/data";
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
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-zinc-900">
      <div className="flex w-full h-auto">
        {/* left-content */}
        <div className="flex flex-col gap-2 p-2 font-serif leading-4 w-1/2 border h-96">
          <div className="flex flex-row items-center">
            <Link href="/">
              <Image
                src="/bot.png"
                alt="logo"
                width={60}
                height={60}
                className="pt-2"
              />
            </Link>

            <div className="flex flex-col items-start ml-4">
              <h1 className="text-lg md:text-4xl lg:text-7xl tracking-wide font-bold text-white">
                <span className="bg-gradient-to-tl from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                  Web
                </span>
                -
                <span className="bg-gradient-to-tl from-yellow-200 to-yellow-500 bg-clip-text text-transparent">
                  e
                </span>
                -
                <span className="bg-gradient-to-tl from-yellow-600 to-yellow-300 bg-clip-text text-transparent">
                  Bot
                </span>
              </h1>
              <p className="text-md md:text-lg lg:text-xl tracking-wide font-normal pl-4 bg-gradient-to-tr from-yellow-700 to-yellow-50 bg-clip-text text-transparent">
                (Website Specific ChatBot)
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 text-white font-normal tracking-normal leading-3">
            {features.map((feature) => (
              <div className="flex gap-4">
                <span>{feature.title}</span>➡️<span>{feature.content}</span>
              </div>
            ))}
          </div>
        </div>

        {/* right-content */}
        <div
          ref={containerRef}
          className="relative flex flex-col gap-2 py-2 font-serif leading-4 w-1/2 border"
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
    </main>
  );
}
