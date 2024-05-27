import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import next from "../../assets/images/home/Vector.svg"

const Hero = () => {

    let swipers = [
        {
            img: "https://s3-alpha-sig.figma.com/img/dc40/ba89/7215f42e5883a64157f0aa3a4d1a866a?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E5WHp1TrPAGyBgErSXGRLj0GAwxDYY14m0as9l3dYd3ts34UHxiUZ87hEcatxvvY3y~halkP6u5jdE5XbEkp6tAMnqKc3YAvO00bUZgkWp~oYktlPfx6RBad-BrfuFsKILO4ab6-91ms4Ux5KxgVCsGkeu7I-nC5akzjwQ5g-a5dRYNr2KmqzFjIwe4CJXEqQHcJ1PFBufe0fedATltcY-hcrRu1tFH2nbp3PFrsRJ0MstB-Qkwk~n89JvOiinhbBYBdc1ML7ih~xWMQWeO1CbPVVkFWyf0~cl05b~gyzYplN4kEAguScB4cVolIIsi3hQDmw9OZ-29Gl0dmLoT05Q__",
            title: "Up to 10% off Voucher",
            subtitle: "iPhone 14 Series"
        },
        {
            img: "https://daryo.uz/static/2023/09/6502e8f3bf27b.jpg",
            title: "Up to 10% off Voucher",
            subtitle: "iPhone 14 Series"
        },
        {
            img: "https://pic.clubic.com/v1/images/1926609/raw?fit=smartCrop&width=240&height=163&hash=8d63f62409621f884415426101bc62b8b65dc507",
            title: "Up to 10% off Voucher",
            subtitle: "iPhone 14 Series"
        },
        {
            img: "https://img-4.linternaute.com/HPEBkn0euG02KDJyY-5orXHiHz4=/1500x/smart/af81d4394a9e4778a9481cc57954c19e/ccmcms-linternaute/37542570.jpg",
            title: "Up to 10% off Voucher",
            subtitle: "iPhone 14 Series"
        },
        {
            img: "https://cloudfront-us-east-1.images.arcpublishing.com/advancelocal/PGYDJLHMFBAWXCET22YAWKWMKE.jpg",
            title: "Up to 10% off Voucher",
            subtitle: "iPhone 14 Series"
        }
    ]




    return (
        <div className='container hero '>
            {/* <h2>Hero</h2> */}
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    swipers.map((el, inx) => (
                        <SwiperSlide key={inx}>
                            <div className='swiper'>
                                <div className='swiper__left'>
                                    <div className='swiper__left__subtitle'>
                                        <div>
                                            <img src="https://s3-alpha-sig.figma.com/img/1126/a357/e5011a6f245df4c38eae015c7c9ccbe7?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PqRIAiq8HIs0iW8yx7yTfR99V2meEkEKWf~O7YdM8pBoXSX49~6Y-44FSuwJVRcnA~yQcHQgDgZj~02CGkeq6kwKud3cvj4WCnusOOGFWK7FuVEbYVLVkJT~RUTw-B0HRnDq58sCp3ZbmSNFDBPjt0DyZgeelcMVNm5pSwQoq9IzH57qg~MuF4YbHcB9413blfolOxiuS3iRl3yljWQOSen-d7ZPkevi5KKI0UStvrfxgrg1Px5y6FAVBHlK7ak7Izif3GX6~uQLvdgAYFsWQmVKYIeEPcFunhTzBCijY6yNDLFPHIMc2kYva~cbjPVALG48ATcd-BRkmKfIGFId4w__" alt="" />
                                        </div>
                                        <p>{el.subtitle}</p>
                                    </div>
                                    <p className='swiper__left__title'>
                                        {el.title}
                                    </p>
                                    <div className='swiper__left__shop'>
                                        <span>Shop Now</span>
                                        <div>
                                            <img src={next} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className='swiper__reight'>
                                    <img src={el.img} alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }



            </Swiper>
        </div>
    )
}

export default Hero;