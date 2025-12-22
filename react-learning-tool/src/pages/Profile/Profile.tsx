import React from 'react';
import styles from './Profile.module.css';

const Profile: React.FC = () => {
    return (
        <div className={styles.profileContainer}>
            <h1>User Profile</h1>
            <p>Welcome to your profile page. Here you can manage your account settings and preferences.</p>
            {/* Additional profile details and settings can be added here */}
        </div>
    );
};

export default Profile;