import React, { useCallback, useEffect } from 'react';

const mockUsers = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 22 },
    { id: 4, name: 'Diana', age: 28 },
    { id: 5, name: 'Eve', age: 35 },
    { id: 6, name: 'Frank', age: 40 },
    { id: 7, name: 'Grace', age: 27 },
    { id: 8, name: 'Hank', age: 33 },
    { id: 9, name: 'Ivy', age: 29 },
    { id: 10, name: 'Jack', age: 31 },
];

const OptimazedList: React.FC = () => {
    const [users, setUsers] = React.useState(mockUsers);

    // useCallback to memoize the click handler
    const handleClick = useCallback(() => {
        console.log('Clicked row:');
    }, []);

    useEffect(() => {
        const updateID: number = 1
        
        // Simulate data fetching
        const timer = setTimeout(() => {
            console.error('- - -- - - - - - - - - -- - - -')
            // rerender just for one item
            setUsers(prev => prev.map(item =>
                // rerender just for one item
                item.id === updateID 
                    ? { ...item, age: item.age + 1, name: 'Nafty'} 
                    : item
            ))
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <ul>
            {users.map((user) => (
                <Row 
                    key={user.id} 
                    name={user.name} 
                    age={user.age} 
                    onClick={handleClick} 
                />
            ))}
        </ul>
    );
};

const Row: React.FC<{ name: string; age: number, onClick?: () => void }> = React.memo(({ name, age, onClick }) => {
    console.log('Row render: ', name );
    return (
        <li onClick={onClick}>
            {name} - {age} years old
        </li>
    );
});

export default OptimazedList;