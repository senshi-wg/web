"use client";
import React, { FormEvent, useRef } from 'react'
import { Email } from '../assets'
import Image from 'next/image'
import BitcoinPic from "@/images/Rectangle12.png"
import GirlPic from "@/images/user02.png"
import BitcoinCubePic from "@/images/Rectangle25.png"
import PlantPic from "@/images/Rectangle26.png";
import LightPic from "@/images/Rectangle27.png";
import { Button } from '@nextui-org/button'
import emailjs from '@emailjs/browser';

export default function Subscription() {

    const form = useRef<HTMLFormElement>(null!);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        emailjs.sendForm(
            process.env.NEXT_PUBLIC_SERVICE_ID!,
            process.env.NEXT_PUBLIC_TEMPLATE_ID!,
            form.current,
            process.env.NEXT_PUBLIC_PUBLIC_KEY
        )
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section className='relative mt-32 w-full'>
            <div className="absolute top-0 left-0 -translate-x-1/2 h-[290px] w-[250px] bg-[var(--primary-700)] rounded-[70px] blur-[140px] -z-10"></div>
            <section className='w-full h-auto md:h-[18rem] p-8 flex items-center justify-center flex-col md:flex-row gap-12 bg-[var(--gray-950)] rounded-3xl'>
                <div className="relative h-[10rem] md:h-full w-[180px]">
                    <Image src={BitcoinPic} alt='..' className='w-[74px] absolute left-0 top-0' />
                    <Image src={GirlPic} alt='..' className='w-[34px] absolute right-0 top-[10%]' />
                    <Image src={GirlPic} alt='..' className='w-[34px] absolute left-0 bottom-[15%]' />
                    <Image src={BitcoinCubePic} alt='..' className='w-[52px] absolute right-0 bottom-[5%]' />
                </div>
                <div className="w-full md:w-[35%] max-w-[24rem] flex flex-col items-center gap-6">
                    <h1 className='text-3xl text-center text-[var(--primary-50)] font-bold'>Subscribe For More Info and update from Catalyst</h1>
                    <div className='w-full min-w-[20rem] pl-2 border-2 border-[var(--gray-500)] rounded-3xl overflow-hidden'>
                        <form ref={form} onSubmit={sendEmail} className='w-full flex items-center justify-between'>
                            <Email />
                            <input
                                type="email"
                                name='user_email'
                                placeholder='Enter Email Here..'
                                className='w-auto px-2 outline-none border-none'
                            />
                            <Button type='submit' className='px-4 py-1 rounded-full text-[var(--primary-900)] font-bold bg-[var(--primary-500)]'>Subscribe Now</Button>
                        </form>
                    </div>
                </div>
                <div className="relative h-[10rem] md:h-full w-[180px]">
                    <Image src={PlantPic} alt='..' className='w-[74px] absolute left-0 top-0' />
                    <Image src={GirlPic} alt='..' className='w-[34px] absolute right-0 top-[10%]' />
                    <Image src={GirlPic} alt='..' className='w-[34px] absolute left-[8%] top-[50%]' />
                    <Image src={LightPic} alt='..' className='w-[52px] absolute right-0 bottom-[5%]' />
                </div>
            </section>
        </section>
    )
}
