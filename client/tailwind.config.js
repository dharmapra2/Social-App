module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "false", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      colors: {
        "social-purple": "#614b79",
        "social-purple-15": "#E7E4EB",
        "social-plum": "#774b69",
        "social-plum-15": "#EBE4E9",
        "social-apricot": "#b47257",
        "social-apricot-15": "#F4EAE6",
        "social-forest": "#546f56",
        "social-forest-15": "#E5E9E6",
        "social-navy": "#2a497e",
        "social-navy-15": "#DFE4EC",
        "social-mint": "#b0cfc4",
        "social-mint-15": "#F3F8F6",
        "social-pink": "#ad7393",
        "social-pink-15": "#F3EAEF",
        "social-ocean": "#4889c1",
        "social-ocean-15": "#E4EDF6",
        "social-goledn": "#9b7818",
        "social-goledn-15": "#F0EBDC",
        "social-grey": "#8e8e8e",
        "social-grey-15": "#EEEEEE",
        "social-background": "#f2f5f9",
        "social-background-15": "#FDFEFE",
        "social-dark-grey": "#606060",
        "social-dark-grey-15": "#E7E7E7",
        "social-black": "#000000",
        "social-black-15": "#D9D9D9",
        "social-white": "#fefeff",
        "social-white-15": "#FFFFFF",
        "social-magenta": "#CA3F7E",
        "social-violet": "#814897",
        "social-slate": "#6F6F6F",
        "social-ocean-75": "#0578BF",
        "social-green": "#008000",
        "social-zomp": "#3BA38A",
        "social-valentine-red": "#3BA38A",
        "social-medium-sea-green": "#33A86F",
        "social-black-coffe": "#3F3434",
        "social-flax": "#DFDF8B",
        "social-blond": "#F2F2BF",
        "social-azureish-white": "#EFDFDA",
      },
      screens: {
        "mobile-xxs": { min: "355px" },
        "mobile-small-xxs": { min: "365px" },
        "mobile-large-xxs": { min: "375px" },
        "mobile-mid-xxs": { min: "385px" },
        "mobile-max-xxxs": { min: "395px" },
        "mobile-max-xxs": { min: "405px" },
        // => @media (min-width: 355px) { ... }
        "mobile-min-xs": { min: "420px" },
        // => @media (min-width: 420px) { ... }
        "mobile-min-xxs": { min: "440px" },
        // => @media (min-width: 440px) { ... }
        "mobile-min-xxs-sm": { min: "450px" },
        "mobile-mid-xs": { min: "460px" },
        // => @media (min-width: 460px) { ... }
        "mobile-xs": { min: "475px" },
        // => @media (min-width: 475px) { ... }
        "mobile-small-xs": { min: "490px" },
        // => @media (min-width: 490px) { ... }
        "mobile-small-sm": { min: "520px" },
        // => @media (min-width: 520px) { ... }
        "mobile-min-sm": { min: "540px" },
        "mobile-min-small-sm": { min: "560px" },
        // => @media (min-width: 540px) { ... }
        "mobile-mid-sm": { min: "580px" },
        "mobile-mid-small-sm": { min: "595px" },
        // => @media (min-width: 580px) { ... }
        "mobile-mid-midsm": { min: "610px" },
        // => @media (min-width: 610px) { ... }
        "mobile-sm": { min: "640px" },
        // => @media (min-width: 640px) { ... }
        "mobile-md": { min: "700px" },
        // => @media (min-width: 700px) { ... }
        "mobile-lg": { min: "760px" },
        // => @media (min-width: 760px) { ... }
        tablet: { min: "820px" },
        // => @media (min-width: 820px) { ... }
        "tablet-small-sx": { min: "860px" },
        // => @media (min-width: 860px) { ... }
        "tablet-small-xxs": { min: "901px" },
        "tablet-small-sm": { min: "920px" },
        // => @media (min-width: 920px) { ... }
        "tablet-middle-sm": { min: "960px" },
        // => @media (min-width: 960px) { ... }
        "tablet-large-sm": { min: "990px" },
        // => @media (min-width: 990px) { ... }
        "tablet-sm": { min: "1024px" },
        // => @media (min-width: 1024px) { ... }
        "tablet-md": { min: "1080px" },
        // => @media (min-width: 7080px) { ... }
        "tablet-lg": { min: "1180px" },
        // => @media (min-width: 1190px) { ... }
        "tablet-xl": { min: "1280px" },
        // => @media (min-width: 1280px) { ... }
        "tablet-midxl": { min: "1380px" },
        // => @media (min-width: 1380px) { ... }
        "tablet-maxxl": { min: "1481px" },
        "tablet-largesm": { min: "1498px" },
        // => @media (min-width: 1481px) { ... }
        "tablet-largexl": { min: "1536px" },
        // => @media (min-width: 1536px) { ... }
        desktop: { min: "1580px" },
        "desktop-min-xs": { min: "1599px" },
        "desktop-xs": { min: "1620px" },
        // => @media (min-width: 1580px) { ... }
        "desktop-sm": { min: "1681px" },
        // => @media (min-width: 1681px) { ... }
        "desktop-small-sm": { min: "1710px" },
        // => @media (min-width: 1710px) { ... }
        "desktop-middle-sm": { min: "1730px" },
        // => @media (min-width: 1730px) { ... }
        "desktop-large-sm": { min: "1760px" },
        // => @media (min-width: 1760px) { ... }
        "desktop-md": { min: "1781px" },
        // => @media (min-width: 1781px) { ... }
        "desktop-small-md": { min: "1810px" },
        // => @media (min-width: 1810px) { ... }
        "desktop-middle-md": { min: "1830px" },
        // => @media (min-width: 1830px) { ... }
        "desktop-large-md": { min: "1860px" },
        // => @media (min-width: 1860px) { ... }
        "desktop-lg": { min: "1881px" },
        // => @media (min-width: 1881px) { ... }
        "desktop-largexl": { min: "1981px" },
        // => @media (min-width: 1981px) { ... }
        "desktop-large2xl": { min: "2081px" },
        // => @media (min-width: 2081px) { ... }
      },
      gridTemplateRows: {
        // Simple 8 row grid
        10: "repeat(10, minmax(0, 1fr))",
        9: "repeat(9, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
        7: "repeat(7, minmax(0, 1fr))",

        // Complex site-specific row configuration
        layout: "200px minmax(900px, 1fr) 100px",
      },
      gridTemplateColumns: {
        // Simple 18 column grid
        18: "repeat(18, minmax(0, 1fr))",

        // Complex site-specific column configuration
        footer: "200px minmax(900px, 1fr) 100px",
      },
    },
  },
  fontFamily: {
    sans: ["proxima-nova", "sans-serif"],
    serif: ["Merriweather", "serif"],
  },
};
