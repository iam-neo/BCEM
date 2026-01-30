/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Primary colors from logo
                primary: {
                    red: '#E31837',
                    yellow: '#FFD600',
                    blue: '#1565C0',
                    green: '#43A047',
                },
                // Navy colors
                navy: {
                    DEFAULT: '#0D47A1',
                    dark: '#0A3A8A',
                    light: '#1E5BC6',
                },
                // Brand colors
                brand: {
                    50: '#E3F2FD',
                    100: '#BBDEFB',
                    200: '#90CAF9',
                    300: '#64B5F6',
                    400: '#42A5F5',
                    500: '#1565C0',
                    600: '#1565C0',
                    700: '#0D47A1',
                    800: '#0A3A8A',
                    900: '#072B6B',
                },
                accent: {
                    50: '#FFEBEE',
                    100: '#FFCDD2',
                    200: '#EF9A9A',
                    300: '#E57373',
                    400: '#EF5350',
                    500: '#E31837',
                    600: '#D32F2F',
                    700: '#C62828',
                    800: '#B71C1C',
                    900: '#8B0000',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                heading: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
                'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
                'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'fade-up': 'fadeUp 0.6s ease-out',
                'slide-in': 'slideIn 0.5s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideIn: {
                    '0%': { opacity: '0', transform: 'translateX(-20px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
            },
        },
    },
    plugins: [],
}
