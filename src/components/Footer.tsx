import React from 'react';
import IconLink from './IconLink';
// import { IoIosMail } from 'react-icons/io';
// import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
// import { AiFillInstagram } from 'react-icons/ai';

const Footer: React.FC = () => {
  const items = [
    {
      // iconClass: <FaMapMarkerAlt size={30} />,
      imgUrl: '/Location.png',
      label: '140 Paya Lebar Rd, #06-23, Singapore 409015',
      link: '',
    },
    {
      // iconClass: <FaPhoneAlt size={30} />,
      imgUrl: '/Phone.png',
      label: '+65 9187 2817',
      link: 'tel:+6591872817',
    },
    {
      // iconClass: <IoIosMail size={30} />,
      imgUrl: '/Letter.png',
      label: 'hello@thegrail.com',
      link: 'mailto:hello@thegrail.com',
    },
    {
      // iconClass: <AiFillInstagram size={30} />,
      imgUrl: '/Instagram.png',
      label: '@thegrail',
      link: 'https://www.instagram.com/thegrail',
    },
  ];
  return (
    <footer className="bg-secondary text-white sm:text-[18px] text-[10px] md:py-[85px] py-[17px] md:px-[104px] px-[28px] font-iter">
      <img src="/logo2.png" className="md:block hidden" />
      <div className="md:mt-[63px] mt-0 sm:ml-[66px] ml-0 flex flex-col sm:space-y-[25px] space-y-[19px]">
        {items.map((item) => (
          <IconLink
            // iconClass={item.iconClass}
            imgUrl={item.imgUrl}
            label={item.label}
            link={item.link}
            className="flex"
            key={item.label}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
