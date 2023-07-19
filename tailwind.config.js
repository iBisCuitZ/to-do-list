/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{html,js,jsx,tsx}',
        './public/**/*.{html,js,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                mygray: '#2b2b2b',
                cardblack: '#121212',
            },
        },
    },
    plugins: [require('tailwindcss-animated')],
};
