import Slick from '~/components/home/Slick';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Link from 'next/link';
import img1 from '../../../public/img/arron-choi-fYD54gVXFGM-unsplash.jpg';
import img2 from '../../../public/img/old-factory-hall-with-equipment-machines-workers.jpg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Appointment from '~/components/home/Appointment';
import Content2 from '~/components/home/Body2';
import HomeContent3 from '~/components/home/Body3';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-10 ">
            <div
                style={{
                    width: '100vw',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: '0 50px',
                }}
            >
                <div
                    style={{
                        width: '46%',
                    }}
                >
                    <p
                        style={{
                            fontSize: '36px',
                            letterSpacing: '2px',
                            color: 'var(--primary)',
                        }}
                        className="title"
                    >
                        ĐỒNG KHỞI PHÁT
                    </p>
                    <p
                        style={{
                            fontSize: '16px',
                            textTransform: 'uppercase',
                            fontWeight: '700',
                            letterSpacing: '-.5px',
                            marginTop: '2px',
                        }}
                    >
                        Hợp tác vươn tới tương lai!
                    </p>
                    <div
                        style={{
                            backgroundColor: 'var(--secondary)',
                            width: '200px',
                            height: '3.3px',
                            margin: '10px 0 15px 0',
                        }}
                    />
                    <p
                        style={{
                            fontSize: '15.6px',
                            padding: '0 ',
                            letterSpacing: '-.1px',
                        }}
                    >
                        Với tiêu chí{' '}
                        <FormatQuoteIcon
                            style={{
                                fontSize: '14px',
                                rotate: '180deg',
                                position: 'relative',
                                bottom: '5px',
                            }}
                        />
                        <b
                            style={{
                                fontWeight: '600',
                            }}
                        >
                            {'CỘNG SINH ĐỂ PHÁT TRIỂN'}
                        </b>
                        <FormatQuoteIcon
                            style={{
                                fontSize: '14px',
                                position: 'relative',
                                bottom: '5px',
                            }}
                        />
                        , chúng tôi hiểu được nhu cầu của khách hàng và biết được giá trị của bản thân mình
                        mang lại cho đối tác. Xuất phát điểm là những chàng trai lao đầu vào đời bằng nghề bốc
                        vác, chúng tôi hiểu được giá trị và luôn trân quý nụ cười của nhau. Bằng tất cả sự
                        giản dị mộc mạc ấy, chúng tôi xin hứa sẽ luôn lắng nghe ý kiến và cố gắng làm hài lòng
                        quý khách hàng, để có thể san sẻ nụ cười cho nhau, vì đối với chúng tôi mà nói nụ cười
                        của quý khách hàng sẽ là sức sống của chúng tôi, và nụ cười của người lao động sẽ luôn
                        là nụ cười đẹp nhất!
                    </p>
                    <div
                        style={{
                            backgroundColor: 'var(--primary)',
                            color: '#fff',
                            borderRadius: '10px',
                            width: '200px',
                            padding: '12px 14px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: '14px',
                            marginTop: '16px',
                            letterSpacing: '-0.5px',
                        }}
                        className="opacity"
                    >
                        <Link
                            href={'/'}
                            style={{
                                fontWeight: '600',
                            }}
                        >
                            XEM DỊCH VỤ <ArrowForwardIcon style={{ fontSize: '16px', marginLeft: '5px' }} />
                        </Link>
                    </div>
                </div>
                <div
                    style={{
                        width: '600px',
                        height: '300px',
                        borderRadius: '50px',
                    }}
                >
                    <Slick />
                </div>
            </div>
            <div
                style={{
                    width: '100vw',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: '0 50px',
                    marginTop: '25px',
                    alignItems: 'center',
                }}
            >
                <div>
                    <div
                        style={{
                            backgroundImage: `url(${img1.src})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            width: '150px',
                            height: '200px',
                            borderBottomLeftRadius: '100px',
                            borderBottomRightRadius: '100px',
                            borderTopRightRadius: '10px',
                            borderTopLeftRadius: '10px',
                            zIndex: '100',
                        }}
                    ></div>
                    <div
                        style={{
                            backgroundImage: `url(${img2.src})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            width: '190px',
                            height: '145px',
                            borderRadius: '10px',
                            position: 'relative',
                            bottom: '40px',
                            left: '30px',
                            zIndex: '-1',
                        }}
                    ></div>
                </div>
                <Appointment />
            </div>
            <Content2 />
            <HomeContent3 />
        </main>
    );
}
