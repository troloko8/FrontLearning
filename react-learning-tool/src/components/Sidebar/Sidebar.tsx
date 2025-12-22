import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar: React.FC = () => {
    return (
        <div className={styles.sidebar}>
            <h2>Navigation</h2>
            <ul>
                <li><a href="/dashboard">Dashboard</a></li>
                <li><a href="/lessons">Lessons</a></li>
                <li><a href="/profile">Profile</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;