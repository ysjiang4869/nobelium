module.exports = {
  images: {
    domains: ['gravatar.com']
  },
  eslint: {
    // dirs: ['components', 'layouts', 'lib', 'pages']
  },
  async headers() {
    return [
      {
        source: '/:path*{/}?',
        headers: [
          {
            key: 'Permissions-Policy',
            value: 'interest-cohort=()'
          }
        ]
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/(\\d{4})/(\\d{2})/(\\d{2})/:slug',
        destination: '/:slug', // Matched parameters can be used in the destination
        permanent: true,
      },
    ]
  },
  transpilePackages: ['dayjs']
  // webpack: (config, { dev, isServer }) => {
  //   // Replace React with Preact only in client production build
  //   if (!dev && !isServer) {
  //     Object.assign(config.resolve.alias, {
  //       react: 'preact/compat',
  //       'react-dom/test-utils': 'preact/test-utils',
  //       'react-dom': 'preact/compat'
  //     })
  //   }
  //   return config
  // }

}
