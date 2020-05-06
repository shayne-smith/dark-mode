import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key) => {
    console.log('useDarkMode is running');

    const [value, setValue] = useLocalStorage(key);

    useEffect(() => {
        const body = document.getElementById('body');
        if (value) {
            body.classList.add("dark-mode");
            // debugger
        } else {
            body.classList.remove('dark-mode');
        }
    }, [value]);

    return [value, setValue];
};