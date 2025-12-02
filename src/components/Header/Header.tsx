import React from 'react';
interface HeaderProps {
    title: string;
    subtitle?: string;
    version?: number;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle = "Default subtitle", version = 1.0  }: HeaderProps) => {
    
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
    </header>
    );
}
export default Header;