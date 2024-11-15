// lib/utils/slugify.js

export function slugify(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/['"]/g, '') 
    .replace(/[^\w\s-]/g, '') 
    .replace(/\s+/g, '-') 
}
