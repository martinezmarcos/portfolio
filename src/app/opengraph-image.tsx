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
          backgroundColor: "#f8f5f0",
          color: "#17140f",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 2, color: "#b8471f" }}>
          {siteConfig.role.toUpperCase()}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", fontSize: 72, fontWeight: 700, lineHeight: 1.1 }}>
            {siteConfig.name}
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#6b665c" }}>
            React · Next.js · Node.js · PostgreSQL / Supabase
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
