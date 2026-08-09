// "use client";

// import { useState, useEffect } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import Link from "next/link";
// import { useCart } from "@/context/CartContext";

// export default function CheckoutPage() {

//   const { cart, cartSubtotal, clearCart } = useCart();
//   const [step, setStep] = useState(1); // 1 = Shipping, 2 = Review & Payments

//   const shippingCost = 10.0;
//   const taxCost = 0.0;
//   const totalCost = cartSubtotal + (cart.length > 0 ? shippingCost : 0) + taxCost;

//   // Form State
//   const [formData, setFormData] = useState({
//     email: "anonnoruddho@gmail.com",
//     newsletter: false,
//     firstName: "Iftekhar",
//     lastName: "Ahmed",
//     streetAddress: "Paris Street",
//     apartment: "",
//     country: "France",
//     city: "Paris",
//     zipCode: "75001",
//     phone: "01752588636",
//     shippingMethod: "dpd",
//   });

//   // Payment State
//   const [selectedPayment, setSelectedPayment] = useState("card"); // 'applepay', 'card', 'alma'
//   const [sameBillingAddress, setSameBillingAddress] = useState(true);
//   const [agreedTerms, setAgreedTerms] = useState(false);

//   // Card details
//   const [cardData, setCardData] = useState({
//     cardNumber: "",
//     expiryDate: "",
//     cvv: "",
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleCardChange = (e) => {
//     const { name, value } = e.target;
//     setCardData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handlePlaceOrder = (e) => {
//     e.preventDefault();
//     if (!agreedTerms) {
//       alert("Please agree to the terms and conditions.");
//       return;
//     }

//     const orderPayload = {
//       orderId: `TRD-${Date.now()}`,
//       customer: formData,
//       items: cart,
//       paymentMethod: selectedPayment,
//       totals: {
//         subtotal: cartSubtotal,
//         shipping: shippingCost,
//         tax: taxCost,
//         total: totalCost,
//       },
//       createdAt: new Date().toISOString(),
//     };

//     console.log("Order Processed Successfully:", orderPayload);
//     alert(`Order ${orderPayload.orderId} placed successfully!`);
    
//     if (clearCart) clearCart();
//   };

//   return (
//     <main className="min-h-screen bg-white text-neutral-900 pt-24 pb-20 font-serif">
//       <div className="max-w-6xl mx-auto px-6">
        
//         <h1 className="text-center text-xl tracking-[0.3em] font-light uppercase my-6">
//           CHECKOUT
//         </h1>

//         {/* Steps Navigation */}
//         <div className="flex border-b border-neutral-200 mb-10 text-xs tracking-[0.2em] uppercase font-medium">
//           <button
//             onClick={() => setStep(1)}
//             className={`py-3 px-6 flex items-center gap-2 transition-all ${
//               step === 1
//                 ? "border-b-2 border-black text-black font-semibold bg-neutral-50"
//                 : "text-neutral-400 hover:text-black"
//             }`}
//           >
//             <span className="font-sans">1.</span> SHIPPING
//           </button>
//           <button
//             onClick={() => setStep(2)}
//             className={`py-3 px-6 flex items-center gap-2 transition-all ${
//               step === 2
//                 ? "border-b-2 border-black text-black font-semibold bg-neutral-50"
//                 : "text-neutral-400 hover:text-black"
//             }`}
//           >
//             <span className="font-sans">2.</span> REVIEW & PAYMENTS
//           </button>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
//           {/* Main Left Column */}
//           <div className="lg:col-span-2 space-y-8">
//             {step === 1 ? (
//               /* --- STEP 1: SHIPPING FORM --- */
//               <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="space-y-6">
//                 <div>
//                   <div className="flex justify-between items-center mb-2">
//                     <h2 className="text-xs tracking-[0.2em] uppercase font-semibold text-neutral-800">
//                       SHIPPING ADDRESS
//                     </h2>
//                   </div>

//                   <div className="space-y-3 font-sans">
//                     <label className="block text-xs uppercase tracking-wider text-neutral-600 font-serif">
//                       EMAIL ADDRESS
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       required
//                       value={formData.email}
//                       onChange={handleChange}
//                       className="w-full border border-neutral-300 p-3 text-xs focus:outline-none focus:border-black"
//                     />

//                     <label className="flex items-center gap-2 text-xs text-neutral-600 font-serif pt-2 cursor-pointer">
//                       <input
//                         type="checkbox"
//                         name="newsletter"
//                         checked={formData.newsletter}
//                         onChange={handleChange}
//                         className="accent-black"
//                       />
//                       SIGN UP TO OUR NEWSLETTER, AND GET ALL THE NEWS FIRST HAND ABOUT TRUDON
//                     </label>
//                   </div>
//                 </div>

//                 <hr className="border-neutral-200" />

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs">
//                   <div>
//                     <label className="block uppercase tracking-wider text-neutral-600 font-serif mb-1">
//                       FIRST NAME
//                     </label>
//                     <input
//                       type="text"
//                       name="firstName"
//                       required
//                       value={formData.firstName}
//                       onChange={handleChange}
//                       className="w-full border border-neutral-300 p-3 focus:outline-none focus:border-black"
//                     />
//                   </div>
//                   <div>
//                     <label className="block uppercase tracking-wider text-neutral-600 font-serif mb-1">
//                       LAST NAME
//                     </label>
//                     <input
//                       type="text"
//                       name="lastName"
//                       required
//                       value={formData.lastName}
//                       onChange={handleChange}
//                       className="w-full border border-neutral-300 p-3 focus:outline-none focus:border-black"
//                     />
//                   </div>
//                 </div>

//                 <div className="space-y-4 font-sans text-xs">
//                   <div>
//                     <label className="block uppercase tracking-wider text-neutral-600 font-serif mb-1">
//                       STREET ADDRESS
//                     </label>
//                     <input
//                       type="text"
//                       name="streetAddress"
//                       required
//                       value={formData.streetAddress}
//                       onChange={handleChange}
//                       className="w-full border border-neutral-300 p-3 focus:outline-none focus:border-black"
//                     />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans text-xs">
//                   <div>
//                     <label className="block uppercase tracking-wider text-neutral-600 font-serif mb-1">
//                       COUNTRY
//                     </label>
//                     <select
//                       name="country"
//                       value={formData.country}
//                       onChange={handleChange}
//                       className="w-full border border-neutral-300 p-3 bg-white focus:outline-none focus:border-black font-serif"
//                     >
//                       <option value="France">France</option>
//                       <option value="United States">United States</option>
//                       <option value="Germany">Germany</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="block uppercase tracking-wider text-neutral-600 font-serif mb-1">
//                       CITY
//                     </label>
//                     <input
//                       type="text"
//                       name="city"
//                       required
//                       value={formData.city}
//                       onChange={handleChange}
//                       className="w-full border border-neutral-300 p-3 focus:outline-none focus:border-black"
//                     />
//                   </div>

//                   <div>
//                     <label className="block uppercase tracking-wider text-neutral-600 font-serif mb-1">
//                       ZIP / POSTAL CODE
//                     </label>
//                     <input
//                       type="text"
//                       name="zipCode"
//                       required
//                       value={formData.zipCode}
//                       onChange={handleChange}
//                       className="w-full border border-neutral-300 p-3 focus:outline-none focus:border-black"
//                     />
//                   </div>
//                 </div>

//                 <div className="font-sans text-xs">
//                   <label className="block uppercase tracking-wider text-neutral-600 font-serif mb-1">
//                     MOBILE PHONE NUMBER
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     required
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full border border-neutral-300 p-3 focus:outline-none focus:border-black"
//                   />
//                 </div>

//                 <div className="pt-4">
//                   <button
//                     type="submit"
//                     className="px-12 py-3.5 bg-neutral-900 text-white text-xs tracking-[0.25em] uppercase hover:bg-neutral-800 transition-colors"
//                   >
//                     NEXT
//                   </button>
//                 </div>
//               </form>
//             ) : (
//               /* --- STEP 2: PAYMENT METHOD (TRUDON STYLE) --- */
//               <div className="space-y-6">
//                 <h2 className="text-xs tracking-[0.2em] uppercase font-semibold text-neutral-800">
//                   PAYMENT METHOD
//                 </h2>

//                 <div className="space-y-4">
//                   {/* Option 1: APPLE PAY */}
//                   <div className="border border-neutral-200 p-4">
//                     <label className="flex items-center gap-3 cursor-pointer">
//                       <input
//                         type="radio"
//                         name="paymentMethod"
//                         value="applepay"
//                         checked={selectedPayment === "applepay"}
//                         onChange={() => setSelectedPayment("applepay")}
//                         className="accent-black"
//                       />
//                       <span className="text-xs uppercase tracking-widest font-medium">APPLE PAY</span>
//                     </label>

//                     {selectedPayment === "applepay" && (
//                       <div className="mt-6 pl-7 space-y-4">
//                         <label className="flex items-center gap-2 text-xs font-sans text-neutral-600 cursor-pointer">
//                           <input
//                             type="checkbox"
//                             checked={agreedTerms}
//                             onChange={(e) => setAgreedTerms(e.target.checked)}
//                             className="accent-black"
//                           />
//                           I AGREE TO THE TERMS & CONDITIONS
//                         </label>

//                         <button
//                           onClick={handlePlaceOrder}
//                           className="w-full max-w-xs py-3 bg-black text-white rounded-md flex items-center justify-center gap-2 hover:bg-neutral-800 transition-colors"
//                         >
//                           <span className="text-base font-sans font-medium">Pay</span>
//                         </button>
//                       </div>
//                     )}
//                   </div>

//                   {/* Option 2: CARDS (CREDIT CARD) */}
//                   <div className="border border-neutral-200 p-4">
//                     <label className="flex items-center gap-3 cursor-pointer">
//                       <input
//                         type="radio"
//                         name="paymentMethod"
//                         value="card"
//                         checked={selectedPayment === "card"}
//                         onChange={() => setSelectedPayment("card")}
//                         className="accent-black"
//                       />
//                       <span className="text-xs uppercase tracking-widest font-medium">CARDS</span>
//                     </label>

//                     {selectedPayment === "card" && (
//                       <div className="mt-6 pl-7 space-y-5">
//                         <label className="flex items-center gap-2 text-xs font-sans text-neutral-600 cursor-pointer">
//                           <input
//                             type="checkbox"
//                             checked={sameBillingAddress}
//                             onChange={(e) => setSameBillingAddress(e.target.checked)}
//                             className="accent-black"
//                           />
//                           MY BILLING AND SHIPPING ADDRESS ARE THE SAME
//                         </label>

//                         {/* Billing summary preview */}
//                         <div className="text-xs font-sans text-neutral-500 space-y-0.5 leading-relaxed bg-neutral-50 p-3 border border-neutral-100">
//                           <p className="font-semibold text-neutral-800">{formData.firstName} {formData.lastName}</p>
//                           <p>{formData.streetAddress}</p>
//                           <p>{formData.city}, {formData.zipCode}</p>
//                           <p>{formData.country}</p>
//                           <p>{formData.phone}</p>
//                         </div>

//                         {/* Card Input Fields */}
//                         <div className="space-y-4 font-sans text-xs max-w-md">
//                           <div>
//                             <label className="block font-serif text-[11px] uppercase tracking-wider text-neutral-600 mb-1">
//                               Card number *
//                             </label>
//                             <input
//                               type="text"
//                               name="cardNumber"
//                               placeholder="•••• •••• •••• ••••"
//                               value={cardData.cardNumber}
//                               onChange={handleCardChange}
//                               className="w-full border border-neutral-300 p-3 text-xs focus:outline-none focus:border-black"
//                             />
//                             <div className="flex gap-2 mt-1.5 opacity-70">
//                               <span className="px-1.5 py-0.5 bg-neutral-200 text-[10px] rounded font-bold">VISA</span>
//                               <span className="px-1.5 py-0.5 bg-neutral-200 text-[10px] rounded font-bold">MC</span>
//                             </div>
//                           </div>

//                           <div className="grid grid-cols-2 gap-4">
//                             <div>
//                               <label className="block font-serif text-[11px] uppercase tracking-wider text-neutral-600 mb-1">
//                                 Expiry date *
//                               </label>
//                               <input
//                                 type="text"
//                                 name="expiryDate"
//                                 placeholder="MM / YY"
//                                 value={cardData.expiryDate}
//                                 onChange={handleCardChange}
//                                 className="w-full border border-neutral-300 p-3 text-xs focus:outline-none focus:border-black"
//                               />
//                             </div>

//                             <div>
//                               <label className="block font-serif text-[11px] uppercase tracking-wider text-neutral-600 mb-1">
//                                 Security code *
//                               </label>
//                               <input
//                                 type="password"
//                                 name="cvv"
//                                 maxLength={4}
//                                 placeholder="3 digits on back"
//                                 value={cardData.cvv}
//                                 onChange={handleCardChange}
//                                 className="w-full border border-neutral-300 p-3 text-xs focus:outline-none focus:border-black"
//                               />
//                             </div>
//                           </div>
//                         </div>

//                         <label className="flex items-center gap-2 text-xs font-sans text-neutral-600 cursor-pointer pt-2">
//                           <input
//                             type="checkbox"
//                             checked={agreedTerms}
//                             onChange={(e) => setAgreedTerms(e.target.checked)}
//                             className="accent-black"
//                           />
//                           I AGREE TO THE TERMS & CONDITIONS
//                         </label>

//                         <button
//                           onClick={handlePlaceOrder}
//                           className="px-10 py-3.5 bg-neutral-900 text-white text-xs tracking-[0.2em] uppercase hover:bg-neutral-800 transition-colors"
//                         >
//                           PLACE ORDER
//                         </button>
//                       </div>
//                     )}
//                   </div>

//                   {/* Option 3: ALMA */}
//                   <div className="border border-neutral-200 p-4">
//                     <label className="flex items-center gap-3 cursor-pointer">
//                       <input
//                         type="radio"
//                         name="paymentMethod"
//                         value="alma"
//                         checked={selectedPayment === "alma"}
//                         onChange={() => setSelectedPayment("alma")}
//                         className="accent-black"
//                       />
//                       <span className="text-xs uppercase tracking-widest font-medium">PAY IN INSTALLMENTS WITH ALMA</span>
//                     </label>
//                   </div>
//                 </div>

//                 <div className="pt-4">
//                   <button
//                     onClick={() => setStep(1)}
//                     className="px-6 py-2.5 border border-neutral-300 text-xs tracking-[0.2em] uppercase hover:bg-neutral-100"
//                   >
//                     BACK
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Right Sidebar Column: Order Summary & Shipping Detail */}
//           <div className="space-y-6">
//             <div className="bg-neutral-50 p-6 border border-neutral-200 space-y-6">
//               <h2 className="text-xs tracking-[0.2em] uppercase font-semibold text-neutral-800 border-b border-neutral-200 pb-3">
//                 ORDER SUMMARY
//               </h2>

//               <div className="space-y-3 text-xs font-sans text-neutral-600">
//                 <div className="flex justify-between">
//                   <span>CART SUBTOTAL</span>
//                   <span>€{cartSubtotal.toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>SHIPPING (DPD - DPD)</span>
//                   <span>€{shippingCost.toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>TAX</span>
//                   <span>€{taxCost.toFixed(2)}</span>
//                 </div>
//               </div>

//               <div className="border-t border-neutral-200 pt-4 flex justify-between text-xs font-bold font-serif tracking-wider text-neutral-900">
//                 <span>ORDER TOTAL</span>
//                 <span className="font-sans">€{totalCost.toFixed(2)}</span>
//               </div>

//               {/* Items List */}
//               <div className="border-t border-neutral-200 pt-4 space-y-3 max-h-48 overflow-y-auto">
//                 {cart.map((item) => (
//                   <div key={item.id} className="flex justify-between items-center text-xs font-sans">
//                     <div>
//                       <p className="font-serif uppercase font-medium text-neutral-900">{item.name}</p>
//                       <p className="text-neutral-500 text-[11px]">Qty {item.quantity}</p>
//                     </div>
//                     <p className="font-semibold text-neutral-900">€{((item.price || 0) * item.quantity).toFixed(2)}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Trudon-style Sidebar "SHIP TO" & "SHIPPING METHOD" Card */}
//             {step === 2 && (
//               <div className="bg-neutral-50 p-6 border border-neutral-200 space-y-4 font-serif text-xs">
//                 <div className="flex justify-between items-center border-b border-neutral-200 pb-2">
//                   <span className="tracking-[0.15em] uppercase font-semibold text-neutral-700">SHIP TO:</span>
//                   <button onClick={() => setStep(1)} className="text-neutral-400 hover:text-black">✏️</button>
//                 </div>
//                 <div className="text-neutral-600 font-sans leading-relaxed text-[11px]">
//                   <p>{formData.firstName} {formData.lastName}</p>
//                   <p>{formData.streetAddress}</p>
//                   <p>{formData.city}, {formData.zipCode}</p>
//                   <p>{formData.country}</p>
//                   <p>{formData.phone}</p>
//                 </div>

//                 <div className="flex justify-between items-center border-b border-neutral-200 pb-2 pt-2">
//                   <span className="tracking-[0.15em] uppercase font-semibold text-neutral-700">SHIPPING METHOD:</span>
//                   <button onClick={() => setStep(1)} className="text-neutral-400 hover:text-black">✏️</button>
//                 </div>
//                 <p className="font-sans text-[11px] text-neutral-600 uppercase">DPD - DPD</p>
//               </div>
//             )}
//           </div>

//         </div>
//       </div>
//     </main>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useCart } from "@/context/CartContext";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

// Sub-component for Stripe form handling
function StripeCheckoutForm({ totalCost, agreedTerms }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agreedTerms) {
      setErrorMessage("Please agree to the terms and conditions.");
      return;
    }

    if (!stripe || !elements) return;

    setLoading(true);
    setErrorMessage("");

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/checkout/success`,
      },
    });

    if (error) {
      setErrorMessage(error.message);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <PaymentElement />

      {errorMessage && (
        <div className="text-red-600 text-xs font-sans mt-2">{errorMessage}</div>
      )}

      <button
        type="submit"
        disabled={!stripe || loading}
        className="px-10 py-3.5 bg-neutral-900 text-white text-xs tracking-[0.2em] uppercase hover:bg-neutral-800 transition-colors disabled:opacity-50 mt-4"
      >
        {loading ? "PROCESSING..." : "PLACE ORDER"}
      </button>
    </form>
  );
}

// Sub-component to fetch PaymentIntent and wrap with Stripe Elements
function StripePaymentWrapper({ totalCost, agreedTerms }) {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: totalCost }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [totalCost]);

  if (!clientSecret) {
    return <p className="text-xs font-sans text-neutral-500 py-4">Loading Secure Payment Gateway...</p>;
  }

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <StripeCheckoutForm totalCost={totalCost} agreedTerms={agreedTerms} />
    </Elements>
  );
}

export default function CheckoutPage() {
  const { cart, cartSubtotal } = useCart();
  const [step, setStep] = useState(1); // 1 = Shipping, 2 = Review & Payments

  const shippingCost = 10.0;
  const taxCost = 0.0;
  const totalCost = cartSubtotal + (cart.length > 0 ? shippingCost : 0) + taxCost;

  // Form State
  const [formData, setFormData] = useState({
    email: "anonnoruddho@gmail.com",
    newsletter: false,
    firstName: "Iftekhar",
    lastName: "Ahmed",
    streetAddress: "Paris Street",
    apartment: "",
    country: "France",
    city: "Paris",
    zipCode: "75001",
    phone: "01752588636",
    shippingMethod: "dpd",
  });

  // Payment State
  const [selectedPayment, setSelectedPayment] = useState("card"); // 'applepay', 'card', 'alma'
  const [sameBillingAddress, setSameBillingAddress] = useState(true);
  const [agreedTerms, setAgreedTerms] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <main className="min-h-screen bg-white text-neutral-900 pt-24 pb-20 font-serif">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-center text-xl tracking-[0.3em] font-light uppercase my-6">
          CHECKOUT
        </h1>

        {/* Steps Navigation */}
        <div className="flex border-b border-neutral-200 mb-10 text-xs tracking-[0.2em] uppercase font-medium">
          <button
            onClick={() => setStep(1)}
            className={`py-3 px-6 flex items-center gap-2 transition-all ${
              step === 1
                ? "border-b-2 border-black text-black font-semibold bg-neutral-50"
                : "text-neutral-400 hover:text-black"
            }`}
          >
            <span className="font-sans">1.</span> SHIPPING
          </button>
          <button
            onClick={() => setStep(2)}
            className={`py-3 px-6 flex items-center gap-2 transition-all ${
              step === 2
                ? "border-b-2 border-black text-black font-semibold bg-neutral-50"
                : "text-neutral-400 hover:text-black"
            }`}
          >
            <span className="font-sans">2.</span> REVIEW & PAYMENTS
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {step === 1 ? (
              /* --- STEP 1: SHIPPING FORM --- */
              <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-xs tracking-[0.2em] uppercase font-semibold text-neutral-800">
                      SHIPPING ADDRESS
                    </h2>
                  </div>

                  <div className="space-y-3 font-sans">
                    <label className="block text-xs uppercase tracking-wider text-neutral-600 font-serif">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-neutral-300 p-3 text-xs focus:outline-none focus:border-black"
                    />

                    <label className="flex items-center gap-2 text-xs text-neutral-600 font-serif pt-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleChange}
                        className="accent-black"
                      />
                      SIGN UP TO OUR NEWSLETTER, AND GET ALL THE NEWS FIRST HAND ABOUT TRUDON
                    </label>
                  </div>
                </div>

                <hr className="border-neutral-200" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs">
                  <div>
                    <label className="block uppercase tracking-wider text-neutral-600 font-serif mb-1">
                      FIRST NAME
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full border border-neutral-300 p-3 focus:outline-none focus:border-black"
                    />
                  </div>
                  <div>
                    <label className="block uppercase tracking-wider text-neutral-600 font-serif mb-1">
                      LAST NAME
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full border border-neutral-300 p-3 focus:outline-none focus:border-black"
                    />
                  </div>
                </div>

                <div className="space-y-4 font-sans text-xs">
                  <div>
                    <label className="block uppercase tracking-wider text-neutral-600 font-serif mb-1">
                      STREET ADDRESS
                    </label>
                    <input
                      type="text"
                      name="streetAddress"
                      required
                      value={formData.streetAddress}
                      onChange={handleChange}
                      className="w-full border border-neutral-300 p-3 focus:outline-none focus:border-black"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans text-xs">
                  <div>
                    <label className="block uppercase tracking-wider text-neutral-600 font-serif mb-1">
                      COUNTRY
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full border border-neutral-300 p-3 bg-white focus:outline-none focus:border-black font-serif"
                    >
                      <option value="France">France</option>
                      <option value="United States">United States</option>
                      <option value="Germany">Germany</option>
                    </select>
                  </div>

                  <div>
                    <label className="block uppercase tracking-wider text-neutral-600 font-serif mb-1">
                      CITY
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full border border-neutral-300 p-3 focus:outline-none focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="block uppercase tracking-wider text-neutral-600 font-serif mb-1">
                      ZIP / POSTAL CODE
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      required
                      value={formData.zipCode}
                      onChange={handleChange}
                      className="w-full border border-neutral-300 p-3 focus:outline-none focus:border-black"
                    />
                  </div>
                </div>

                <div className="font-sans text-xs">
                  <label className="block uppercase tracking-wider text-neutral-600 font-serif mb-1">
                    MOBILE PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-neutral-300 p-3 focus:outline-none focus:border-black"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="px-12 py-3.5 bg-neutral-900 text-white text-xs tracking-[0.25em] uppercase hover:bg-neutral-800 transition-colors"
                  >
                    NEXT
                  </button>
                </div>
              </form>
            ) : (
              /* --- STEP 2: PAYMENT METHOD (TRUDON STYLE WITH STRIPE) --- */
              <div className="space-y-6">
                <h2 className="text-xs tracking-[0.2em] uppercase font-semibold text-neutral-800">
                  PAYMENT METHOD
                </h2>

                <div className="space-y-4">
                  {/* Option 1: APPLE PAY */}
                  <div className="border border-neutral-200 p-4">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="applepay"
                        checked={selectedPayment === "applepay"}
                        onChange={() => setSelectedPayment("applepay")}
                        className="accent-black"
                      />
                      <span className="text-xs uppercase tracking-widest font-medium">APPLE PAY</span>
                    </label>
                  </div>

                  {/* Option 2: CARDS (CREDIT CARD) WITH STRIPE */}
                  <div className="border border-neutral-200 p-4">
                    <label className="flex items-center gap-3 cursor-pointer mb-4">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={selectedPayment === "card"}
                        onChange={() => setSelectedPayment("card")}
                        className="accent-black"
                      />
                      <span className="text-xs uppercase tracking-widest font-medium">CARDS</span>
                    </label>

                    {selectedPayment === "card" && (
                      <div className="mt-4 pl-7 space-y-5">
                        <label className="flex items-center gap-2 text-xs font-sans text-neutral-600 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={sameBillingAddress}
                            onChange={(e) => setSameBillingAddress(e.target.checked)}
                            className="accent-black"
                          />
                          MY BILLING AND SHIPPING ADDRESS ARE THE SAME
                        </label>

                        {/* Billing summary preview */}
                        <div className="text-xs font-sans text-neutral-500 space-y-0.5 leading-relaxed bg-neutral-50 p-3 border border-neutral-100">
                          <p className="font-semibold text-neutral-800">{formData.firstName} {formData.lastName}</p>
                          <p>{formData.streetAddress}</p>
                          <p>{formData.city}, {formData.zipCode}</p>
                          <p>{formData.country}</p>
                          <p>{formData.phone}</p>
                        </div>

                        <label className="flex items-center gap-2 text-xs font-sans text-neutral-600 cursor-pointer pt-2">
                          <input
                            type="checkbox"
                            checked={agreedTerms}
                            onChange={(e) => setAgreedTerms(e.target.checked)}
                            className="accent-black"
                          />
                          I AGREE TO THE TERMS & CONDITIONS
                        </label>

                        {/* STRIPE PAYMENT ELEMENT HERE */}
                        <div className="pt-2 max-w-md">
                          <StripePaymentWrapper totalCost={totalCost} agreedTerms={agreedTerms} />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Option 3: ALMA */}
                  <div className="border border-neutral-200 p-4">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="alma"
                        checked={selectedPayment === "alma"}
                        onChange={() => setSelectedPayment("alma")}
                        className="accent-black"
                      />
                      <span className="text-xs uppercase tracking-widest font-medium">PAY IN INSTALLMENTS WITH ALMA</span>
                    </label>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setStep(1)}
                    className="px-6 py-2.5 border border-neutral-300 text-xs tracking-[0.2em] uppercase hover:bg-neutral-100"
                  >
                    BACK
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar Column: Order Summary & Shipping Detail */}
          <div className="space-y-6">
            <div className="bg-neutral-50 p-6 border border-neutral-200 space-y-6">
              <h2 className="text-xs tracking-[0.2em] uppercase font-semibold text-neutral-800 border-b border-neutral-200 pb-3">
                ORDER SUMMARY
              </h2>

              <div className="space-y-3 text-xs font-sans text-neutral-600">
                <div className="flex justify-between">
                  <span>CART SUBTOTAL</span>
                  <span>€{cartSubtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>SHIPPING (DPD - DPD)</span>
                  <span>€{shippingCost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>TAX</span>
                  <span>€{taxCost.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-neutral-200 pt-4 flex justify-between text-xs font-bold font-serif tracking-wider text-neutral-900">
                <span>ORDER TOTAL</span>
                <span className="font-sans">€{totalCost.toFixed(2)}</span>
              </div>

              {/* Items List */}
              <div className="border-t border-neutral-200 pt-4 space-y-3 max-h-48 overflow-y-auto">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center text-xs font-sans">
                    <div>
                      <p className="font-serif uppercase font-medium text-neutral-900">{item.name}</p>
                      <p className="text-neutral-500 text-[11px]">Qty {item.quantity}</p>
                    </div>
                    <p className="font-semibold text-neutral-900">€{((item.price || 0) * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Trudon-style Sidebar "SHIP TO" & "SHIPPING METHOD" Card */}
            {step === 2 && (
              <div className="bg-neutral-50 p-6 border border-neutral-200 space-y-4 font-serif text-xs">
                <div className="flex justify-between items-center border-b border-neutral-200 pb-2">
                  <span className="tracking-[0.15em] uppercase font-semibold text-neutral-700">SHIP TO:</span>
                  <button onClick={() => setStep(1)} className="text-neutral-400 hover:text-black">✏️</button>
                </div>
                <div className="text-neutral-600 font-sans leading-relaxed text-[11px]">
                  <p>{formData.firstName} {formData.lastName}</p>
                  <p>{formData.streetAddress}</p>
                  <p>{formData.city}, {formData.zipCode}</p>
                  <p>{formData.country}</p>
                  <p>{formData.phone}</p>
                </div>

                <div className="flex justify-between items-center border-b border-neutral-200 pb-2 pt-2">
                  <span className="tracking-[0.15em] uppercase font-semibold text-neutral-700">SHIPPING METHOD:</span>
                  <button onClick={() => setStep(1)} className="text-neutral-400 hover:text-black">✏️</button>
                </div>
                <p className="font-sans text-[11px] text-neutral-600 uppercase">DPD - DPD</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}