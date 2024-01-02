'use client';

import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import classNames from 'classnames/bind';
import styles from './common.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from '../../public/img/logo.png';

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
    {
        id: 3,
        title: 'Dịch vụ',
        pathname: '/dichvu',
    },
    {
        id: 4,
        title: 'Tin tức',
        pathname: '/tintuc',
    },
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

    return (
        <div
            style={{
                width: '100vw',
                height: '70px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: 'solid 1px rgba(0,0,0,0.2)',
                padding: '0 30px',
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                backgroundColor: '#fff',
            }}
        >
            <div
                style={{
                    backgroundImage: `url(${logo.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100px',
                    height: '40px',
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
                <div
                    style={{
                        backgroundColor: 'var(--primary)',
                        padding: '4px 10px',
                        color: '#fff',
                        borderRadius: '5px',
                        scale: '.9',
                    }}
                    className="opacity"
                >
                    <MailOutlineIcon />
                </div>
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
