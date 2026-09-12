import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#000000",
          color: "#ffffff",
          fontFamily: "sans-serif",
          border: "1px solid rgba(255, 255, 255, 0.15)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: 22,
            letterSpacing: 3,
            color: "#a1a1aa",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: "#10b981",
            }}
          />
          {siteConfig.role}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: -2,
            }}
          >
            {siteConfig.name}
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#a1a1aa", lineHeight: 1.4 }}>
            Production SaaS · Distributed Concurrency · RAG · C++ Systems
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
