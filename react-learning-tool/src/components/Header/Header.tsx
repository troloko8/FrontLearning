import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <h1>React Learning Tool</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/lessons">Lessons</a></li>
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li><a href="/profile">Profile</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;