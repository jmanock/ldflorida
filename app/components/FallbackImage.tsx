"use client";

import { useState } from "react";

const fallbackSrc = "/images/fallbacks/florida-activity-placeholder.svg";

type FallbackImageProps = {
  src: string;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
};

export default function FallbackImage({ src, alt, className, loading = "lazy", fetchPriority }: FallbackImageProps) {
  const [imageSrc, setImageSrc] = useState(src);

  function handleError() {
    if (imageSrc === fallbackSrc) return;

    window.gtag?.("event", "image_fallback_used", {
      site: "localdealsflorida.org",
      image_src: src,
      page_path: window.location.pathname
    });

    setImageSrc(fallbackSrc);
  }

  return (
    <img
      alt={alt || "Florida local activity placeholder image"}
      className={className}
      decoding="async"
      fetchPriority={fetchPriority}
      loading={loading}
      onError={handleError}
      src={imageSrc}
    />
  );
}
