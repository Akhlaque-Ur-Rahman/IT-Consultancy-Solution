import { ImageResponse } from "next/og";

export const runtime = "edge";

// Image metadata
export const alt = "EDUNEX - IT Consulting & Software Development";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 128,
        background: "black",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Logo Text */}
        <div style={{ fontWeight: "bold" }}>EDUNEX</div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 48,
            marginTop: 40,
            color: "#a1a1a1",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          IT Consulting & Software Development
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
