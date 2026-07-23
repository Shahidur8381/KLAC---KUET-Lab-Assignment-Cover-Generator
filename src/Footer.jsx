import React from 'react';

export default function Footer() {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <footer className="app-footer">
            <div className="footer-content">
                <p>
                    Developed with ❤️ and lots of ☕ by <strong>MD. Shahidur Rahman Shawon</strong>.
                </p>
                <p>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shahidur8381@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-link">Contact Developer</a>
                </p>
                <div className="footer-meta">
                    <span>Copyright Free &bull; Anyone can copy</span>
                    <span className="separator">|</span>
                    <span>Last Updated: {formattedDate}</span>
                </div>
            </div>
        </footer>
    );
}
