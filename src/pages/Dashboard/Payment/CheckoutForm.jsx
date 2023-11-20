import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";

const CheckoutForm = () => {
    const [cart] = useCart()
    const {user} = useAuth()
    const totalPrice = cart?.reduce((total, item)=>total + item.price, 0)
    console.log(totalPrice);
    const stripe = useStripe()
    const elements = useElements()
    const axiosSecure = useAxiosSecure()
    
    const [transactionId, setTransactionId ] = useState('')
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')

    useEffect(()=>{
        // axiosSecure.post('/create-payment-intent', {price: totalPrice})
        // .then(res =>{
        //     console.log(res.data.clientSecret);
        //     setClientSecret(res.data.clientSecret)
        // })
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log('[error]', error);
            setError(error.message)
          } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
          }

        // Confirm Payment 
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method:{
                card: card,
                billing_details: {
                    name: user?.displayName || 'Anonimous',
                    email: user?.email || 'Anonimous'
                }
            }
        })  
        if(confirmError){
            console.log(confirmError);
        }
        else{
            console.log(paymentIntent);
            if(paymentIntent.status === 'succeeded'){
                console.log('Transaction Id', paymentIntent.id);
                setTransactionId(paymentIntent.id)
            }
        }

    }

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
            <button className="btn btn-sm btn-outline btn-secondary my-3" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className="text-red-600">{error}</p>
            {transactionId && <p className="text-green-600">Payment Successul. Your Transaction Id: {transactionId}</p>}
        </form>
    );
};

export default CheckoutForm;