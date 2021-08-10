module.exports = {
  reactStrictMode: true,
  images: {
    // Bildgrößen, hier ist es überlegenswert, den größten Wert
    // aus der Standard Konfiguration (3840) zu verkleinern.
    // https://nextjs.org/docs/api-reference/next.config.js/react-strict-mode
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 2560],
    domains: ['upload.wikimedia.org'],
  },
};
