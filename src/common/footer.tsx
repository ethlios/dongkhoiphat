'use client';

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CopyrightIcon from '@mui/icons-material/Copyright';
import FacebookIcon from '@mui/icons-material/Facebook';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { Button } from '@mui/material';
import classNames from 'classnames/bind';
import Image from 'next/image';
import logoWhite from '../../public/img/logo white.png';
import Zalo from '../../public/img/zalo.png';
import styles from './common.module.scss';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function Footer(props: IAppProps) {
    return (
        <div
            style={{
                backgroundColor: '#1d1e25',
                minHeight: '400px',
                width: '100vw',
                padding: '55px 80px 20px 80px',
                color: 'rgba(255, 255, 255, 0.9)',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignContent: 'center',
                }}
            >
                <Image src={logoWhite.src} alt="logo dkp" width={100} height={40} />
                <Button
                    variant="contained"
                    disableElevation
                    sx={{
                        borderRadius: '10px',
                        fontSize: '14px',
                        letterSpacing: '-0.5px',
                        fontWeight: 600,
                        backgroundColor: '#fff',
                        color: '#000',
                        ':hover': {
                            backgroundColor: 'transparent',
                            color: '#fff',
                            border: 'solid 1px #fff',
                        },
                    }}
                >
                    TRANG GIỚI THIỆU
                </Button>
            </div>
            <hr
                style={{
                    marginTop: '30px',
                    height: '4px',
                    opacity: '0.4',
                    marginBottom: '40px',
                }}
            />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: '140px',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '15px',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                            letterSpacing: 0,
                        }}
                    >
                        <p style={{ fontSize: '14.5px' }}>
                            <LocationOnIcon
                                style={{
                                    fontSize: '18px',
                                }}
                            />
                            : 183/26/19 Nguyễn Văn Khối,
                            <br />
                            {''} phường 8, Gò Vấp, HCM
                        </p>
                        <a href="mailto:dongkhoiphat.co@gmail.com" style={{ fontSize: '14.5px' }}>
                            <AlternateEmailIcon
                                style={{
                                    fontSize: '18px',
                                }}
                            />
                            : dongkhoiphat.co@gmail.com
                        </a>
                        <a href="tel:0763299958" style={{ fontSize: '14.5px' }}>
                            <PhoneInTalkIcon
                                style={{
                                    fontSize: '18px',
                                }}
                            />
                            : +076 32999 58
                        </a>
                    </div>
                    <hr
                        style={{
                            marginTop: '10px',
                            height: '4px',
                            opacity: '0.4',
                            marginBottom: '10px',
                        }}
                    />
                    <form>
                        <input
                            style={{
                                backgroundColor: 'transparent',
                                height: '40px',
                                borderBottom: 'solid 1.5px #fff',
                                // padding: '5px',
                                fontSize: '14px',
                                fontWeight: '500',
                                letterSpacing: '-.5px',
                            }}
                            type="email"
                            required
                            placeholder="Email..."
                        />
                        <button
                            type="submit"
                            style={{
                                width: '40px',
                                height: '40px',
                                backgroundColor: '#fff',
                                borderTopLeftRadius: ' 5px',
                                borderTopRightRadius: ' 5px',
                                position: 'relative',
                                top: '.7px',
                            }}
                            className="opacity"
                        >
                            <KeyboardArrowRightIcon
                                style={{
                                    color: '#000',
                                    scale: '.8',
                                }}
                            />
                        </button>
                    </form>
                    <div
                        style={{
                            marginTop: '20px',
                            display: 'flex',
                            gap: '7px',
                        }}
                    >
                        <FacebookIcon style={{ fontSize: '30px' }} className="opacity" />
                        <Image
                            src={Zalo.src}
                            alt="dkp zalo"
                            width={30}
                            height={30}
                            style={{
                                scale: '.77',
                            }}
                            className="opacity"
                        />
                    </div>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                    }}
                >
                    <h1 className={cx('title-footer')}>Dịch vụ</h1>
                    <p className={cx('text')}>Cung ứng lao động</p>
                    <p className={cx('text')}>Dán tem</p>
                    <p className={cx('text')}>Bốc xếp</p>
                    <p className={cx('text')}>Chuyển nhà</p>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                    }}
                >
                    <h1 className={cx('title-footer')}>Giới thiệu</h1>
                    <p className={cx('text')}>Câu chuyện</p>
                    <p className={cx('text')}>Tin tức & sự kiện</p>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                    }}
                >
                    <h1 className={cx('title-footer')}>Khác</h1>
                    <p className={cx('text')}>Hỏi đáp</p>
                    <p className={cx('text')}>Liên hệ</p>
                </div>
            </div>
            <div
                style={{
                    fontSize: '13px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    marginTop: '30px',
                    flexDirection: 'row-reverse',
                }}
            >
                <CopyrightIcon
                    style={{
                        fontSize: '16px',
                    }}
                />{' '}
                <p
                    style={{
                        fontWeight: '600',
                    }}
                >
                    DKP by{' '}
                    <a href="https://ethlios.vercel.app" target="_blank" rel="noreferrer noopener">
                        Ethlios
                    </a>{' '}
                    2023
                </p>
            </div>
        </div>
    );
}
