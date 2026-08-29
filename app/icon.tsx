import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
          borderRadius: 8,
          color: "#fff",
          fontSize: 18,
          fontWeight: 700,
        }}
      >
        T
      </div>
    ),
    { ...size }
  );
}
