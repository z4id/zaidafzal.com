/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['storage.googleapis.com', 'zaidafzal.com', 'www.zaidafzal.com'],
  },
  async redirects() {
    return [
      {
        source: '/feedback',
        destination: 'https://docs.google.com/forms/d/e/1FAIpQLSfDCBa-9DFyqL7aen0Brmf0xoJcVOC4mqokAklCed6SRzw7Wg/viewform',
        permanent: false
      }
    ];
  }
}

module.exports = nextConfig
