import React from 'react';

const FragmentsExample: React.FC = () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];

    return (
        <div>
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <p>{item}</p>
                    <hr />
                </React.Fragment>
            ))}
        </div>
    );
};

export default FragmentsExample;