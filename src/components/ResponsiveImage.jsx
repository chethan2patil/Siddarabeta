import { useState, useEffect } from 'react';

export default function ResponsiveImage({ src, alt, className = '', style = {} }) {
  const [imageDimensions, setImageDimensions] = useState(null);

  useEffect(() => {
    if (!src) return;

    const img = new Image();
    img.onload = () => {
      setImageDimensions({
        width: img.naturalWidth,
        height: img.naturalHeight,
      });
    };
    img.src = src;
  }, [src]);

  // Determine size category based on width
  let sizeClass = 'image-small';
  if (imageDimensions) {
    if (imageDimensions.width >= 1000) sizeClass = 'image-hero';
    else if (imageDimensions.width >= 600) sizeClass = 'image-large';
    else if (imageDimensions.width >= 300) sizeClass = 'image-medium';
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`responsive-image ${sizeClass} ${className}`}
      style={style}
    />
  );
}