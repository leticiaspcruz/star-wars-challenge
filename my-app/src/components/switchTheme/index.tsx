'use client';
import React from 'react'
import { useContext } from 'react';
import { ThemeContext } from '@/providers/ThemeContext';

const SwitchTheme = () => {
    const themeContext = useContext(ThemeContext);
    const { toggleTheme, theme } = themeContext;

    console.log('themeContext --', themeContext);
    console.log('theme --', theme);
    console.log('toggleTheme --', toggleTheme);

    console.log("switch renderizado");
    return (
        <button onClick={toggleTheme}>            
            Mudar tema - Tema atual: {theme}
        </button>
    );
}

export default SwitchTheme;