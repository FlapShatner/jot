import type { Config } from 'tailwindcss'

const config: Config = {
 content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
 theme: {
  extend: {
   colors: {
    fg40: 'hsla(250, 19%, 88%, 0.4)',
    fg80: 'hsla(250, 19%, 88%, 0.8)',
    border: 'hsla(240, 11%, 27%, 0.4)',
    danger: 'hsla(0, 38%, 38%, 1)',
    success: 'hsla(115, 42%, 40%, 0.4)',
   },
  },
 },
 plugins: [],
}
export default config
