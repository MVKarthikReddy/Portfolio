{
    "builds": [
      {
        "src": "vite.config.js",
        "use": "@vercel/static-build",
        "config": { "distDir": "dist" }
      }
    ],
    "routes": [
      {
        "src": "/(.*)",
        "dest": "/index.html"
      }
    ]
  }
  