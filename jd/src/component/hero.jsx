import React from 'react';

const Hero = () => {
  return (
    <section class="bg-white-50">
        <img src="/background.svg" alt="Background" className="absolute inset-0 w-full h-full" />
      <div class="mx-auto max-w-screen-x5 px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div class="mx-auto max-w-xl text-center">
          <h1 className="w-full text-center text-zinc-900 text-3xl sm:text-4xl font-bold font-['Calibri'] leading-10">
         اكتشف رحلة التعلم والإلهام: احجز جلسات مع خبراء من مختلف التخصصات وانطلق نحو الإبداع والنجاح
         </h1>
          <p class="mt-4 sm:text-xl/relaxed text-center text-zinc-900/opacity-80 text-base font-normal font-['Calibri'] leading-tight">
            اكتشف عالم التواصل والتعلم مع منصة جد، حيث يلتقي الشباب المبتكر بأصحاب الخبرات والمعرفة لتحفيز الابتكار وتبادل الأفكار الرائدة. انضم إلينا لرحلة فريدة من التعلم والتطوير، وابنِ مستقبلك بأيديك وتوجيه من الخبراء الأكفاء
          </p>
          <div class="mt-8 flex flex-wrap justify-center gap-4">
            <a
              class="block w-full rounded-2xl bg-slate-900 px-6 py-2 text-sm sm:px-12 sm:py-3 font-['Calibri'] text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="#"
            >
              أحجز مع خبير
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;


