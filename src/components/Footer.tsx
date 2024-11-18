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
    <footer className="bg-secondary text-white text-[18px] pt-[85px] pl-[104px] pb-[67px] font-iter">
      <img src="/logo2.png" />
      <div className="mt-[63px] ml-[66px] flex flex-col space-y-[25px]">
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
