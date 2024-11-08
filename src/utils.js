// utils.js
export const getImageUrl = (path) => {
  // Modified to handle both assets in public folder and src directory
  try {
    // First try to get from src/assets
    return new URL(`../assets/${path}`, import.meta.url).href;
  } catch {
    // Fallback to public folder
    return `/${path}`;
  }
};
