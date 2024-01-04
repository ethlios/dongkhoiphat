'use client';

import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import classNames from 'classnames/bind';
import Image from 'next/image';
import envelope from '../../../../public/envelope.svg';
import messe from '../../../../public/facebook-messenger.svg';
import Zalo2 from '../../../../public/img/zalo.png';
import Zalo from '../../../../public/img/zalo2.png';
import FormContact from './form';
import styles from './lienhe.module.scss';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function Contact(props: IAppProps) {
    return (
        <main className="cpmount">
            <div
                style={{
                    width: '100%',
                    padding: '30px 50px',
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '30px',
                    marginBottom: '30px',
                }}
            >
                <div
                    style={{
                        backgroundColor: '#ededed',
                        width: '30%',
                        borderRadius: '20px',
                        padding: '30px 20px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '30px',
                        position: 'sticky',
                        height: 'calc(100vh - 125px)',
                        zIndex: '100',
                        top: '100px',
                    }}
                >
                    <div>
                        <p
                            style={{
                                fontWeight: '600',
                                letterSpacing: '-1px',
                                fontSize: '15px',
                                marginBottom: '5px',
                            }}
                        >
                            Trò chuyện với chúng tôi
                        </p>
                        <p
                            style={{
                                fontSize: '12.7px',
                                fontWeight: '500',
                                letterSpacing: '-.5px',
                                color: 'rgba(0,0,0,0.5)',
                            }}
                        >
                            Rất mong bạn sẽ liên hệ với chúng tôi. Chúng tôi sẽ phản hồi nhanh nhất có thể!
                        </p>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '5px',
                                marginTop: '10px',
                                cursor: 'pointer',
                            }}
                            className={cx('link')}
                        >
                            <Image src={Zalo.src} alt="dkp zalo" width={17} height={17} />
                            <p
                                style={{
                                    fontWeight: '600',
                                    letterSpacing: '-1px',
                                    fontSize: '13.5px',
                                }}
                            >
                                Nhắn tin với Zalo.
                            </p>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '5px',
                                marginTop: '5px',
                                cursor: 'pointer',
                            }}
                            className={cx('link')}
                        >
                            <Image src={messe.src} alt="dkp zalo" width={17} height={17} />
                            <p
                                style={{
                                    fontWeight: '600',
                                    letterSpacing: '-1px',
                                    fontSize: '13.5px',
                                }}
                            >
                                Trò chuyện bằng Messenger.
                            </p>
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '5px',
                                marginTop: '5px',
                                cursor: 'pointer',
                            }}
                            className={cx('link')}
                        >
                            <Image src={envelope.src} alt="dkp zalo" width={17} height={17} />
                            <p
                                style={{
                                    fontWeight: '600',
                                    letterSpacing: '-1px',
                                    fontSize: '13.5px',
                                }}
                            >
                                Gửi mail bằng Gmail.
                            </p>
                        </div>
                    </div>
                    <div>
                        <p
                            style={{
                                fontWeight: '600',
                                letterSpacing: '-1px',
                                fontSize: '15px',
                                marginBottom: '5px',
                            }}
                        >
                            Gọi ngay cho chúng tôi
                        </p>
                        <p
                            style={{
                                fontSize: '12.7px',
                                fontWeight: '500',
                                letterSpacing: '-.5px',
                                color: 'rgba(0,0,0,0.5)',
                            }}
                        >
                            Chúng tôi nhận cuộc gọi 24/7, miễn phí tư vấn!
                        </p>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '5px',
                                marginTop: '10px',
                                cursor: 'pointer',
                            }}
                            className={cx('link')}
                        >
                            <PhoneInTalkIcon
                                style={{
                                    fontSize: '22px',
                                    color: 'var(--primary)',
                                }}
                            />
                            <p
                                style={{
                                    fontWeight: '600',
                                    letterSpacing: '-1px',
                                    fontSize: '13.5px',
                                }}
                            >
                                + 076 32999 58
                            </p>
                        </div>
                    </div>
                    <div>
                        <p
                            style={{
                                fontWeight: '600',
                                letterSpacing: '-1px',
                                fontSize: '15px',
                                marginBottom: '5px',
                            }}
                        >
                            Ghé thăm chúng tôi
                        </p>
                        <p
                            style={{
                                fontSize: '12.7px',
                                fontWeight: '500',
                                letterSpacing: '-.5px',
                                color: 'rgba(0,0,0,0.5)',
                            }}
                        >
                            Mở cửa từ thứ 2 đến thứ 7. Liên hệ để hoàn thành công tác chuẩn bị.
                        </p>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '5px',
                                marginTop: '10px',
                                cursor: 'pointer',
                            }}
                            className={cx('link')}
                        >
                            <LocationOnIcon
                                style={{
                                    fontSize: '22px',
                                    color: 'var(--primary)',
                                }}
                            />
                            <p
                                style={{
                                    fontWeight: '600',
                                    letterSpacing: '-1px',
                                    fontSize: '13.5px',
                                }}
                            >
                                183/26/19 Nguyễn Văn Khối, Phường 8, Gò Vấp, Hồ Chí Minh
                            </p>
                        </div>
                        <div
                            style={{
                                marginTop: '20px',
                                display: 'flex',
                                gap: '7px',
                                position: 'absolute',
                                bottom: '20px',
                            }}
                        >
                            <FacebookIcon style={{ fontSize: '40px' }} className="opacity" />
                            <Image
                                src={Zalo2.src}
                                alt="dkp zalo"
                                width={40}
                                height={40}
                                style={{
                                    scale: '.77',
                                    filter: 'brightness(0)',
                                }}
                                className="opacity"
                            />
                        </div>
                    </div>
                </div>
                <FormContact />
            </div>
        </main>
    );
}
