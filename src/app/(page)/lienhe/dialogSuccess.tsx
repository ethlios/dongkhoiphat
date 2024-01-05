import React, { useEffect } from 'react';
import sendEmailImg from '../../../../public/img/Asset 1.png';
import Image from 'next/image';
import { Button } from '@mui/material';
import html2canvas from 'html2canvas';
import logo from '../../../../public/img/logo.png';

export interface IAppProps {
    setOpenCotent: any;
    setData: any;
    item: any;
}

export default function DialogSuccess({ setOpenCotent, setData, item }: IAppProps) {
    const handleDowloadImg = () => {
        item.style.padding = '30px';
        item.childNodes[7].style.display = 'none';
        item.childNodes[0].style.display = 'flex';
        // item.childNodes[0].style.width = '100px';
        // item.childNodes[0].style.height = '40px';

        html2canvas(item).then((canvas) => {
            const base64image = canvas.toDataURL('image/pdf');
            let anchor = document.createElement('a');
            anchor.setAttribute('href', base64image);
            anchor.setAttribute('download', 'thong-tin.pdf');
            anchor.click();
            anchor.remove();
        });

        item.style.padding = '0px';
        item.childNodes[7].style.display = 'flex';
        item.childNodes[0].style.display = 'none';
    };

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
                    Yêu cầu của bạn đã được gửi thành công!
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
                    Chúng tôi đã tiếp nhận yêu cầu của bạn. Chúng tôi sẽ gấp rút liên lạc lại với bạn ngay khi
                    có thể. Nếu có sự thay đổi hãy gọi ngay đến số{' '}
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
                        justifyContent: 'space-between',
                        marginTop: '15px',
                        gap: '20px',
                        width: '100%',
                    }}
                >
                    <Button
                        variant="outlined"
                        style={{
                            fontSize: '14px',
                            fontWeight: '600',
                            border: '2px solid',
                            width: '50%',
                        }}
                        onClick={handleDowloadImg}
                    >
                        In thông tin cuộc hẹn
                    </Button>
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
