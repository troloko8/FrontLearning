import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';

const OldRedux: React.FC = () => {

    const count = useSelector((state: any) => state.count.count);
    const customers = useSelector((state: any) => state.customers.customers );

    const dispatch = useDispatch();

    const increment = (count: number) => {
        dispatch({ type: 'INCREMENT', payload: count });
    };

    const decrement = (count: number) => {
        dispatch({ type: 'DECREMENT', payload: count});
    };

    const addCustomer = (name: string) => {
        const customer = {
            name,
            id: Date.now()
        }
        dispatch(addCustomerAction(name, customer));
    };

    const removeCustomer = (id: number) => {
        dispatch(removeCustomerAction(id));
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => increment(1)}>Increment</button>
            <button onClick={() => decrement(1)}>Decrement</button>

            <button onClick={() => removeCustomer(customers[customers.length - 1]?.id)}>Remove Customer</button>
            <button onClick={() => addCustomer('Customer ' + (customers.length + 1))}>Add Customer</button>

        {customers.length > 0 && (
            <>
                <h1>Customers: {customers.length}</h1>
                {customers.map((customer: any) => <div key={customer.id}>{customer.name}</div>)}
            </>
        )}
        {customers.length === 0 && (
            <h1>No customers</h1>
        )}
        </div>
    );
};

export default OldRedux;