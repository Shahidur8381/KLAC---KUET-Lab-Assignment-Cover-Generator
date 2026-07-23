import React, { useState, useEffect, useRef } from 'react';
import { teachersData } from './data/teachers';

export default function AutocompleteInput({ value, onChange }) {
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setShowSuggestions(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleInputChange = (e) => {
        const userInput = e.target.value;
        onChange(userInput); // Update parent's state

        // Filter suggestions based on user input
        if (userInput.trim().length > 0) {
            const filtered = teachersData.filter(teacher =>
                teacher.name.toLowerCase().includes(userInput.toLowerCase())
            );
            setSuggestions(filtered);
            setShowSuggestions(true);
        } else {
            setSuggestions([]);
            setShowSuggestions(false);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        onChange(suggestion.name); // Set the parent's state with exact name
        setShowSuggestions(false);
    };

    return (
        <div ref={wrapperRef} style={{ position: 'relative' }}>
            <input 
                type="text" 
                value={value} 
                onChange={handleInputChange} 
                onFocus={() => { if (value && suggestions.length > 0) setShowSuggestions(true); }}
                placeholder="Type name (e.g., M. M. A. Hashem)"
            />
            {showSuggestions && suggestions.length > 0 && (
                <ul style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    margin: 0,
                    padding: 0,
                    listStyle: 'none',
                    backgroundColor: '#fff',
                    border: '1px solid #ccc',
                    borderTop: 'none',
                    borderRadius: '0 0 4px 4px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    maxHeight: '150px',
                    overflowY: 'auto',
                    zIndex: 10
                }}>
                    {suggestions.map(suggestion => (
                        <li 
                            key={suggestion.id}
                            onClick={() => handleSuggestionClick(suggestion)}
                            style={{
                                padding: '8px 12px',
                                cursor: 'pointer',
                                borderBottom: '1px solid #eee'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f7fa'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff'}
                        >
                            {suggestion.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
