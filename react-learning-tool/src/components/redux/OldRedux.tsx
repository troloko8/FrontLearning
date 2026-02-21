import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addCustomerAction, addManyCustomersAction, removeCustomerAction, sagaFetchUsers } from './store/customerReducer';
import { fetchCustomers } from './store/asyncActions/customers';
import { asyncDecrementCreator, asyncIncrementCreator, decrementCustomAction, incrementCustomAction } from './store/countReducer';

const OldRedux: React.FC = () => {

    const count = useSelector((state: any) => state.count.count);
    const customers = useSelector((state: any) => state.customers.customers );

    const dispatch = useDispatch();

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
            <button onClick={() => dispatch(incrementCustomAction(1))}>Increment</button>
            <button onClick={() => dispatch(decrementCustomAction(1))}>Decrement</button>

            <h1>SAGA Count: {count}</h1>
            <button onClick={() => dispatch(asyncIncrementCreator(1))}>Saga Increment</button>
            <button onClick={() => dispatch(asyncDecrementCreator(1))}>Saga Decrement</button>

            <h1>Customers: {customers.length}</h1>

            <button onClick={() => removeCustomer(customers[customers.length - 1]?.id)}>Remove Customer</button>
            <button onClick={() => addCustomer('Customer ' + (customers.length + 1))}>Add Customer</button>
            <button onClick={() => dispatch(fetchCustomers() as any)}>Fetch Customers</button>
            <button onClick={() => dispatch(sagaFetchUsers())}>Saga Fetch Customers</button>
            
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