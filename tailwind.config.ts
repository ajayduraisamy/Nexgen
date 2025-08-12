import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    
    theme: {
        extend: {
            fontFamily: {
                muli: ['Muli', 'sans-serif'],
              },
            keyframes: {
                'fade-in-right': {
                    '0%': { opacity: '0', transform: 'translateX(1000px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
            },
            animation: {
                'fade-in-right': 'fade-in-right 0.6s ease-out both',
            },
        },
    },
    plugins: [],
};

export default config;
// This Tailwind CSS configuration file extends the default theme with custom animations.