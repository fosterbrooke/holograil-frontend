import React, { useState } from 'react';
import ProductItem from '../components/accounts/products/ProductItem';
import RoundButton from '../components/RoundButton';
import InfoComp from '../components/InfoComp';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../redux/cartSlice';
import { CartItem } from '../types/Cart';
import { RootState } from '../redux/store';

interface BillingInfoItemProps {
  label: string;
  value: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BillingInfoItem: React.FC<BillingInfoItemProps> = ({
  label,
  value,
  className,
  onChange,
}) => {
  return (
    <div
      className={`py-[18px] flex items-center sm:px-[32px] px-[24px] space-x-[24px] ${className}`}
    >
      <label
        htmlFor={label.toLowerCase()}
        className="sm:w-[120px] w-[80px] sm:text-[24px] text-[16px] font-semibold text-right"
      >
        {label}
      </label>
      <input
        type="text"
        id={label.toLowerCase()}
        value={value}
        onChange={onChange}
        className="bg-transparent sm:text-[24px] text-[16px] rounded-[10px] font-semibold p-2 w-[50%]"
        placeholder={label}
      />
    </div>
  );
};

const PaymentInfoForm: React.FC = () => {
  const [focused, setFocused] = useState<string>('');
  const [cardValues, setCardValues] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === 'number') {
      // Format card number to have spaces every 4 digits
      formattedValue = value
        .replace(/\s/g, '')
        .replace(/(\d{4})/g, '$1 ')
        .trim();
    } else if (name === 'expiry') {
      // Format expiry date to MM/YY
      formattedValue = value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .substr(0, 5);
    } else if (name === 'cvc') {
      // Only allow numbers for CVC
      formattedValue = value.replace(/\D/g, '').substr(0, 3);
    }

    setCardValues((prev) => ({
      ...prev,
      [name]: formattedValue,
    }));
  };

  return (
    <div className="mt-[24px] sm:bg-white rounded-[10px] sm:shadow-custom-multiple">
      <form className="sm:px-[32px] py-4 flex sm:flex-row flex-col sm:space-x-4">
        <div className="flex sm:flex-row flex-col sm:items-center items-start sm:w-2/3 w-full font-bold">
          <label className="hidden sm:inline w-[120px] sm:text-[24px] text-[16px] text-right mr-8">
            Card
          </label>
          <img
            className="sm:inline hidden mr-2"
            src="/accounts/shipping/credit_card.svg"
          />
          <label className="sm:hidden font-bold sm:text-[20px] text-[16px] mb-2">
            Card Number
          </label>
          <input
            type="tel"
            name="number"
            className="sm:max-w-[250px] w-full sm:bg-transparent sm:text-[24px] text-[16px] rounded-[10px] font-semibold p-2  shadow-lg sm:shadow-none"
            placeholder=""
            pattern="[\d| ]{16,22}"
            maxLength={19}
            required
            value={cardValues.number}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex sm:flex-row flex-col sm:w-1/3 w-full sm:space-x-4">
          <label className="font-bold sm:hidden sm:text-[20px] text-[16px] my-4">
            Expiration Date
          </label>
          <input
            type="tel"
            name="expiry"
            className="sm:max-w-[105px] w-full sm:bg-transparent bg-white sm:text-[24px] text-[16px] rounded-[10px] font-semibold p-2 shadow-lg sm:shadow-none"
            placeholder="MM/YY"
            pattern="\d\d/\d\d"
            required
            value={cardValues.expiry}
            onChange={handleInputChange}
          />
          <label className="font-bold sm:hidden sm:text-[20px] text-[16px] my-4">
            Security Code
          </label>
          <input
            type="tel"
            name="cvc"
            className="sm:w-1/2 w-full bg-transparent sm:text-[24px] text-[16px] rounded-[10px] font-semibold p-2 shadow-lg sm:shadow-none"
            placeholder=" CVC"
            pattern="\d{3}"
            required
            value={cardValues.cvc}
            onChange={handleInputChange}
          />
        </div>
        <div className="sm:hidden flex flex-col">
          <label className="font-bold sm:hidden sm:text-[20px] text-[16px] my-4">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            className="w-full bg-transparent sm:text-[24px] text-[16px] rounded-[10px] font-semibold p-2 shadow-lg sm:shadow-none"
            placeholder=""
            pattern="[a-zA-Z\s-]+"
            required
            value={cardValues.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="sm:hidden w-full flex space-x-2 mt-4">
          <input type="checkbox" />
          <span className="text-[16px]">Save or update card information</span>
        </div>
        <div className="sm:hidden w-full flex justify-center mt-12">
          <RoundButton
            text="Checkout"
            className="sm:hidden w-full rounded-[10px] w-1/2"
          />
        </div>
      </form>
    </div>
  );
};

const ShippingBillingPage: React.FC = () => {
  const dispatch = useDispatch();

  const {
    items: cart_items,
    totalCartPrice,
    shipping_fee,
    totalPrice,
  } = useSelector((state: RootState) => state.cart);

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [zip, setZip] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  // const [cardNumber, setCardNumber] = useState<string>('');

  const handleRemove = (id: number) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="flex justify-center w-screen">
      <div className="sm:bg-custom-white bg-white max-w-[1440px] w-full flex items-center flex-col">
        <img
          src="/big_logo.png"
          className="hidden lg:flex mt-[137px] mb-[117px] w-[348px] h-[60px]"
        />
        <div className="w-full flex sm:space-x-[48px] lg:flex-row flex-col flex-col-reverse px-[8%] mb-12">
          <div className="w-full lg:w-[70%] rounded-[10px] lg:px-0">
            <div className="font-bold sm:text-[20px] text-[16px] text-black">
              SHIPPING & BILLING INFORMATION
            </div>
            <div className="w-full mt-[24px] bg-white rounded-[10px] shadow-custom-multiple">
              <BillingInfoItem
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <hr className=" border-custom-white border" />
              <BillingInfoItem
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <hr className=" border-custom-white border" />
              <BillingInfoItem
                label="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <hr className=" border-custom-white border" />
              <BillingInfoItem
                label="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <hr className="border-custom-white border" />
              <div className="w-full flex items-center">
                <BillingInfoItem
                  className="pr-0 w-2/3"
                  label="State"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
                <div
                  className={`py-[18px] flex items-center sm:px-[32px] sm:pr-6 space-x-[24px]`}
                >
                  <label
                    htmlFor="zip"
                    className="max-w-[60px] sm:text-[24px] text-[16px] font-semibold text-right"
                  >
                    Zip
                  </label>
                  <input
                    type="text"
                    id={zip.toLowerCase()}
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    className="bg-transparent sm:text-[24px] text-[16px] rounded-[10px] font-semibold p-2 sm:max-w-[100px] max-w-[70px]"
                    placeholder="zip"
                  />
                </div>
              </div>
              <hr className=" border-custom-white border" />
              <BillingInfoItem
                label="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className="font-bold sm:text-[20px] text-[16px] text-black mt-[64px]">
              PAYMENT INFORMATION
            </div>
            <PaymentInfoForm />
          </div>
          <div className="sm:mt-[54px] mt-16 flex flex-col flex-grow flex-shrink-1">
            <div className="w-full flex-grow flex-shrink-1 rounded-[10px] flex flex-col space-y-[27px] bg-white shadow-custom-multiple py-8 px-[21px] items-center mb-16">
              <div className="text-start w-full text-primary font-bold sm:text-[30px] text-[24px]">
                Items
              </div>
              <hr className="max-w-[420px] w-full flex-shrink-1 text-primary" />
              <div className="w-full flex flex-col space-y-[30px]">
                {cart_items &&
                  cart_items.length > 0 &&
                  cart_items.map((product: CartItem, index: number) => (
                    <ProductItem
                      key={index}
                      icon={product.icon}
                      quantity={product.quantity}
                      name={product.name}
                      price={product.price}
                      onRemove={() => handleRemove(product.product_id)}
                    />
                  ))}
              </div>
              <hr className="max-w-[420px] w-full flex-shrink-1 text-primary" />
              <div className="max-w-[420px] w-full flex justify-between items-center sm:text-[20px] text-[16px] text-[#404040]">
                <div>Subtotal</div>
                <div className="font-bold text-black pr-[24px]">
                  ${totalCartPrice.toFixed(2)}
                </div>
              </div>
              <div className="max-w-[420px] w-full flex justify-between items-center sm:text-[20px] text-[16px] text-[#404040]">
                <div>Shipping Fee</div>
                <div className="font-bold text-black pr-[24px]">
                  ${shipping_fee.toFixed(2)}
                </div>
              </div>
              <hr className="max-w-[420px] w-full flex-shrink-1 text-primary" />
              <div className="max-w-[420px] w-full flex justify-between items-center font-bold sm:text-[24px] text-[20px] text-[#404040]">
                <div>Total</div>
                <div className="pr-[24px]">${totalPrice.toFixed(2)}*</div>
              </div>
              <div className="sm:flex hidden w-full px-[16px] pt-[17px] py-[54px]">
                <RoundButton
                  text="Checkout"
                  className="w-full rounded-[10px]"
                />
              </div>
            </div>
            <InfoComp
              title="Shipping"
              text="Total price is not inclusive of shipping fees. We will contact you via email for the exact shipping quote based on your delivery address. Don’t worry, we will not charge your card before confirmation!"
              className="shadow-custom-multiple max-w-[480px] w-full mt-[28px] lg:flex hidden"
              isSmall={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingBillingPage;
