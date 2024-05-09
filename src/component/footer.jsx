import React from "react";
import logo from "../icons/logo.png"; // استيراد شعار PNG

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 py-16 flex flex-col justify-start items-center gap-16 inline-flex">
      <div className="self-stretch justify-between items-start inline-flex">
        <div className="w-44 self-stretch flex-col justify-start items-start gap-4 inline-flex">
          <div className="self-stretch text-right text-zinc-900 text-base font-medium font-cairo leading-normal">
            الشركة
          </div>
          <div className="self-stretch h-4 flex-col justify-start items-start gap-4 flex">
            <div className="self-stretch justify-start items-center inline-flex">
              <div className="w-44 text-right text-gray-500 text-xs font-medium font-cairo leading-none">
                عنا
              </div>
            </div>
          </div>
        </div>
        <div className="w-44 flex-col justify-start items-start gap-4 inline-flex">
          <div className="self-stretch text-right text-zinc-900 text-base font-medium font-cairo leading-normal">
            الدعم والمساعدة
          </div>
          <div className="self-stretch h-12 flex-col justify-start items-start gap-4 flex">
            <div className="self-stretch justify-start items-center inline-flex">
              <div className="w-44 text-right text-gray-500 text-xs font-medium font-cairo leading-none">
                اتصل بنا
              </div>
            </div>
            <div className="self-stretch justify-start items-center inline-flex">
              <div className="w-44 text-right text-gray-500 text-xs font-medium font-cairo leading-none">
                مركز المعلومات
              </div>
            </div>
          </div>
        </div>
        <div className="w-44 flex-col justify-start items-start gap-4 inline-flex">
          <div className="self-stretch text-right text-zinc-900 text-base font-medium font-cairo leading-normal">
            قانوني
          </div>
          <div className="self-stretch h-12 flex-col justify-start items-start gap-4 flex">
            <div className="self-stretch justify-start items-center inline-flex">
              <div className="w-44 text-right text-gray-500 text-xs font-medium font-cairo leading-none">
                الخصوصية
              </div>
            </div>
            <div className="self-stretch justify-start items-center inline-flex">
              <div className="w-44 text-right text-gray-500 text-xs font-medium font-cairo leading-none">
                الشروط والحقوق
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="h-44 flex-col justify-start items-center gap-5 flex">
        {/* Add screen effect to the image */}
        <div className="group relative">
          <img className="w-40 h-20" src={logo} alt="Company Logo" />
        </div>
        <div className="self-stretch text-center">
          <span className="text-gray-500 text-base font-normal font-inter leading-normal">
            © 2024{" "}
          </span>
          <span className="text-gray-500 text-base font-normal font-calibri leading-tight">
            كل الحقوق محفوظة لشركة جد
          </span>
        </div>
        <div className="w-36 justify-start items-center gap-5 inline-flex">
          <div className="pl-1.5 pt-0.5 justify-end items-center flex">
            <div className="w-5 h-5 pl-0.5 pr-1 py-0.5 justify-center items-center inline-flex" />
          </div>
          <div className="w-6 h-6 pl-0.5 pr-1 py-1 justify-center items-center flex" />
          <div className="w-4 h-4 relative" />
          <div className="w-4 h-4 justify-center items-center flex" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
