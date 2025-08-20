import React from 'react';

export default function Header() {
    return (
        <header style={{
            position: 'fixed',
            top: 0,
            right: 0,
            width: '60px',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(255,255,255,0.9)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            zIndex: 1000,
            borderBottomLeftRadius: '16px'
        }}>
            <a href="/" aria-label="Home" style={{ color: '#222', textDecoration: 'none' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 12L12 3l9 9"/>
                    <path d="M9 21V12h6v9"/>
                </svg>
            </a>
        </header>
    );
}
