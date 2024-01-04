import classNames from 'classnames/bind';
import Image from 'next/image';
import mk1 from '../../../../public/img/759.png';
import chuky from '../../../../public/img/chuky.png';
import styles from './gioithieu.module.scss';

import AboutContent from './about';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function About(props: IAppProps) {
    return (
        <main>
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: '30px',
                    gap: '50px',
                    marginBottom: '30px',
                }}
            >
                <div
                    style={{
                        width: '50%',
                        height: 'calc(100vh - 76px)',
                        gap: '25px',
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden',
                    }}
                    className={cx('img')}
                >
                    <Image
                        src={mk1.src}
                        alt=""
                        width={1000}
                        height={1000}
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'center -1px',
                            width: '100%',
                            height: '198px',
                            borderTopRightRadius: '25px',
                            borderBottomRightRadius: '25px',
                        }}
                    />
                    <Image
                        src={mk1.src}
                        alt=""
                        width={1000}
                        height={1000}
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'center -221px',
                            width: '100%',
                            height: '198px',
                            borderTopRightRadius: '25px',
                            borderBottomRightRadius: '25px',
                        }}
                    />
                    <Image
                        src={mk1.src}
                        alt=""
                        width={1000}
                        height={1000}
                        style={{
                            objectFit: 'cover',
                            objectPosition: '0px -440px',
                            width: '100%',
                            height: '198px',
                            borderTopRightRadius: '25px',
                            borderBottomRightRadius: '25px',
                        }}
                    />
                </div>
                <div
                    style={{
                        width: '50%',
                        padding: '0 50px 6.5px 0 ',
                    }}
                >
                    <ul
                        style={{
                            fontSize: '52px',
                            letterSpacing: '7px',
                            lineHeight: '52px',
                            textTransform: 'uppercase',
                        }}
                    >
                        <li
                            style={{
                                fontWeight: '800',
                            }}
                        >
                            Hợp tác
                        </li>
                        <li
                            style={{
                                fontWeight: '800',
                            }}
                        >
                            Vươn tới
                        </li>
                        <li
                            style={{
                                fontWeight: '800',
                            }}
                        >
                            Tương lai!
                        </li>
                    </ul>
                    <Image
                        src={chuky.src}
                        alt=""
                        width={1000}
                        height={1000}
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'center',
                            width: '200px',
                            height: '100px',
                            borderTopRightRadius: '25px',
                            borderBottomRightRadius: '25px',
                            marginLeft: '10px',
                            marginTop: '15px',
                        }}
                    />
                    <p
                        style={{
                            marginTop: '45px',
                            fontSize: '15.6px',
                            letterSpacing: '-.1px',
                        }}
                    >
                        <b
                            style={{
                                fontSize: '46.5px',
                                float: 'left',
                                lineHeight: 1,
                                padding: ' 0 3px 0 3px',
                                margin: '0 10px 0 0 ',
                                color: 'var(--primary)',
                            }}
                        >
                            C
                        </b>
                        ông Ty cung ứng nguồn nhân lực Đồng Khởi Phát được thành lập từ ước mơ của chúng tôi
                        về một hoạt động cung ứng nhân sự với chất lượng dịch vụ tốt nhất dành cho Khách hàng
                        là các doanh nghiệp trong và ngoài nước, là những người lao động Việt Nam luôn gặp khó
                        khăn khi tìm kiếm việc làm. Trở thành chiếc cầu vững chắc, chuyên nghiệp và uy tín để
                        kết nối Doanh nghiệp với nguồn nhân lực chất lượng.
                        <br />
                        <br />
                        Là đơn vị chuyên hoạt động trong lĩnh vực cho thuê lại lao động thời vụ. Bằng kinh
                        nghiệm hơn 3 năm trong lĩnh vực cung ứng và quản trị nhân lực cho rất nhiều doanh
                        nghiệp, chúng tôi mang đến cho người lao động môi trường làm việc đảm bảo, cho doanh
                        nghiệp nguồn nhân lực chất lượng, uy tín đáp ứng được các nhu cầu khắt khe nhất của
                        công việc, giúp doanh nghiệp tối ưu hóa được nhân lực làm việc và đảm bảo hiệu quả sản
                        xuất cao nhất.
                        <br />
                        <br />
                        Chúng tôi tự hào về kinh nghiệm của mình trong việc cung cấp nhân sự cho rất nhiều
                        lĩnh vực ngành nghề khác nhau. Chúng tôi tạo ra lợi ích cho Doanh nghiệp và người lao
                        động, bằng việc tìm hiểu nhu cầu cụ thể của mỗi Khách hàng khi đến với Đồng Khởi Phát.
                        <br />
                        <br />
                        Để đảm bảo uy tín, Đồng Khởi Phát sẽ duy trì các tiêu chuẩn về tính chuyên nghiệp, đạo
                        đức, sự tin cậy và chuyên môn. Mở ra cơ hội hợp tác dài lâu giữa chính chúng tôi và
                        Doanh nghiệp, cùng người lao động.
                        <br />
                        <br />
                        <b
                            style={{
                                borderLeft: 'solid 4px var(--primary)',
                                display: 'flex',
                                paddingLeft: '10px',
                            }}
                        >
                            Sự thành công chúng tôi phụ thuộc vào sự tin tưởng của Khách hàng và Đối tác.
                        </b>
                    </p>
                    <AboutContent />
                    {/* <div
                        style={{
                            height: '100px',
                        }}
                    ></div> */}
                </div>
            </div>
        </main>
    );
}
