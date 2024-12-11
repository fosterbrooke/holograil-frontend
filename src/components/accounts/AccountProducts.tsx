import React, { useState } from 'react';
import HtmlContent from './products/HtmlContent';
import RoundButton from '../RoundButton';
import QuantityInputComp from './resources/QuantityInputComp';
import InfoComp from '../InfoComp';
import { useDispatch } from 'react-redux';
import { addCartItem } from '../../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

interface ProductData {
  uid: string;
  title: string;
  content: string;
  price: string;
}

const AccountProducts: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [productIndex, setProductIndex] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);

  const productInfo: ProductData[] = [
    {
      uid: '123',
      title: 'Lenticular Sheets (4x4”)',
      content: `<span style="font-weight: 600; font-size: 24px;">Product Description</span>
<br />
<br />
<span style="font-size: 20px;">Lenticular sheets are the heart of creating dynamic, animated prints. Our high-quality sheets provide smooth, vivid visuals that change when viewed from different angles.</span>
<ul style="font-size: 20px;" class="list-disc list-inside">
  <li>Perfect for creating 3D effects and flip images</li>
  <li>Durable, high-clarity material for professional results</li>
  <li>Compatible with all standard printers and software</li>
<br />
<span style="font-size: 20px;"></span>
`,
      price: `<span style="font-size: 20px;">USD$0.3 (1,000 - 50,00pcs)
USD$0.2 (50,001 - 20,000pcs)
USD$0.15 (20,001 and above)</span>`,
    },
    {
      uid: '124',
      title: 'Perforated Paper (4x6”)',
      content: `<span style="font-weight: 600; font-size: 24px;">Product Description</span>
<br />
<br />
<span style="font-size: 20px;">Perforated paper helps you easily align and attach the lenticular sheets for a seamless finish. Ideal for creating perfect, clean prints, this is an essential accessory in delivering high-quality photo booth prints.</span>
<ul style="font-size: 20px;" class="list-disc list-inside">
  <li>Laser-precise perforation for easy tear-off and alignment</li>
  <li>Lightweight and easy to feed through standard printers</li>
  <li>Reduces errors and saves time on assembly</li>
<br />
<span style="font-size: 20px;">Each Box contains 2 rolls of perforated paper</span>
`,
      price: `<span style="font-size: 20px;">USD$220</span>`,
    },
    {
      uid: '125',
      title: 'Adhesion Roller',
      content: `<span style="font-weight: 600; font-size: 24px;">Product Description</span>
<br />
<br />
<span style="font-size: 20px;">The adhesion roller is designed to eliminate air bubbles while securing lenticular sheets to the base paper. With an ergonomic handle and smooth application, this tool ensures a flawless, professional finish every time.</span>
<ul style="font-size: 20px;" class="list-disc list-inside">
  <li>Smooth roller for quick and easy air-bubble removal</li>
  <li>Ergonomic design to reduce hand strain during use</li>
  <li>Durable material for long-lasting performance</li>
<br />
<span style="font-size: 20px;">Dimensions: 16cm (W), 35cm (H)</span>
`,
      price: `<span style="font-size: 20px;">USD$300</span>`,
    },
    {
      uid: '126',
      title: 'Luggage Tag Cutter',
      content: `<span style="font-weight: 600; font-size: 24px;">Product Description</span>
<br />
<br />
<span style="font-size: 20px;">Create durable, perfectly sized tags for all your travels with our precision Luggage Tag Cutter. This tool quickly and efficiently cuts your lenticular prints into luggage tags that will elevate your product line, ensuring clean, professional edges every time.</span>
<ul style="font-size: 20px;" class="list-disc list-inside">
  <li>Ideal for custom luggage tags, ID cards, and event passes</li>
  <li>Equipped with alignment guides for consistent, accurate cuts</li>
<br />
<span style="font-size: 20px;">Dimensions: 20cm (W), 15cm (H)</span>
`,
      price: `<span style="font-size: 20px;">USD$220</span>`,
    },
  ];

  const handleDecrease = () => {
    setProductIndex((prev) => Math.max(prev - 1, 0));
    setQuantity(1);
  };

  const handleIncrease = () => {
    setProductIndex((prev) => prev + 1);
    setQuantity(1);
  };

  const handleAddCart = () => {
    dispatch(
      addCartItem({
        product_id: productIndex,
        quantity: quantity,
      })
    );

    navigate('/shipping');
  };

  return (
    <div className="mt-[63px] bg-custom-white rounded-[10px] text-black py-[56px] px-[50px]">
      <div className="flex items-center">
        <button
          className={`flex-shrink-0 relative ${productIndex === 0 ? 'cursor-not-allowed' : 'cursor-pointer'}`}
          disabled={productIndex === 0}
          onClick={handleDecrease}
        >
          <div
            className={`w-[20px] h-[40px]  absolute  bg-custom-white ${productIndex === 0 ? 'bg-opacity-90' : 'bg-opacity-0'}`}
          />
          <img src="/accounts/products/arrow_back_ios.svg" />
        </button>
        <div className="w-full flex-grow flex-shrink-1 mx-[30px] max-w-[800px]">
          <div className="bg-custom-gray rounded-[5px] pt-[44px] pb-[34px] ">
            <div className="mx-[48px]">
              <div className="bg-gray h-[65px] w-[58px] rounded-[5px]" />
              <div className="bg-gray h-[65px] w-[58px] rounded-[5px] mt-[68px]" />
              <div className="bg-gray h-[65px] w-[58px] rounded-[5px] mt-[53px]" />
            </div>
          </div>
        </div>
        <button
          className={`flex-shrink-0 relative ${productIndex >= productInfo.length - 1 ? 'cursor-not-allowed' : 'cursor-pointer'}`}
          onClick={handleIncrease}
          disabled={productIndex >= productInfo.length - 1}
        >
          <div
            className={`w-[20px] h-[40px]  absolute  bg-custom-white ${productIndex >= productInfo.length - 1 ? 'bg-opacity-90' : 'bg-opacity-0'}`}
          />
          <img src="/accounts/products/arrow_forward_ios.svg" />
        </button>
      </div>
      <div className=" mx-[50px] mt-[41px] ">
        <div className="text-center font-semibold text-[24px]">
          {productInfo[productIndex].title}
        </div>
        <div className="mt-[44px]">
          <HtmlContent htmlString={productInfo[productIndex].content} />
        </div>
        <div className="flex space-x-8 w-full">
          <div className="mt-[25px] max-w-[400px] w-full flex-grow flex-shrink-1">
            <div className="font-semibold text-[24px]">Price</div>
            <br />
            <HtmlContent htmlString={productInfo[productIndex].price} />
          </div>
          <div className="flex-shrink-1 items-center justify-center w-full">
            {productIndex === 0 ? (
              <div>
                <InfoComp
                  title="Shipping"
                  text="Please note that due to logistical constraints and varying port restrictions, we are unable to provide a shipping rate upfront for the Lenticular Sheets. Please contact us directly via email for a quote"
                  option="contact"
                />
              </div>
            ) : (
              <>
                <div className="font-semibold mb-[23px] text-[24px] text-center">
                  Quantity
                </div>
                <QuantityInputComp
                  quantity={quantity}
                  setQuantity={setQuantity}
                  className=""
                />
                <div className="mx-[31.5px] mt-[39px]">
                  <RoundButton
                    text="Add to Cart"
                    className="shadow-custom-item rounded-[10px] w-full"
                    onClick={handleAddCart}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountProducts;
