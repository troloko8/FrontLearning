
import React, { useState } from 'react';
import Portal from './Portal';


const PortalExaple = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <div>
        <h1>React Portal Example</h1>
        <button onClick={openModal}>Open Modal</button>

        {isModalOpen && (
            <Portal>
                <div className="modal-overlay" onClick={closeModal}>
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                    <h2>Modal Content</h2>
                    <p>This is rendered using React Portal!</p>
                    <button onClick={closeModal}>Close</button>
                </div>
                </div>
            </Portal>
        )}
        </div>
    )
}

export default PortalExaple;
