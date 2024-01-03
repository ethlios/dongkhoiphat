import * as React from 'react';

export interface IAppProps {}

export default function Content2(props: IAppProps) {
    return (
        <div
            style={{
                width: '100%',
                marginTop: '20px',
            }}
        >
            <p
                style={{
                    width: '75%',
                    fontSize: '21.8px',
                    fontWeight: '600',
                    letterSpacing: '-1px',
                }}
            >
                Bằng tất cả những gì mình có, Đồng Khởi Phát hứa hẹn sẽ mang đến cho quý khách hàng những trải
                nghiệm về dịch vụ chưa từng có. Lấy đam mê nhiệt huyết làm nguồn sức mạnh, và lấy nụ cười của
                khách hàng làm mục tiêu theo đuổi, Đồng Khởi Phát đã và đang không ngừng hoàn thiện bản thân
                cho hiện tại và tương lai.{' '}
                <b
                    style={{
                        fontWeight: '600',
                        color: 'rgba(0,0,0,0.5)',
                    }}
                >
                    Một tập thể vững mạnh không có nghĩa là một tập thể xuất sắc hay một cá nhân vượt trội, mà
                    nó còn được khẳng định bằng việc đã mang lại được gì cho cộng đồng!{' '}
                </b>
            </p>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '130px',
                    marginTop: '15px',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '90px',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            minWidth: '125px',
                        }}
                    >
                        <b
                            style={{
                                fontSize: '90px',
                                fontWeight: '700',
                                color: 'var(--primary)',
                            }}
                        >
                            3+
                        </b>
                        <p
                            style={{
                                fontSize: '14px',
                                textTransform: 'uppercase',
                                fontWeight: '500',
                                letterSpacing: '-.5px',
                                position: 'relative',
                                bottom: '10px',
                            }}
                        >
                            Năm hoạt động
                        </p>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <b
                            style={{
                                fontSize: '90px',
                                fontWeight: '700',
                                color: 'var(--primary)',
                            }}
                        >
                            29+
                        </b>
                        <p
                            style={{
                                fontSize: '14px',
                                textTransform: 'uppercase',
                                fontWeight: '500',
                                letterSpacing: '-.5px',
                                position: 'relative',
                                bottom: '10px',
                            }}
                        >
                            Đối tác kinh doanh
                        </p>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <b
                            style={{
                                fontSize: '90px',
                                fontWeight: '700',
                                color: 'var(--primary)',
                            }}
                        >
                            199+
                        </b>
                        <p
                            style={{
                                fontSize: '14px',
                                textTransform: 'uppercase',
                                fontWeight: '500',
                                letterSpacing: '-.5px',
                                position: 'relative',
                                bottom: '10px',
                            }}
                        >
                            Tổng dự án hoàn thành
                        </p>
                    </div>
                </div>
                <div
                    style={{
                        fontSize: '13px',
                        fontWeight: '500',
                        letterSpacing: '-.5px',
                        color: 'rgba(0,0,0,0.5)',
                    }}
                >
                    Chúng tôi đảm bảo với quý khách hàng rằng, mọi loại hình dịch vụ mà chúng tôi cung cấp,
                    nhằm mang lại sự hài lòng của quý khách hàng. Đây không chỉ là một cảm kết mà còn phản ánh
                    sự cống hiến sâu sắc của chúng tôi nhằm đảm bảo sự hài lòng của quý khách hàng là ưu tiên
                    hàng đầu của chúng tôi.
                </div>
            </div>
        </div>
    );
}
