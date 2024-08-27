import { NextRequest, NextResponse } from "next/server";

export const middleware = (req: NextRequest) => {
  const response = NextResponse.next();
  const cookie = req.cookies.get("sessionId");
  if (!cookie) {
    response.cookies.set("sessionId", crypto.randomUUID());
  }
  return response;
};
