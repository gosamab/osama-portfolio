import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

export default defineConfig({
	output: "static",
	base: "/",
	integrations: [mdx()],
	vite: {
		plugins: [tailwindcss()],
	},
});
