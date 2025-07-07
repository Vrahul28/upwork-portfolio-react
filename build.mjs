// build.mjs
import { build } from 'esbuild';

build({
  entryPoints: ['server/index.ts'],
  platform: 'node',
  packages: 'external',
  bundle: true,
  format: 'esm',
  outdir: 'dist',
})
  .then(() => console.log('✅ Server built successfully with esbuild'))
  .catch((err) => {
    console.error('❌ Build failed', err);
    process.exit(1);
  });
