import React from 'react';
import { Link } from 'react-router-dom';

export const Error = () => {
    return <section className="error-page">
        <h2>Oops! It's A Dead End</h2>
        <Link to="/" className="btn back-home-btn">Back Home</Link>
    </section>
}