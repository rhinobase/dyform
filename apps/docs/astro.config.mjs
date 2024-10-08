// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "My Docs",
      social: {
        github: "https://github.com/rhinobase/duck-form",
        "x.com": "https://twitter.com/rhinobaseio",
      },
      sidebar: [
        {
          label: "Guides",
          autogenerate: {
            directory: "/guides",
          },
        },
      ],
    }),
  ],
});
