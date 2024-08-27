"use client";

import { NextUIProvider } from "@nextui-org/react";
import { PropsWithChildren } from "react";

// are context providers in next js
//  take react nodes of type PropsWithChildren
export const Providers = ({ children }: PropsWithChildren) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};
