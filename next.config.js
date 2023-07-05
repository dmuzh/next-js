/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "pinterest.com",
      "images.unsplash.com",
      "cdn.tgdd.vn",
      "cdn2.cellphones.com.vn",
      "images.fpt.shop",
      "cdn.sforum.vn",
      "encrypted-tbn0.gstatic.com",
      "png.pngtree.com"
    ],
  },
}

module.exports = nextConfig
