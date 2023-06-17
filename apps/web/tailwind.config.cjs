// @ts-expect-error - No types for tailwindcss config
const baseConfig = require('@demo/tailwind-config/tailwind.config.cjs')

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [baseConfig],
}
