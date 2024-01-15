"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from "swiper/modules";
import Image, { StaticImageData } from 'next/image';
import pic1 from "@/images/testim01.png"
import pic2 from "@/images/testim02.png"
import pic3 from "@/images/testim03.png"
import userPic from "@/images/user02.png"
import RatingPic from "@/images/rating.png";


export default function Testimonials() {

    interface Testimonial {
        backgroundImage: StaticImageData;
        title: String;
        description: String;
        userName: String;
        userWork: String;
        userImage: StaticImageData;
        rating: Number;
    }

    const testimonials: Testimonial[] = [
        {
            title: "Game changing for our game!",
            description: "Integrating Catalyst into our gaming DApp has been a game-changer. Our users can now easily bring their Ethereum assets to the Solana ecosystem, enhancing their gaming experience. The SDK was a breeze to work with!",
            userName: "Alex-Margon",
            userWork: "NFT Creator",
            userImage: userPic,
            backgroundImage: pic1,
            rating: 2.6
        },
        {
            title: "Game changing for our game!",
            description: "Integrating Catalyst into our gaming DApp has been a game-changer. Our users can now easily bring their Ethereum assets to the Solana ecosystem, enhancing their gaming experience. The SDK was a breeze to work with!",
            userName: "Alex-Margon",
            userWork: "NFT Creator",
            userImage: userPic,
            backgroundImage: pic2,
            rating: 4.1
        },
        {
            title: "Game changing for our game!",
            description: "Integrating Catalyst into our gaming DApp has been a game-changer. Our users can now easily bring their Ethereum assets to the Solana ecosystem, enhancing their gaming experience. The SDK was a breeze to work with!",
            userName: "Alex-Margon",
            userWork: "NFT Creator",
            userImage: userPic,
            backgroundImage: pic3,
            rating: 3.6
        },
        {
            title: "Game changing for our game!",
            description: "Integrating Catalyst into our gaming DApp has been a game-changer. Our users can now easily bring their Ethereum assets to the Solana ecosystem, enhancing their gaming experience. The SDK was a breeze to work with!",
            userName: "Alex-Margon",
            userWork: "NFT Creator",
            userImage: userPic,
            backgroundImage: pic2,
            rating: 4.1
        },
        {
            title: "Game changing for our game!",
            description: "Integrating Catalyst into our gaming DApp has been a game-changer. Our users can now easily bring their Ethereum assets to the Solana ecosystem, enhancing their gaming experience. The SDK was a breeze to work with!",
            userName: "Alex-Margon",
            userWork: "NFT Creator",
            userImage: userPic,
            backgroundImage: pic2,
            rating: 4.1
        },
    ]

    return (
        <section className="mt-32 w-full">
            <div className="flex flex-col items-center">
                <div className="h-[3px] w-20 bg-[var(--primary-700)]"></div>
                <h1 className="text-[var(--primary-700)] text-center font-bold">See Our Review</h1>
            </div>
            <h1 className="section-heading mt-8">What Our User Say About Us</h1>
            <div className="mt-12">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={50}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    modules={[Pagination]}
                    centeredSlides={true}
                    centeredSlidesBounds={true}
                    initialSlide={1}
                    centerInsufficientSlides={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 2
                        }
                    }}
                >
                    {
                        testimonials.map((item, index) => {
                            return <SwiperSlide className='w-full'>
                                <div className='w-full flex flex-col items-center'>
                                    <Image src={item.backgroundImage} alt='...' className='w-full h-[22rem] rounded-md' />
                                    <div className='w-[85%] py-6 px-4 bg-[var(--gray-50)] rounded-xl  -translate-y-[50%]'>
                                        <h2 className='text-2xl font-bold text-[var(--primary-900)]'>{item.title}</h2>
                                        <p className='mt-4 sm:mt-6 text-[var(--gray-800)]'>{item.description}</p>
                                        <div className='mt-4 sm:mt-6 flex items-center justify-between'>
                                            <div className='flex justify-center items-center gap-4'>
                                                <Image src={item.userImage} alt='...' className='' />
                                                <div className='flex flex-col items-start gap-2'>
                                                    <span className='text-[var(--primary-900)] font-bold'>{item.userName}</span>
                                                    <span className='text-[var(--gray-800)]'>{item.userWork}</span>
                                                </div>
                                            </div>
                                            <div className='flex items-center gap-4'>
                                                <Image src={RatingPic} alt='...' className="" />
                                                <span className='text-[var(--primary-900)] font-bold'>{item.rating.toString()}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        }
                        )
                    }
                </Swiper>
            </div>
        </section>
    )
}
