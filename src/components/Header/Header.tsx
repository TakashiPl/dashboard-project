import { click } from '@testing-library/user-event/dist/click';
import React, { useState } from 'react';
interface HeaderProps {
    title: string;
    subtitle?: string;
    version?: number;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle = "Default subtitle", version = 1.0  }: HeaderProps) => {
    const [clickCount, setClickCount] = useState(0);
    const handleClick = () => {
        setClickCount(clickCount + 1);
        alert(`Header clicked ${clickCount + 1} times`);
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
    </header>
    );
}
export default Header;