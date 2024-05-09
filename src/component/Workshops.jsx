import React from "react";
const Workshops = () => {
  return (
    <div className="w-auto py-10 bg-gray-100 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6">ورش العمل واللقاءات</h2>
      <p className="text-lg text-center mb-10">
        لقاءات ممتعة مع الخبراء وورش عمل تفاعلية تمنحك الفرصة لاكتساب المعرفة
        والمهارات الجديدة!
      </p>
      <div className="w-auto mt-10">
        {/* Ads section */}
        <div className="flex justify-between gap-4">
          <img
            className="w-1/3 h-auto rounded-md"
            src={process.env.PUBLIC_URL + "/img/Card.png"}
            alt="Ad Image"
          />
          <img
            className="w-1/3 h-auto rounded-md"
            src={process.env.PUBLIC_URL + "/img/Card2.png"}
            alt="Ad Image"
          />
          <img
            className="w-1/3 h-auto rounded-md"
            src={process.env.PUBLIC_URL + "/img/Card3.png"}
            alt="Ad Image"
          />
        </div>
        {/* Booking button */}
        <div className="w-full text-center mt-6">
          <a
            className="px-6 py-3 bg-white text-zinc-500 text-base leading-tight rounded-md hover:bg-[#69B1B0] transition duration-300"
            href="https://wa.me/966530547165"
          >
            حجز الورش واللقاءات
          </a>
        </div>
      </div>
    </div>
  );
};

export default Workshops;
