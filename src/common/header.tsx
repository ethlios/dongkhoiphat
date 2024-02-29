'use client';

import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import classNames from 'classnames/bind';
import styles from './common.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from '../../public/img/logo.png';
import { useEffect, useState } from 'react';

const link = [
    {
        id: 1,
        title: 'Trang Chủ',
        pathname: '/',
    },
    {
        id: 2,
        title: 'Giới thiệu',
        pathname: '/gioithieu',
    },
    // {
    //     id: 3,
    //     title: 'Dịch vụ',
    //     pathname: '/dichvu',
    // },
    // {
    //     id: 4,
    //     title: 'Tin tức',
    //     pathname: '/tintuc',
    // },
    {
        id: 5,
        title: 'Liên hệ',
        pathname: '/lienhe',
    },
];

const cx = classNames.bind(styles);

export interface HeaderProps {}

export default function Header(props: HeaderProps) {
    const path = usePathname();
    const [scrollToTop, setScrollToTop] = useState<number>(0);

    useEffect(() => {
        const scroll = () => {
            setScrollToTop(window.scrollY);
        };

        window.addEventListener('scroll', scroll);

        return () => window.removeEventListener('scroll', scroll);
    }, []);

    return (
        <div
            style={{
                width: '100vw',
                height: '70px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 50px',
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                backgroundColor: '#fff',
                boxShadow: scrollToTop > 0 ? 'rgba(0, 0, 0, 0.2) 0px 5px 15px' : '',
                transition: 'all ease .5s',
            }}
        >
            <div
                style={{
                    backgroundImage: `url(${logo.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '102px',
                    height: '41px',
                }}
                draggable="false"
            ></div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '30px',
                }}
            >
                <ul
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '20px',
                        fontSize: '15px',
                        transition: ' all ease 0.5s',
                    }}
                    className={cx('link')}
                >
                    {link.map((item) => {
                        return (
                            <li key={item.id}>
                                <Link
                                    href={item.pathname}
                                    style={{
                                        color: path === item.pathname ? 'var(--primary)' : '',
                                        textDecoration: path === item.pathname ? '2px underline' : '',
                                        textUnderlineOffset: path === item.pathname ? '5px' : '',
                                    }}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '8px',
                }}
            >
                <Link
                    style={{
                        backgroundColor: 'var(--primary)',
                        padding: '4px 10px',
                        color: '#fff',
                        borderRadius: '5px',
                        scale: '.9',
                    }}
                    className="opacity"
                    href="mailto:dongkhoiphat.co@gmail.com"
                >
                    <MailOutlineIcon />
                </Link>
                <a
                    href="tel:0763299958"
                    style={{
                        backgroundColor: 'var(--primary)',
                        padding: '4px 10px',
                        color: '#fff',
                        borderRadius: '5px',
                        scale: '.9',
                    }}
                    className="opacity"
                >
                    <AddIcCallIcon />
                </a>
            </div>
        </div>
    );
}
