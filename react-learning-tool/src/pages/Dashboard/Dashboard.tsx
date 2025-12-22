import React from 'react';
import styles from './Dashboard.module.css';

const Dashboard: React.FC = () => {
    return (
        <div className={styles.dashboard}>
            <h1>Dashboard</h1>
            <p>Welcome to the dashboard! Here you can find an overview of your progress and access various resources to enhance your learning.</p>
        </div>
    );
};

export default Dashboard;