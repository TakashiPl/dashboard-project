import { click } from '@testing-library/user-event/dist/click';
import React, { useState, useEffect } from 'react';

interface HeaderProps {
    title: string;
    subtitle?: string;
    version?: number;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle = "Default subtitle", version = 1.0  }: HeaderProps) => {
    const [clickCount, setClickCount] = useState(0);
    const body = document.querySelector('body')!;
    const handleClick = () => {
        setClickCount(clickCount + 1);
        alert(`Header clicked ${clickCount + 1} times`);
    }
    type theme = 'light' | 'dark';
    const [theme, setTheme] = useState<theme>('light');
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        if (theme === 'light') {
            body.classList.remove('light');
            body.setAttribute('class', 'dark');
        } else {
            body.classList.remove('dark');
            body.setAttribute('class', 'light');
        }
    }
    
    
    return (
    <header style={{
        backgroundColor: '#f0f0f0' ,
        padding: '20px',
        textAlign: 'center'
    }}>
        <h1 style={{ margin: 0, color: '#333'}}>
            {title} v{version}
        </h1>
        {subtitle && <p>{subtitle}</p>} {}
        <small>Today is: {new Date().toLocaleDateString()}</small>
        <br/>
        <button onClick={handleClick} style={{
            marginTop: '10px',}}>click me</button>
        {clickCount > 0 && (<p>Header clicked {clickCount} times</p>)}
        <button onClick={toggleTheme}>Change theme</button>
        {theme === 'light' ? (
            <div style={{ marginTop: '10px', padding: '10px', backgroundColor: '#fff', color: '#000' }}>
                Light Theme Active
            </div>
        ) : (
            <div style={{ marginTop: '10px', padding: '10px', backgroundColor: '#333', color: '#fff' }}>
                Dark Theme Active
            </div>
        )}
    </header>
    );
}
export default Header;