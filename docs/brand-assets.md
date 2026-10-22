# WebIt logo asset notes

## Source and preservation

- `public/brand/webit-logo-reference.jpg` is a byte-for-byte copy of the founder-supplied reference image (JPEG, 768 × 1,376 px).
- `public/brand/webit-logo-crop.jpg` is a tightly framed crop of the complete logo on its original warm-white background (612 × 204 px).
- `public/brand/webit-logo.png` is a full-colour foreground-matted PNG with an alpha channel (currently 609 × 195 px).
- The reference file is preserved unchanged. Generated assets are separate files.

## Extraction notes

The transparent PNG was extracted from the reference, not sourced from an original logo master. The wordmark and red/charcoal surfaces were masked using colour-aware coverage estimates; the low-contrast white ribbon was additionally masked with manually traced support contours so it would not be removed with the warm-white background. Edge colours were adjusted to reduce background contamination.

The asset was visually inspected over both warm white (`#F7F3ED`) and charcoal (`#171717`). It is usable as a working primary lockup on warm/light surfaces, but it is not claimed to be pixel-perfect. The exported PNG retains the extracted full-colour shading (rather than a palette-quantized export) to avoid unnecessary loss in the ribbon gradients.

## Known limitations

- The source is a small, compressed raster image rather than a vector master. The original antialiasing, tonal shading and background-adjacent white ribbon make exact extraction impossible to guarantee.
- Very fine edge pixels may retain minor source tint or edge softness; inspect before using at very large sizes or placing over varied photography.
- On charcoal, the original black “Web” wordmark has insufficient contrast. No alternate white wordmark was created because recolouring/reverse artwork requires founder approval. Use the current lockup on warm/light surfaces for now.
- No `webit-logo.svg` is included. A flat path trace would discard the approved artwork's shaded interwoven surfaces and could also alter the wordmark geometry. A faithful SVG should be made from the original vector/design source if available, or separately reviewed as a manual reconstruction; the PNG has not been mislabeled as vector artwork.

## Colour tokens

The application currently defines provisional CSS tokens in `src/styles/global.css`:

- Charcoal: `#171717`
- Signal red: `#E53935`
- Warm white: `#F7F3ED`

These are implementation starting points from the brief, not final approved colour specifications.

## Founder decisions still open

1. Approve or adjust the provisional colour values.
2. Confirm whether a source SVG, vector PDF, transparent PNG, or design file exists.
3. Approve any alternate/reversed logo treatment for dark backgrounds.
