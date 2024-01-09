import React, { useEffect } from 'react';
import sendEmailImg from '../../../../public/img/Asset 1.png';
import Image from 'next/image';
import { Button } from '@mui/material';

export interface IAppProps {
    setOpenCotent: any;
    setData: any;
}

export default function DialogError({ setOpenCotent, setData }: IAppProps) {
    return (
        <div
            style={{
                display: 'flex',
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(0,0,0,0.3)',
                position: 'fixed',
                zIndex: '3000',
                top: 0,
                left: 0,
                justifyContent: 'center',
                alignItems: 'center',
            }}
            className="cpmount"
        >
            <div
                style={{
                    width: '600px',
                    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 5px 15px',
                    backgroundColor: '#fff',
                    borderRadius: '30px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    padding: '35px 55px',
                }}
            >
                <Image src={sendEmailImg.src} alt="email dongkhoiphat" width={230} height={230} />
                <p
                    style={{
                        fontSize: '18px',
                        letterSpacing: '-1px',
                        fontWeight: 600,
                        marginTop: '20px',
                    }}
                >
                    Yêu cầu của bạn chưa được gửi thành công!
                </p>
                <p
                    style={{
                        fontSize: '13.5px',
                        fontWeight: '500',
                        letterSpacing: '-.5px',
                        color: 'rgba(0,0,0,0.5)',
                        textAlign: 'center',
                        marginTop: '5px',
                    }}
                >
                    Lỗi được phát sinh từ một vài sự cố nào đó, có thể là trục trặc bên phía máy chủ. Xin vui
                    lòng thử lại sau. Nếu có sự bất tiện nào hãy gọi ngay đến số{' '}
                    <a
                        href="tel:0763299958"
                        style={{
                            textDecoration: '1px underline',
                        }}
                    >
                        076 32999 58
                    </a>
                    . Chân thành cảm ơn thái độ làm việc chăm chỉ của bạn!
                </p>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: '15px',
                        gap: '20px',
                        width: '100%',
                    }}
                >
                    <Button
                        variant="contained"
                        style={{
                            fontSize: '14px',
                            fontWeight: '600',
                            width: '50%',
                        }}
                        onClick={() => {
                            setData('');
                            setOpenCotent(false);
                        }}
                    >
                        quay Trở lại
                    </Button>
                </div>
            </div>
        </div>
    );
}
