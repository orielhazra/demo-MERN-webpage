import '../utils/clipper.css';
import { LinkedInIcon, TikTokIcon, InstagramIcon, YouTubeIcon, HypedIcon, HypedSticker } from '../assets/icons';

export default function Footer({ contact, nav }) {
  return (
    <footer className="border-t border-white/10">
      <div className=" relative mx-auto max-w-[90%] bg-gray-200 flex flex-col lg:flex-row lg:flex-auto gap-6 py-2 lg:py-14 px-2">
        <div className="absolute top-0 right-5 md:right-8 lg:right-12 w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 rounded-full transform -translate-y-1/2">
          <HypedSticker/>
        </div>

        {/* Left Column */}
        <div className="flex flex-col items-start flex-grow">
          <div className="md:w-[204px] md:h-[84px] w-[102px] h-[42px]">
            <HypedIcon/>
          </div>
        </div>

        {/* Right Column (Navigation Links) */}
        <div className="grid grid-cols-[auto_auto] gap-5 text-sm text-black justify-end items-end">
         
          <div className="grid grid-rows-3 grid-cols-1">
            <div className="flex gap-2">
              {nav.map((item, index) => (
                <a
                  key={item.label}
                  href="#"
                  className="my-2 inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-black bg-white py-2 px-2 rounded-lg hover:text-white hover:bg-black"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex gap-2 items-center">
              <p className="text-sm text-black font-semibold px-2">Follow us</p>
              <a
                href="#"
                className="my-2 inline-flex items-center gap-2 text-sm font-semibold text-black bg-white py-2 px-2 rounded-full"
              >
                <LinkedInIcon />

              </a>
              <a
                href="#"
                className="my-2 inline-flex items-center gap-2 text-sm font-semibold text-black bg-white py-2 px-2 rounded-full"
              >
                <TikTokIcon />

              </a>
              <a
                href="#"
                className="my-2 inline-flex items-center gap-2 text-sm font-semibold text-black bg-white py-2 px-2 rounded-full"
              >
                <InstagramIcon />

              </a>
              <a
                href="#"
                className="my-2 inline-flex items-center gap-2 text-sm font-semibold text-black bg-white py-2 px-2 rounded-full"
              >
                <YouTubeIcon />

              </a>
            </div>
            <div className="flex gap-5 items-end justify-center">

              <div className="text-sm text-gray-500">
                2026 Get Hyped
              </div>
              
              <div className="text-sm text-gray-500">
                designed by Oriel
              </div>

            </div>
          </div>
          
          
          <div className="grid grid-rows-[auto_auto_auto] grid-cols-1 gap-2">
            <div className="grid grid-rows-[auto_auto_auto] justify-start">
              {/* First row */}
              <span className="text-sm font-semibold mb-2">Contact</span>
              <span className="text-sm ">{contact.email}</span>
              <span className="text-sm ">{contact.phone}</span>
            </div>
            <div className="grid grid-rows-[auto_auto_auto] justify-start">
              <span className="text-sm font-semibold mb-2">Adres</span>
              <span className="text-sm ">{contact.address1}</span>
              <span className="text-sm ">{contact.address2}</span>
            </div>
            <div className="flex items-end">
              {/* Third row */}
              <span className="text-sm text-gray-500">Privacyvoorwaarden</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
