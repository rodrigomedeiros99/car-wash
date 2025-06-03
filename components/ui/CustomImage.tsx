"use client";

import NextImage, { ImageProps as NextImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ImageProps extends NextImageProps {
  wrapperClassName?: string;
}

export default function CustomImage({ 
  wrapperClassName, 
  className, 
  alt, 
  onLoadingComplete,
  ...props 
}: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={cn("overflow-hidden", wrapperClassName)}>
      <NextImage
        className={cn(
          "duration-700 ease-in-out",
          isLoading ? "scale-110 blur-sm" : "scale-100 blur-0",
          className
        )}
        alt={alt}
        onLoadingComplete={() => {
          setIsLoading(false);
          if (onLoadingComplete) {
            onLoadingComplete({} as any);
          }
        }}
        {...props}
      />
    </div>
  );
}