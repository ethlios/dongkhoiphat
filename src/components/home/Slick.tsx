'use client';

import * as React from 'react';
import img1 from '../../../public/img/arron-choi-fYD54gVXFGM-unsplash.jpg';
import img2 from '../../../public/img/old-factory-hall-with-equipment-machines-workers.jpg';
import img3 from '../../../public/img/top-view-messy-full-moving-boxes-room.jpg';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const listImg = [
    {
        id: 2,
        img: img2.src,
    },
    {
        id: 3,
        img: img3.src,
    },
];

export interface IAppProps {}

export default function Slick(props: IAppProps) {
    const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 6000,
        infinite: true,
        speed: 500,
        pauseOnHover: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <div>
            <Slider {...settings}>
                {listImg.map((img) => {
                    return (
                        <Image
                            key={img.id}
                            src={img.img}
                            alt="dongkhoiphat-img"
                            width={1000}
                            height={1000}
                            style={{
                                width: '400px',
                                height: '300px',
                                objectFit: 'cover',
                                objectPosition: 'center',
                            }}
                        />
                    );
                })}
            </Slider>
        </div>
    );
}
