import type { CSSProperties } from 'react';

type BrandLogoProps = {
  className?: string;
  width?: CSSProperties['width'];
};

/** Displays the recovered primary logo lockup; intended for warm/light surfaces. */
export function BrandLogo({ className, width = 'min(100%, 38.125rem)' }: BrandLogoProps) {
  return (
    <img
      className={className}
      src="/brand/webit-logo.png"
      alt="WebIt"
      width={609}
      height={195}
      decoding="async"
      style={{ width, height: 'auto' }}
    />
  );
}
