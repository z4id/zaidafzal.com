/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['storage.googleapis.com', 'zaidafzal.com', 'www.zaidafzal.com'],
  },
  async redirects() {
    return [
      {
        source: '/feedback',
        destination: 'https://docs.google.com/forms/d/1GvOkSRm5fIHzqTfSsbnaDvHwUZcJfJq90OZOSekVJrw',
        permanent: false
      }
    ];
  }
}

module.exports = nextConfig
