module.exports = {
  reactStrictMode: true,
  future: {
    webpack5: true,
  },
  webpack: (config) => {
    config.resolve.modules.push(__dirname)
    return config
  },
  // Agregamos estas líneas:
  eslint: {
    ignoreDuringBuilds: true,
  },
  postcssLoaderOptions: {
    implementation: require('postcss'),
    postcssOptions: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}
