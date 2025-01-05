/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {},
		  gridTemplateColumns: {
			// Simple 16 column grid
			'14': 'repeat(14, minmax(0, 1fr))',
			'16': 'repeat(16, minmax(0, 1fr))',

		  },
		  gridColumn: {
			'span-14': 'span 14 / span 14',
		  }
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

