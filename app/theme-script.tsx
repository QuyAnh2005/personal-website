"use client";

import { useTheme } from 'next-themes';
import { useEffect } from 'react';

export function ThemeScript() {
  const { theme, setTheme } = useTheme();

  // Apply theme class on mount and when theme changes
  useEffect(() => {
    // Get stored theme from localStorage or default to light
    const storedTheme = localStorage.getItem('theme') || 'light';
    
    // Apply the stored theme
    setTheme(storedTheme);
    
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(storedTheme);
    
    // Debug log
    console.log('Initial theme loaded:', storedTheme);
    console.log('Current HTML classes:', root.className);
  }, [setTheme]);

  // Update localStorage and document class when theme changes
  useEffect(() => {
    if (theme) {
      localStorage.setItem('theme', theme);
      
      const root = window.document.documentElement;
      root.classList.remove('light', 'dark');
      root.classList.add(theme);
    }
  }, [theme]);

  return null;
}
