import localFont from 'next/font/local';

export const mainFont = localFont({
    src: '../app/fonts/Helvetica.ttf',
    style: 'normal',
    weight: '400',
    display: 'swap',
    variable: '--font-main',
});
