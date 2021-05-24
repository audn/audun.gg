module.exports = {
  async rewrites() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/ha2hVp8KV5',
      },
    ];
  },
  images: {
    domains: ['images.unsplash.com'],
  },
};
