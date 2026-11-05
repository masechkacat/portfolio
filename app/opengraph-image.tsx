import { ImageResponse } from "next/og";

export const alt = "Marina Torunova, Full-Stack Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #f8fafc 0%, #fbe2e3 55%, #dbd7fb 100%)",
          color: "#020617",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 40, opacity: 0.6, marginBottom: 16 }}>
          mt-dev.online
        </div>
        <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 1.1 }}>
          Marina Torunova
        </div>
        <div style={{ fontSize: 44, marginTop: 24 }}>
          Full-Stack Engineer · TypeScript · Node.js · React
        </div>
      </div>
    ),
    size
  );
}
