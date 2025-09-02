/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    emailjsPublicKey: 'JqXosOh_cPbQzyU-f',
    emailjsServiceId: 'service_kifd2sn',
    emailjsTemplateId: 'template_7dt6fo7',
  },
  eslint: {
    // ✅ Skip ESLint errors during Vercel build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ✅ Skip TypeScript errors during Vercel build
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
