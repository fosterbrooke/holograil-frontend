import React from 'react';
import AccessoriesMainSlide from '../components/accessories/AccessoriesMainSlide';
import AccecssoriesDemoComp from '../components/accessories/AccessoriesDemoComp';
import InfoComp from '../components/InfoComp';

const Accessories: React.FC = () => {
  return (
    <div>
      <AccessoriesMainSlide />
      <div className="2xl:mt-[200px] lg:mt-[160px] mt-[124px]">
        <AccecssoriesDemoComp>
          <div>
            <div className="text-primary font-bold 2xl:text-[55px] lg:text-[33px] text-[16px] tracking-[-0.02em]">
              Lenticular Sheets (4 x 4”)
            </div>
            <div className="2xl:text-[20px] lg:text-[15px] text-[11px] leading-[174%] tracking-[0.02em]">
              <div className="mt-[28px]">
                <span className="underline font-semibold">Price</span>
                <br />
                USD$0.3 (1,000 - 50,00pcs)
                <br />
                USD$0.2 (50,001 - 20,000pcs)
                <br />
                USD$0.15 (20,001 and above)
              </div>
              <div className="mt-[20px]">
                Lenticular sheets are the heart of creating dynamic, animated
                prints. Our high-quality sheets provide smooth, vivid visuals
                that change when viewed from different angles.
                <ul className="list-disc pl-14 mt-2">
                  <li>Perfect for creating 3D effects and flip images</li>
                  <li>
                    Durable, high-clarity material for professional results
                  </li>
                  <li>Compatible with all standard printers and software</li>
                </ul>
              </div>
            </div>
            <InfoComp
              title="Shipping Information"
              text="Please note that due to logistical constraints and varying port restrictions, we are unable to provide a shipping rate upfront. After you place your order for our accessories, we will reach out via email with a customized shipping and delivery quote, as well as the finalized total price. Thank you for your understanding."
              className="md:mt-[50px] mt-[30px] md:max-w-auto"
            />
          </div>
        </AccecssoriesDemoComp>
        <AccecssoriesDemoComp>
          <div>
            <div className="text-primary font-bold 2xl:text-[55px] lg:text-[33px] text-[16px] tracking-[-0.02em]">
              Perforated Paper
            </div>
            <div className="2xl:text-[20px] lg:text-[15px] text-[11px] leading-[174%] tracking-[0.02em]">
              <div className="mt-[28px]">
                <span className="font-semibold">Price: </span>
                USD$220
                <br />
                <span className="font-semibold">Size: </span>
                4x6”
                <br />
                <br />
                <span className="italic text-[16px]">
                  *1 box contains 2 rolls of paper
                </span>
              </div>
              <div className="mt-[20px]">
                Perforated paper helps you easily align and attach the
                lenticular sheets for a seamless finish. Ideal for creating
                perfect, clean prints, this is an essential accessory in
                delivering high-quality photo booth prints.
                <ul className="list-disc pl-14 mt-2">
                  <li>
                    Laser-precise perforation for easy tear-off and alignment
                  </li>
                  <li>
                    Lightweight and easy to feed through standard printers
                  </li>
                  <li>Reduces errors and saves time on assembly</li>
                </ul>
              </div>
            </div>
          </div>
        </AccecssoriesDemoComp>
        <AccecssoriesDemoComp>
          <div>
            <div className="text-primary font-bold 2xl:text-[55px] lg:text-[33px] text-[16px] tracking-[-0.02em]">
              Adhesion Roller
            </div>
            <div className="2xl:text-[20px] lg:text-[15px] text-[11px] leading-[174%] tracking-[0.02em]">
              <div className="mt-[28px]">
                <span className="font-semibold">Price: </span>
                USD$220
                <br />
                <span className="font-semibold">Dimensions: </span>
                W 20cm, H 15cm
                <br />
                <br />
              </div>
              <div className="mt-[20px]">
                The adhesion roller is designed to eliminate air bubbles while
                securing lenticular sheets to the base paper. With an ergonomic
                handle and smooth application, this tool ensures a flawless,
                professional finish every time.
                <ul className="list-disc pl-14 mt-2">
                  <li>Smooth roller for quick and easy air-bubble removal</li>
                  <li>Ergonomic design to reduce hand strain during use</li>
                  <li>Durable material for long-lasting performance</li>
                </ul>
              </div>
            </div>
          </div>
        </AccecssoriesDemoComp>
        <AccecssoriesDemoComp>
          <div>
            <div className="text-primary font-bold 2xl:text-[55px] lg:text-[33px] text-[16px] tracking-[-0.02em]">
              Luggage Tag Cutter
            </div>
            <div className="2xl:text-[20px] lg:text-[15px] text-[11px] leading-[174%] tracking-[0.02em]">
              <div className="mt-[28px]">
                <span className="font-semibold">Price: </span>
                USD$300
                <br />
                <span className="font-semibold">Dimensions: </span>
                W 16cm, H 35cm
                <br />
                <br />
              </div>
              <div className="mt-[20px]">
                Create durable, perfectly sized tags for all your travels with
                our precision Luggage Tag Cutter. This tool quickly and
                efficiently cuts your lenticular prints into luggage tags that
                will elevate your product line, ensuring clean, professional
                edges every time.
                <ul className="list-disc pl-14 mt-2">
                  <li>
                    Ideal for custom luggage tags, ID cards, and event passes
                  </li>
                  <li>
                    Equipped with alignment guides for consistent, accurate cuts
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </AccecssoriesDemoComp>
      </div>
    </div>
  );
};

export default Accessories;
