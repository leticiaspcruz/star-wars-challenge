import React from 'react'
import { useTheme } from '@/hooks';

const SwitchTheme = () => {
    const { toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>Mudar tema</button>
    );
}

export default SwitchTheme;