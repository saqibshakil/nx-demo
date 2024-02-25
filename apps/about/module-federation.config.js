module.exports = {
  name: 'about',
  exposes: {
    './Module': './src/remote-entry.ts',
    './definition': './src/ContainerRegistry.tsx',
  },
};