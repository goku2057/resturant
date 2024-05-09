import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primaryColor: '#FFFFFF',     // Bright white
        secondaryColor: '#F5F5F5',   // Slightly off-white for contrast
        ternaryColor: '#E0E0E0',     // Light gray
        adminbgColor: '#FAFAFA',     // Background color
        admindarkColor: '#CCCCCC',   // Darker gray for elements
        adminblueColor: '#7FBFFF',   // Light blue for accents
        adminredColor: '#FF8C8C',    // Light red for alerts or highlights
        admingreenColor: '#A2FF9B',  // Light green for positive elements

      },
    },
  },
  plugins: [],
}
export default config