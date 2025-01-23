import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    server: {
        open: '/'
    },
    plugins: [
        tailwindcss(),
    ],
    root: 'src',
})