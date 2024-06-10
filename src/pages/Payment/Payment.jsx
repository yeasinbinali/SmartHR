import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PrivateContainerHeader from '../../components/PrivateContainerHeader/PrivateContainerHeader';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const user = useLoaderData();

    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
    return (
        <div className='mt-5 ml-5'>
            <PrivateContainerHeader title={`Payment for ${user.name}`}></PrivateContainerHeader>
            <Elements stripe={stripePromise}>
                <CheckoutForm user={user}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;