import React, { useState } from "react";
import news1 from "../../assets/images/news/news1.jpg";
import news2 from "../../assets/images/news/news2.jpg";
import news3 from "../../assets/images/news/news3.jpg";
import news4 from "../../assets/images/news/news4.jpg";
import Pagination from "../pagination/Pagination";
const MainNews = () => {
  const news = [
    {
      id: 1,
      title:
        "پیام تسلیت مدیرعامل شرکت صنایع تولیدی فولاد رهام پارس به مناسبت درگذشت مادر رئیس سازمان صنعت، معدن و تجارت استان فارس",
      desc: "محمد شهبازی پور مدیرعامل شرکت صنایع فولاد رهام پارس با صدور پیامی، درگذشت مادر مهندس ایزدی رئیس سازمان صنعت، معدن و تجارت استان فارس را تسلیت گفت. بسمه تعالی وَبَشِّرِ الصَّابرِینَ الَّذینَ إِذَا أَصَابَتْهُمْ مُصِیبَهٌ قَالُوا إِنَّا لِلَّهِ وَ إِنَّا إِلَیْهِ رَاجِعُونَ برادر گرانقدر جناب آقای مهندس ایزدی رئیس محترم سازمان صنعت، معدن و تجارت استان فارسبی‌شک ایمان و اراده راستین شهدا ریشه در اعتقادات ناب و خالصی دارد که توسط والدین گرانقدر آنان بالندگی یافته که در این میان نقش این بانوان ارجمند در جهت تربیت اسوه‌های جهاد و مقاومت بی‌بدیل است.با نهایت تالم و تاثر مصیبت رحلت بانوی مکرمه، اسوه صبر و شکیبایی، مرحومه «مهین‌زاد شمس» مادر بزرگوار شهیدان ایزدی را خدمت حضرتعالی و عموم مردم به ویژه خانواده معظم شهدا و مردم شهید پرور استان فارس صمیمانه تسلیت و تعزیت عرض می نمایم. از درگاه خداوند متعال برای آن مرحومه علو درجات و همجواری با فرزندان شهیدش و برای بازماندگان معزز ایشان صبر، اجر و سلامتی مسألت دارم.محمد شهبازی پور مدیرعامل شرکت صنایع فولاد رهام پارس",

      img: news2
    },
    {
      id: 2,
      title:
        "پیام تسلیت مدیرعامل شرکت صنایع تولیدی فولاد رهام پارس به مناسبت درگذشت مادر رئیس سازمان صنعت، معدن و تجارت استان فارس",
      desc: "محمد شهبازی پور مدیرعامل شرکت صنایع فولاد رهام پارس با صدور پیامی، درگذشت مادر مهندس ایزدی رئیس سازمان صنعت، معدن و تجارت استان فارس را تسلیت گفت. بسمه تعالی وَبَشِّرِ الصَّابرِینَ الَّذینَ إِذَا أَصَابَتْهُمْ مُصِیبَهٌ قَالُوا إِنَّا لِلَّهِ وَ إِنَّا إِلَیْهِ رَاجِعُونَ برادر گرانقدر جناب آقای مهندس ایزدی رئیس محترم سازمان صنعت، معدن و تجارت استان فارسبی‌شک ایمان و اراده راستین شهدا ریشه در اعتقادات ناب و خالصی دارد که توسط والدین گرانقدر آنان بالندگی یافته که در این میان نقش این بانوان ارجمند در جهت تربیت اسوه‌های جهاد و مقاومت بی‌بدیل است.با نهایت تالم و تاثر مصیبت رحلت بانوی مکرمه، اسوه صبر و شکیبایی، مرحومه «مهین‌زاد شمس» مادر بزرگوار شهیدان ایزدی را خدمت حضرتعالی و عموم مردم به ویژه خانواده معظم شهدا و مردم شهید پرور استان فارس صمیمانه تسلیت و تعزیت عرض می نمایم. از درگاه خداوند متعال برای آن مرحومه علو درجات و همجواری با فرزندان شهیدش و برای بازماندگان معزز ایشان صبر، اجر و سلامتی مسألت دارم.محمد شهبازی پور مدیرعامل شرکت صنایع فولاد رهام پارس",

      img: news3
    },
    {
      id: 3,
      title:
        "پیام تسلیت مدیرعامل شرکت صنایع تولیدی فولاد رهام پارس به مناسبت درگذشت مادر رئیس سازمان صنعت، معدن و تجارت استان فارس",
      desc: "محمد شهبازی پور مدیرعامل شرکت صنایع فولاد رهام پارس با صدور پیامی، درگذشت مادر مهندس ایزدی رئیس سازمان صنعت، معدن و تجارت استان فارس را تسلیت گفت. بسمه تعالی وَبَشِّرِ الصَّابرِینَ الَّذینَ إِذَا أَصَابَتْهُمْ مُصِیبَهٌ قَالُوا إِنَّا لِلَّهِ وَ إِنَّا إِلَیْهِ رَاجِعُونَ برادر گرانقدر جناب آقای مهندس ایزدی رئیس محترم سازمان صنعت، معدن و تجارت استان فارسبی‌شک ایمان و اراده راستین شهدا ریشه در اعتقادات ناب و خالصی دارد که توسط والدین گرانقدر آنان بالندگی یافته که در این میان نقش این بانوان ارجمند در جهت تربیت اسوه‌های جهاد و مقاومت بی‌بدیل است.با نهایت تالم و تاثر مصیبت رحلت بانوی مکرمه، اسوه صبر و شکیبایی، مرحومه «مهین‌زاد شمس» مادر بزرگوار شهیدان ایزدی را خدمت حضرتعالی و عموم مردم به ویژه خانواده معظم شهدا و مردم شهید پرور استان فارس صمیمانه تسلیت و تعزیت عرض می نمایم. از درگاه خداوند متعال برای آن مرحومه علو درجات و همجواری با فرزندان شهیدش و برای بازماندگان معزز ایشان صبر، اجر و سلامتی مسألت دارم.محمد شهبازی پور مدیرعامل شرکت صنایع فولاد رهام پارس",

      img: news4
    },
    {
      id: 4,
      title:
        "پیام تسلیت مدیرعامل شرکت صنایع تولیدی فولاد رهام پارس به مناسبت درگذشت مادر رئیس سازمان صنعت، معدن و تجارت استان فارس",

      desc: "محمد شهبازی پور مدیرعامل شرکت صنایع فولاد رهام پارس با صدور پیامی، درگذشت مادر مهندس ایزدی رئیس سازمان صنعت، معدن و تجارت استان فارس را تسلیت گفت. بسمه تعالی وَبَشِّرِ الصَّابرِینَ الَّذینَ إِذَا أَصَابَتْهُمْ مُصِیبَهٌ قَالُوا إِنَّا لِلَّهِ وَ إِنَّا إِلَیْهِ رَاجِعُونَ برادر گرانقدر جناب آقای مهندس ایزدی رئیس محترم سازمان صنعت، معدن و تجارت استان فارسبی‌شک ایمان و اراده راستین شهدا ریشه در اعتقادات ناب و خالصی دارد که توسط والدین گرانقدر آنان بالندگی یافته که در این میان نقش این بانوان ارجمند در جهت تربیت اسوه‌های جهاد و مقاومت بی‌بدیل است.با نهایت تالم و تاثر مصیبت رحلت بانوی مکرمه، اسوه صبر و شکیبایی، مرحومه «مهین‌زاد شمس» مادر بزرگوار شهیدان ایزدی را خدمت حضرتعالی و عموم مردم به ویژه خانواده معظم شهدا و مردم شهید پرور استان فارس صمیمانه تسلیت و تعزیت عرض می نمایم. از درگاه خداوند متعال برای آن مرحومه علو درجات و همجواری با فرزندان شهیدش و برای بازماندگان معزز ایشان صبر، اجر و سلامتی مسألت دارم.محمد شهبازی پور مدیرعامل شرکت صنایع فولاد رهام پارس",
      img: news1
    }
  ];

  const theLatest = news.slice(-4);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = news.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);

  return (
    <div className="flex w-full min-h-screen bg-gradient-to-b from-black-300 via-black-200 to-black-100 pt-44 p-10 leading-relaxed text-lg">
      <div className="flex flex-col w-1/2">
        <div className=" relative" key={theLatest[3].id}>
          <img
            src={theLatest[3].img}
            alt=""
            className="w-full h-full bg-contain"
          />
          <div class="absolute bottom-0 left-0 right-0 px-4 py-4 bg-black-800 opacity-70 hover:scale-105 duration-300">
            <p class="mt-2 text-sm text-gray-100">{theLatest[3].title}</p>
          </div>
        </div>
        <div className="flex">
          <div className=" relative" key={theLatest[2].id}>
            <img
              src={theLatest[2].img}
              alt=""
              className="w-full h-full bg-contain"
            />
            <div class="absolute bottom-0 left-0 right-0 px-4 py-4 bg-black-800 opacity-70 hover:scale-105 duration-300">
              <p class="mt-2 text-sm text-gray-100">{theLatest[2].title}</p>
            </div>
          </div>
          <div className="relative" key={theLatest[1].id}>
            <img
              src={theLatest[1].img}
              alt=""
              className="w-full h-full bg-contain"
            />
            <div class="absolute bottom-0 left-0 right-0 px-4 py-4 bg-black-800 opacity-70 hover:scale-105 duration-300">
              <p class="mt-2 text-sm text-gray-100">{theLatest[1].title}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 mx-10">
        <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-black-500">
          اخبار شرکت <span className="text-red-500">رهام</span> پارس
        </p>
        <div>
          {currentPosts.map(({ id, title, desc, img }) => {
            return (
              <div
                key={id}
                className="my-10 pb-5 cursor-pointer flex items-center gap-5 border-b-2 border-black-500 last-of-type:border-0"
                onClick={() => {}}
              >
                <img
                  src={img}
                  alt=""
                  className="w-60 h-40 hover:scale-105 duration-300"
                />
                <div>
                  <p className="text-xl sm:text-2xl font-bold inline">
                    {title}
                  </p>
                  <button className="text-right">
                    {desc.substring(0, 100)}..
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={news.length}
          currentPage={currentPage}
          paginate={paginate}
          paginateBack={paginateBack}
          paginateFront={paginateFront}
        />
      </div>
    </div>
  );
};

export default MainNews;
