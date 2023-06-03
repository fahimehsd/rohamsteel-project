import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-black-300 via-black-200 to-black-100 text-black"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-black-500">
            درباره شرکت <span className="text-red-500"> رهام </span> پارس
          </p>
        </div>
        <p className="text-xl leading-relaxed mt-20">
          هدف شرکت صنایع فولاد رهام پارس، تولید سالانه 2/1 میلیون تن آهن اسفنجی
          با تأکید بر حفاظت از محیط زیست است به نحوی که با احداث نیروگاه، آب و
          برق مورد نیاز خود را تأمین کند. و همین‌طور برای 26 مگاوات برق موردنیاز
          نیروگاه 50 مگاواتی احداث خواهد شد.
        </p>
      </div>
    </div>
  );
};

export default About;
