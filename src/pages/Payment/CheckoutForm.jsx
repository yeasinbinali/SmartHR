import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import Swal from 'sweetalert2';

const CheckoutForm = ({ user }) => {
    console.log(user);
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const axiosSecure = useAxiosPrivate();
    const salary = user.salary;
    console.log(salary);

    useEffect(() => {
        if (salary > 0) {
            axiosSecure.post('/create-payment-intent', {
                price: salary
            })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [axiosSecure, salary])

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            return; // Exit if there's an error creating the payment method
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }

        try {
            const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card, // Ensure this is the card element, not user
                    billing_details: {
                        email: user?.email || 'anonymous',
                        name: user?.displayName || 'anonymous',
                    },
                },
            });

            if (confirmError) {
                console.log('confirm error', confirmError);
            } else {
                console.log('payment intent', paymentIntent);
                if (paymentIntent?.status === 'succeeded') {
                    console.log('Transaction id', paymentIntent.id);
                    setTransactionId(paymentIntent.id);

                    // Save the payment in the database
                    const payment = {
                        email: user?.email,
                        price: salary,
                        transactionId: paymentIntent.id,
                        date: new Date(),
                        userId: user._id,
                        status: 'pending',
                    };

                    const res = await axiosSecure.post('/payment', payment);
                    if (res.data?.data?.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Paid the salary',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                }
            }
        } catch (err) {
            console.error('Error confirming card payment:', err);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='btn btn-sm bg-main px-2 py-1 text-secondary my-6' type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            {
                transactionId && <p className='text-primary'>Your transaction id: {transactionId}</p>
            }
        </form>
    );
};

export default CheckoutForm;