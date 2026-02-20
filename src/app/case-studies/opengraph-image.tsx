import { ImageResponse } from "next/og";
import { getOGImage } from "@/lib/og-image";

export const runtime = "edge";

export const alt = "Case Studies | EDUNEX";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(getOGImage("CASE STUDIES"), {
    ...size,
  });
}
