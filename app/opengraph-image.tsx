import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Tanbir — AI Data Specialist & Quality Analyst";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0A0A0F 0%, #12121A 60%, #1A1A2E 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 700,
            backgroundImage: "linear-gradient(135deg, #4F46E5, #7C3AED, #06B6D4)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Tanbir
        </div>
        <div style={{ display: "flex", fontSize: 36, color: "#F1F5F9", marginTop: 16 }}>
          AI Data Specialist · Quality Analyst · Prompt Engineer
        </div>
      </div>
    ),
    { ...size }
  );
}
