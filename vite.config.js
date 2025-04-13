import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ViteSitemap from 'vite-plugin-sitemap';
import { createHtmlPlugin } from 'vite-plugin-html';

const routes = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
];

export default defineConfig({
  plugins: [
    react(),
    ViteSitemap({
      hostname: 'https://kevin.clabedautos.com', // corrected from `baseUrl`
      routes,
      generateRobotsTxt: true,
    }),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'React Frontend Developer | Kevin Odeyemi - Modern Web & App Interfaces',
          keywords: 'Kevin Odeyemi, Frontend Developer, React Developer, JavaScript Developer, Web Developer, UI/UX Designer, ReactJS, React Native, Vite, Modern Web Development, Mobile App Developer, Responsive Web Design, Clean UI, App Interface Design',
          description: 'Kevin Odeyemi is a skilled React frontend developer specializing in modern, responsive websites and mobile apps. Expert in React, JavaScript, and clean UI/UX design, delivering scalable solutions for global clients.',                  
        },
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
});