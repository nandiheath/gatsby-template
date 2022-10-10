module.exports = {
  // src/** wildcard will trigger an infinite loop. https://github.com/gatsbyjs/gatsby/issues/35775
  content: [
      "./src/components/**/*.{ts,tsx}",
      "./src/pages/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
