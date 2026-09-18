import React, { useState } from 'react';
import { teachersData } from './data/teachers';

export default function TelephoneIndex() {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredTeachers = teachersData.filter(teacher => {
        const query = searchQuery.toLowerCase().trim();
        if (!query) return true;
        return (
            (teacher.name && teacher.name.toLowerCase().includes(query)) ||
            (teacher.ext && teacher.ext.toLowerCase().includes(query)) ||
            (teacher.room && teacher.room.toLowerCase().includes(query)) ||
            (teacher.mobile && teacher.mobile.toLowerCase().includes(query)) ||
            (teacher.email && teacher.email.toLowerCase().includes(query))
        );
    });

    const formatTelUri = (phone) => {
        if (!phone || phone === '-') return '';
        return `tel:${phone.replace(/[^0-9+]/g, '')}`;
    };

    return (
        <div className="telephone-index-container">
            <div className="index-header">
                <h1 className="index-title">CSE Telephone Index</h1>
                
                <div className="search-box-wrapper">
                    <div className="search-input-container">
                        <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                        <input
                            type="text"
                            className="telephone-search-input"
                            placeholder="Search by name, room, ext, phone, email..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            aria-label="Search teachers telephone index"
                        />
                        {searchQuery && (
                            <button 
                                className="search-clear-btn" 
                                onClick={() => setSearchQuery('')}
                                title="Clear search"
                                type="button"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        )}
                    </div>
                    <div className="search-results-counter">
                        {searchQuery ? (
                            <span>Found <strong>{filteredTeachers.length}</strong> of <strong>{teachersData.length}</strong> teachers</span>
                        ) : (
                            <span>Total <strong>{teachersData.length}</strong> teachers</span>
                        )}
                    </div>
                </div>
            </div>

            <div className="table-responsive">
                <table className="telephone-table">
                    <thead>
                        <tr>
                            <th>Sl.</th>
                            <th>Name</th>
                            <th>KUET Ext.</th>
                            <th>Room No.</th>
                            <th>Mobile</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTeachers.length > 0 ? (
                            filteredTeachers.map((teacher, idx) => (
                                <tr key={teacher.id}>
                                    <td className="col-id">{idx + 1}</td>
                                    <td className="col-name">{teacher.name}</td>
                                    <td className="col-ext">{teacher.ext}</td>
                                    <td className="col-room">{teacher.room}</td>
                                    <td className="col-mobile">
                                        {teacher.mobile && teacher.mobile !== '-' ? (
                                            <a 
                                                href={formatTelUri(teacher.mobile)} 
                                                className="tel-link"
                                                title={`Call ${teacher.name} at ${teacher.mobile}`}
                                            >
                                                <svg className="tel-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                                </svg>
                                                <span>{teacher.mobile}</span>
                                            </a>
                                        ) : (
                                            <span className="text-muted">-</span>
                                        )}
                                    </td>
                                    <td className="col-email">
                                        {teacher.email && teacher.email !== '-' ? (
                                            <a 
                                                href={`mailto:${teacher.email}`}
                                                className="email-link"
                                                title={`Email ${teacher.name}`}
                                            >
                                                <svg className="email-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                                    <polyline points="22,6 12,13 2,6"></polyline>
                                                </svg>
                                                <span>{teacher.email}</span>
                                            </a>
                                        ) : (
                                            <span className="text-muted">-</span>
                                        )}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="no-results-cell">
                                    <div className="no-results-container">
                                        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#a0aec0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="11" cy="11" r="8"></circle>
                                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                            <line x1="8" y1="11" x2="14" y2="11"></line>
                                        </svg>
                                        <p className="no-results-text">No teachers found matching "<strong>{searchQuery}</strong>"</p>
                                        <button className="clear-search-action-btn" onClick={() => setSearchQuery('')}>
                                            Reset Search
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

