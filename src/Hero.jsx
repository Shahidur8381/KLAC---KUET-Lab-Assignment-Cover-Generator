import React from 'react';

export default function Hero({ activeMode, setActiveMode }) {
    return (
        <header className="hero">
            <h1>KUET Cover Page Suite</h1>
            <p>Choose a formal generator, fill your details, and export a polished PDF in one click.</p>
            <div className="mode-switch">
                <button
                    className={`mode-btn ${activeMode === 'assignment' ? 'active' : ''}`}
                    onClick={() => setActiveMode('assignment')}
                >
                    Assignment Cover Page Generator
                </button>
                <button
                    className={`mode-btn ${activeMode === 'lab' ? 'active' : ''}`}
                    onClick={() => setActiveMode('lab')}
                >
                    Lab Report Cover Page Generator
                </button>
                <button
                    className={`mode-btn ${activeMode === 'project' ? 'active' : ''}`}
                    onClick={() => setActiveMode('project')}
                >
                    Project Report Cover Page Generator
                </button>
                <button
                    className={`mode-btn ${activeMode === 'index' ? 'active' : ''}`}
                    onClick={() => setActiveMode('index')}
                >
                    CSE Telephone Index
                </button>
            </div>
        </header>
    );
}
