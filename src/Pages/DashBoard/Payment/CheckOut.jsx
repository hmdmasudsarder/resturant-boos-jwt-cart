import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState, useEffect, useContext } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import { AuthContext } from "../../../Provider/AuthProvider";
const CheckOut = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext)
    const [cart] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    useEffect(() => {
        axiosSecure.post('/create-payment', {price: totalPrice})
        .then( res => {
            console.log(res.data.clientSecret)
            setClientSecret(res.data.clientSecret)
        })
    }, [axiosSecure, totalPrice])
    const handleSubmit = async(e) => {
        e.preventDefault();
        if(!stripe || !elements){
            return;
        }
        const card = elements.getElement(CardElement);
        if(card === null){
            return;
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if(error){
            console.log('payment error', error)
            setError(error.message)
        }
        else{
            console.log("payment method", paymentMethod)
            setError('')
        }

        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email,
                    name: user?.displayName,
                }
            }
        })
        if(confirmError){
            console.log('confirm error')
        }
        else{
            console.log(paymentIntent)
        }
    } 
    return (
        <div>
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
            <button className="btn btn-sm btn-primary my-4" type="submit">
                Pay
            </button>
            <p className="text-red-600">{error}</p>
            </form>
        </div>
    );
};

export default CheckOut;