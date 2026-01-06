/** @type {import('next').NextConfig} */
const nextConfig = {
    // 1. Matikan optimasi gambar agar tidak 404/Forbidden di cPanel
    images: {
        unoptimized: true,
    },
    // 2. Memastikan output build stabil
    output: 'standalone',
    // 3. Matikan linting saat build jika sering menyebabkan gagal build karena typo
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
