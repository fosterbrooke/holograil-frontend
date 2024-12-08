import { fetchAPI } from "./api";

export const pricingPlans = {
    "onetime": "price_1PycsEJlIvt55eMlzHaHkd9a",
    "year": "price_1PycseJlIvt55eMlDRFmQDfR",
    "month": "price_1Pyct6JlIvt55eMlTbd4SHN9",
    "day": "price_1PyctZJlIvt55eMlorJURoTl"
}

async function handlePurchase(email: string, planId: string) {
    try {
        const session = await fetchAPI(
            `/subscriptions/create-checkout-session?user_mail=${encodeURIComponent(
                email
            )}&plan_id=${planId}`,
            {
                method: "POST",
                headers: {
                    accept: "application/json",
                },
                body: JSON.stringify({}), // Empty body as per the sample
            }
        );
        window.location.href = session.url; // Redirect to Stripe checkout
    } catch (error) {
        console.error("Error creating checkout session:", error);
    }
}

export default handlePurchase;