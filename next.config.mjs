/** @type {import('next').NextConfig} */
const nextConfig = {
  // Interim: www/apex domains are attached to this project but reserved for the
  // future adult site. Until it launches, send them to the kids site so Google
  // doesn't see duplicate content. Remove these when the domains move projects.
  async redirects() {
    return ['www.earthandom.ca', 'earthandom.ca'].map((host) => ({
      source: '/:path*',
      has: [{ type: 'host', value: host }],
      destination: 'https://kids.earthandom.ca/:path*',
      permanent: false,
    }));
  },
};

export default nextConfig;
