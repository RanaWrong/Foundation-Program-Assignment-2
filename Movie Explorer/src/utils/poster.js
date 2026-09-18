// TVMaze returns `image: null` for many shows. Use an inline SVG placeholder so
// cards and the modal keep their layout instead of rendering a broken image.
const placeholderSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="210" height="295" viewBox="0 0 210 295">
  <rect width="210" height="295" fill="#1f2937"/>
  <text x="105" y="152" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#9ca3af">No image available</text>
</svg>`;

export const POSTER_PLACEHOLDER = `data:image/svg+xml;utf8,${encodeURIComponent(placeholderSvg)}`;

// Prefer the larger `original` image when asked, fall back to `medium`, then the placeholder.
export function posterUrl(movie, size = "medium") {
  const image = movie?.image;

  if (!image) {
    return POSTER_PLACEHOLDER;
  }

  return (size === "original" && image.original) || image.medium || image.original || POSTER_PLACEHOLDER;
}
