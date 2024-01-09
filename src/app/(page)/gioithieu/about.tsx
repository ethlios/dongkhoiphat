'use client';

import React, { useRef } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import BalanceIcon from '@mui/icons-material/Balance';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import GavelIcon from '@mui/icons-material/Gavel';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import styles from './gioithieu.module.scss';

const cx = classNames.bind(styles);

export interface IAppProps {}

export default function AboutContent(props: IAppProps) {
    const ct1 = useRef<any>();
    const ct2 = useRef<any>();
    const ct3 = useRef<any>();
    const ct4 = useRef<any>();
    const ct5 = useRef<any>();

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    gap: '40px',
                    height: '100px',
                    borderRadius: '20px',
                    width: '100%',
                    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 5px 15px',
                    margin: '40px 0 40px 0 ',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                }}
                className={cx('img')}
            >
                <div
                    style={{
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        border: 'solid 2px var(--primary)',
                        color: 'var(--primary)',
                    }}
                    className="opacity"
                    onClick={() => {
                        ct1.current.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center',
                        });
                    }}
                >
                    <Tippy content="Tầm nhìn và sứ mệnh">
                        <VisibilityIcon style={{ fontSize: '30px' }} />
                    </Tippy>
                </div>
                <div
                    style={{
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        border: 'solid 2px var(--primary)',
                        color: 'var(--primary)',
                    }}
                    className="opacity"
                    onClick={() => {
                        ct2.current.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center',
                        });
                    }}
                >
                    <Tippy content="Giá trị cốt lõi">
                        <MonitorHeartIcon style={{ fontSize: '30px' }} />
                    </Tippy>
                </div>
                <div
                    style={{
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        border: 'solid 2px var(--primary)',
                        color: 'var(--primary)',
                    }}
                    className="opacity"
                    onClick={() => {
                        ct3.current.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center',
                        });
                    }}
                >
                    <Tippy content="Mục tiêu định hướng">
                        <CrisisAlertIcon style={{ fontSize: '30px' }} />
                    </Tippy>
                </div>
                <div
                    style={{
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        border: 'solid 2px var(--primary)',
                        color: 'var(--primary)',
                    }}
                    className="opacity"
                    onClick={() => {
                        ct4.current.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center',
                        });
                    }}
                >
                    <Tippy content="Nguyên tắc hoạt động">
                        <GavelIcon style={{ fontSize: '30px' }} />
                    </Tippy>
                </div>
                <div
                    style={{
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        border: 'solid 2px var(--primary)',
                        color: 'var(--primary)',
                    }}
                    className="opacity"
                    onClick={() => {
                        ct5.current.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center',
                        });
                    }}
                >
                    <Tippy content="Triết lý kinh doanh">
                        <BalanceIcon style={{ fontSize: '30px' }} />
                    </Tippy>
                </div>
            </div>
            <div>
                <div style={{ fontSize: '15.6px', letterSpacing: '-.1px' }} ref={ct1}>
                    <p
                        className="title"
                        style={{
                            fontSize: '22px',
                            letterSpacing: '-0.3px',
                            marginBottom: '15px',
                        }}
                    >
                        <b style={{ marginRight: '5px' }} className="title">
                            1.
                        </b>{' '}
                        TẦM NHÌN VÀ SỨ MỆNH
                    </p>
                    <p>
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
                            T
                        </b>
                        rở thành doanh nghiệp hàng đầu trong lĩnh vực Cho thuê lao động thời vụ hàng đầu tại
                        Việt Nam.
                        <br />
                        <br />
                        {/* <b
                            style={{
                                fontSize: '46.5px',
                                float: 'left',
                                lineHeight: 1,
                                padding: ' 0 3px 0 3px',
                                margin: '0 10px 0 0 ',
                                color: 'var(--primary)',
                            }}
                        >
                            Đ
                        </b> */}
                        Đồng Khởi Phát cam kết dành toàn bộ tâm huyết, sức trẻ, sự sáng tạo và kinh nghiệm vốn
                        có của mình để mang tới cho các doanh nghiệp những nhân lực chất lượng, có chuyên môn
                        cao, năng lực tốt.
                    </p>
                </div>
                <div style={{ fontSize: '15.6px', letterSpacing: '-.1px' }} ref={ct2}>
                    <p
                        className="title"
                        style={{
                            fontSize: '22px',
                            letterSpacing: '-0.3px',
                            marginBottom: '15px',
                            marginTop: '30px',
                        }}
                    >
                        <b style={{ marginRight: '5px' }} className="title">
                            2.
                        </b>{' '}
                        GIÁ TRỊ CỐT LÕI
                    </p>
                    <p
                        style={{
                            marginBottom: '10px',
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
                        hất lượng: Chúng tôi hướng tới mục tiêu chất lượng ngay từ bước đầu tiên của quy trình
                        tư vấn với khách hàng để hiểu rõ yêu cầu của họ làm thước đo theo tiêu chuẩn quốc tế,
                        chúng tôi cam kết cung cấp cho khách hàng dịch vụ Nhân sự chất lượng nhất Việt Nam.
                        <br />
                        <br />
                        {/* <b
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
                        </b> */}
                        Chuyên nghiệp: Chúng tôi vận hành dịch vụ theo quy trình chuẩn hóa, với đội ngũ nhân
                        sự được tuyển chọn và đào tạo bài bản, áp dụng nền tảng công nghệ trong công tác quản
                        trị, chúng tôi muốn khách hàng thực sự hài lòng khi sử dụng dịch vụ của chúng tôi.
                        <br />
                        <br />
                        {/* <b
                            style={{
                                fontSize: '46.5px',
                                float: 'left',
                                lineHeight: 1,
                                padding: ' 0 3px 0 3px',
                                margin: '0 10px 0 0 ',
                                color: 'var(--primary)',
                            }}
                        >
                            H
                        </b> */}
                        Hiệu quả: Khi sử dụng dịch vụ nhân sự của Đồng Khởi Phát, khách hàng sẽ có thời gian
                        để tập trung vào việc phát triển sản xuất kinh doanh, tất cả các vấn đề về nhân sự
                        chúng tôi sẽ chịu trách nhiệm từ đó mang lại giá trị gia tăng cho khách hàng.
                        <br />
                    </p>
                </div>
                <div style={{ fontSize: '15.6px', letterSpacing: '-.1px' }} ref={ct3}>
                    <p
                        className="title"
                        style={{
                            fontSize: '22px',
                            letterSpacing: '-0.3px',
                            marginBottom: '15px',
                            marginTop: '30px',
                        }}
                    >
                        <b style={{ marginRight: '5px' }} className="title">
                            3.
                        </b>{' '}
                        MỤC TIÊU
                    </p>
                    <p
                        style={{
                            marginBottom: '10px',
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
                            T
                        </b>
                        ập trung nguồn lực vào ngành nghề kinh doanh chính là tư vấn và cung ứng nguồn lào
                        động đáp ứng nhu cầu sản xuất của mọi doanh nghiệp. Phát triển quy mô hợp lý, đề cao
                        tính hiệu quả nhằm duy trì sự ổn định và từng bước tăng trưởng, chú trọng xây dựng và
                        phát triển nguồn nhân lực, lấy yếu tố con người làm trung tâm và nền tảng cho sự phát
                        triển của công ty.
                    </p>
                </div>
                <div style={{ fontSize: '15.6px', letterSpacing: '-.1px' }} ref={ct4}>
                    <p
                        className="title"
                        style={{
                            fontSize: '22px',
                            letterSpacing: '-0.3px',
                            marginBottom: '15px',
                            marginTop: '30px',
                        }}
                    >
                        <b style={{ marginRight: '5px' }} className="title">
                            4.
                        </b>{' '}
                        NGUYÊN TẮC HOẠT ĐỘNG
                    </p>
                    <p
                        style={{
                            marginBottom: '10px',
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
                            Đ
                        </b>
                        ồng Khởi Phát luôn đặt lợi ích của khách hàng lên trên hết, luôn cố gắng hết sức để
                        tìm kiếm, trau dồi, đào tạo những nhân lực chất lượng nhất. Mang tới sự hài lòng cho
                        các khách hàng cũng như doanh nghiệp.
                        <br />
                        <br />
                        {/* <b
                            style={{
                                fontSize: '46.5px',
                                float: 'left',
                                lineHeight: 1,
                                padding: ' 0 3px 0 3px',
                                margin: '0 10px 0 0 ',
                                color: 'var(--primary)',
                            }}
                        >
                            L
                        </b> */}
                        Lấy đam mê nhiệt huyết làm nguồn sức mạnh, và lấy nụ cười của khách hàng làm mục tiêu
                        theo đuổi, Đồng Khởi Phát đã và đang không ngừng hoàn thiện bản thân cho hiện tại và
                        tương lai.
                    </p>
                </div>
                <div style={{ fontSize: '15.6px', letterSpacing: '-.1px' }} ref={ct5}>
                    <p
                        className="title"
                        style={{
                            fontSize: '22px',
                            letterSpacing: '-0.3px',
                            marginBottom: '15px',
                            marginTop: '30px',
                        }}
                    >
                        <b style={{ marginRight: '5px' }} className="title">
                            5.
                        </b>{' '}
                        TRIẾT LÝ KINH DOANH
                    </p>
                    <p
                        style={{
                            marginBottom: '10px',
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
                            K
                        </b>
                        hách hàng là giá trị cơ bản của bất kỳ doanh nghiệp nào, là lý do duy nhất để doanh
                        nghiệp tồn tại và phát triển. Mang trong mình sứ mệnh là người trao cơ hội việc làm
                        cho người cần chúng tôi luôn tâm niệm hoạt động vì người lao động và đặt tiêu chí “ vì
                        quyền lợi của người lao động” để cố gắng để hoàn thiện mình và mang đến những điều tốt
                        đẹp nhất tới cho người lao động .
                        <br />
                        <br />
                        {/* <b
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
                        </b> */}
                        Chúng tôi lắng nghe, phân tích và thấu hiểu nhu cầu của từng người lao động từ đó áp
                        dụng kinh nghiệm, kỹ năng, tư duy của mình để giải quyết tối ưu những nhu cầu đó, giúp
                        chủ doanh nghiệp có được những người lao động có kỹ năng và chăm chỉ , người lao động
                        có được công việc tốt và ổn định . Mỗi khách hàng là một viên gạch xây lên giá trị của
                        công ty.
                    </p>
                </div>
            </div>
        </>
    );
}
