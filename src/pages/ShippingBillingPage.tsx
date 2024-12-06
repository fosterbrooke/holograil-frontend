import React, { useState } from 'react';
import ExpirationDateInput from '../components/accounts/ExpirationDateinput';
import ProductItem from '../components/accounts/products/ProductItem';
import RoundButton from '../components/RoundButton';
import InfoComp from '../components/InfoComp';
import CVVInput from '../components/accounts/CVVInput';

const ShippingBillingPage: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [zip, setZip] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [cardNumber, setCardNumber] = useState<string>('');

  const [products, setProducts] = useState([
    {
      id: 1,
      icon: '',
      quantity: 2,
      name: 'Luggage Tag Cutter Dimensions: 20cm (W), 15cm (H)',
      price: 40,
    },
    { id: 2, icon: '', quantity: 1, name: 'Another Product', price: 40 },
    // Add more products as needed
  ]);
  const shipping_fee = 20;

  const handleRemove = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // Function to calculate total price
  const calculateSubTotalPrice = () => {
    return products
      .reduce((total, product) => total + product.quantity * product.price, 0)
      .toFixed(2);
  };

  const calculateTotalPrice = () => {
    return (Number(calculateSubTotalPrice()) + shipping_fee).toFixed(2);
  }

  return (
    <div className="flex justify-center w-screen">
      <div className="bg-custom-white max-w-[1440px] max-h-[1349px] w-full h-[1350px] flex items-center flex-col">
        <img
          src="/big_logo.png"
          className="mt-[137px] mb-[117px] w-[348px] h-[60px]"
        />
        <div className="flex space-x-[48px]">
          <div className="max-w-[750px] flex-grow flex-shrink-1 rounded-[10px]">
            <div className="font-bold text-[20px] text-black">
              SHIPPING & BILLING INFORMATION
            </div>
            <div className="mt-[24px] bg-white rounded-[10px] shadow-custom-multiple">
              <div className="py-[18px] flex items-center">
                <label
                  htmlFor="name"
                  className="w-[147px] pl-[71.89px] text-[24px] font-semibold"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mx-[47.25px] bg-transparent text-[24px] rounded-[10px] font-semibold p-2 flex-grow flex-shrink-1"
                  placeholder="Name"
                />
              </div>
              <hr className=" border-custom-white border" />
              <div className="py-[18px] flex items-center">
                <label
                  htmlFor="email"
                  className="w-[147px] pl-[71.89px] text-[24px] font-semibold"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mx-[47.25px] bg-transparent text-[24px] rounded-[10px] font-semibold p-2 flex-grow flex-shrink-1"
                  placeholder="Email"
                />
              </div>
              <hr className=" border-custom-white border" />
              <div className="py-[18px] flex items-center">
                <label
                  htmlFor="address"
                  className="w-[147px] pl-[71.89px] text-[24px] font-semibold"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="mx-[47.25px] bg-transparent text-[24px] rounded-[10px] font-semibold p-2 flex-grow flex-shrink-1"
                  placeholder="Address"
                />
              </div>
              <hr className=" border-custom-white border" />
              <div className="py-[18px] flex items-center">
                <label
                  htmlFor="city"
                  className="w-[147px] pl-[71.89px] text-[24px] font-semibold"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="mx-[47.25px] bg-transparent text-[24px] rounded-[10px] font-semibold p-2 flex-grow flex-shrink-1"
                  placeholder="City"
                />
              </div>
              <hr className=" border-custom-white border" />
              <div className="py-[18px] flex items-center">
                <label
                  htmlFor="state"
                  className="w-[147px] pl-[71.89px] text-[24px] font-semibold flex-grow flex-shrink-0"
                >
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="ml-[47.25px] bg-transparent text-[24px] w-full rounded-[10px] font-semibold p-2 flex-grow flex-shrink-1"
                  placeholder="State"
                />
                <label
                  htmlFor="zip"
                  className="w-[147px] pl-[71.89px] text-[24px] font-semibold flex-grow flex-shrink-0"
                >
                  Zip
                </label>
                <input
                  type="text"
                  id="zip"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  className="mx-[27.25px] bg-transparent text-[24px] w-full rounded-[10px] font-semibold p-2 flex-grow flex-shrink-1"
                  placeholder="Zip"
                />
              </div>
              <hr className=" border-custom-white border" />
              <div className="py-[18px] flex items-center">
                <label
                  htmlFor="country"
                  className="w-[147px] pl-[71.89px] text-[24px] font-semibold"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="mx-[47.25px] bg-transparent text-[24px] rounded-[10px] font-semibold p-2 flex-shrink-1"
                  placeholder="Country"
                />
              </div>
            </div>
            <div className="font-bold text-[20px] text-black mt-[64px]">
              PAYMENT INFORMATION
            </div>
            <div className="mt-[24px] bg-white rounded-[10px] shadow-custom-multiple">
              <div className="px-[71.89px] py-[18px] flex items-center">
                <label
                  htmlFor="card"
                  className="w-[120px] text-[24px] font-semibold"
                >
                  Card
                </label>
                <img src="/accounts/shipping/credit_card.svg" />
                <input
                  type="text"
                  id="card"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="mx-[9px] bg-transparent text-[24px] rounded-[10px] font-semibold p-2 w-[230px]"
                  placeholder="Card number"
                />
                <ExpirationDateInput />
                <CVVInput />
              </div>
            </div>
          </div>
          <div className="mt-[54px] flex flex-col">
            <div className="max-w-[484px] w-full flex-grow flex-shrink-1 rounded-[10px] flex flex-col space-y-[27px] bg-white shadow-custom-multiple pt-[2px] px-[21px] items-center">
              <div className="text-start w-full text-primary font-bold text-[30px]">
                Item
              </div>
              <hr className="max-w-[420px] w-full flex-shrink-1 text-primary" />
              <div className="w-full flex flex-col space-y-[30px]">
                {products.map((product) => (
                  <ProductItem
                    key={product.id}
                    icon={product.icon}
                    quantity={product.quantity}
                    name={product.name}
                    price={product.price}
                    onRemove={() => handleRemove(product.id)}
                  />
                ))}
              </div>
              <hr className="max-w-[420px] w-full flex-shrink-1 text-primary" />
              <div className="max-w-[420px] w-full flex justify-between items-center text-[20px] text-[#404040]">
                <div>Subtotal</div>
                <div className="font-bold text-black pr-[24px]">
                  ${calculateSubTotalPrice()}
                </div>
              </div>
              <div className="max-w-[420px] w-full flex justify-between items-center text-[20px] text-[#404040]">
                <div>Shipping Fee</div>
                <div className="font-bold text-black pr-[24px]">
                  ${shipping_fee.toFixed(2)}
                </div>
              </div>
              <hr className="max-w-[420px] w-full flex-shrink-1 text-primary" />
              <div className="max-w-[420px] w-full flex justify-between items-center font-bold text-[24px] text-[#404040]">
                <div>Total</div>
                <div className=" pr-[0px]">${calculateTotalPrice()}*</div>
              </div>
              <div className="w-full px-[16px] pt-[17px] py-[54px]">
                <RoundButton
                  text="Checkout"
                  className="w-full rounded-[10px]"
                />
              </div>
            </div>
            <InfoComp
              title="Shipping"
              text="Total price is not inclusive of shipping fees. We will contact you via email for the exact shipping quote based on your delivery address. Don’t worry, we will not charge your card before confirmation!"
              className="shadow-custom-multiple max-w-[480px] w-full mt-[28px]"
              isSmall={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingBillingPage;
