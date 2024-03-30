module.exports = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        "effective-space-umbrella-5rjw5gpjv4cv65g-3000.app.github.dev",
        "localhost:3000",
      ],
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bdchefs.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};
