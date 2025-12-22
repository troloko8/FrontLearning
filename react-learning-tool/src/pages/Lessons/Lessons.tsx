import React from 'react';
import styles from './Lessons.module.css';

const Lessons: React.FC = () => {
    return (
        <div className={styles.lessonsContainer}>
            <h1>Lessons</h1>
            <p>Welcome to the lessons page. Here you will find various resources to enhance your front-end development skills.</p>
            {/* Additional content and components can be added here */}
        </div>
    );
};

export default Lessons;