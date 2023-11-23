import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import SectionsTitle from "../../../Components/SectionsTitle/SectionsTitle";
import CheckOut from "./CheckOut";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY);
const Payment = () => {
    return (
        <div>
            <SectionsTitle heading="Payment please" subHeading="YOUR WANT TO BEST BUY YOU ARE WINE"></SectionsTitle>
            <div className="">
                <h1>Payment please</h1>
                <Elements stripe={stripePromise}>
                    <CheckOut></CheckOut>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;