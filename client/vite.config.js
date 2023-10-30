import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			"/api": {
				target: import.meta.env.VITE_PROD_SERVER_BASE_URL,
				changeOrigin: true,
			},
		},
	},
	build: {
		outDir: "dist",
	},
});
