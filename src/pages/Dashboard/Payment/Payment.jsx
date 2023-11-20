import { loadStripe } from "@stripe/stripe-js";
import Sectiontitle from "../../../components/Sectiontitle/Sectiontitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// Using Stripe for Payment 
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

const Payment = () => {
    return (
        <div>
            <Sectiontitle heading="Payment" subHeading="---Please Pay---"></Sectiontitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;