'use client';

import Diversity2Icon from '@mui/icons-material/Diversity2';
import EastIcon from '@mui/icons-material/East';
import MoreIcon from '@mui/icons-material/More';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import WifiTetheringIcon from '@mui/icons-material/WifiTethering';
import Tippy from '@tippyjs/react';
import { useState } from 'react';

export interface IAppProps {}

export default function HomeContent3(props: IAppProps) {
    const [addContent, setAddContent] = useState<boolean>(false);

    // useEffect(() => {
    //     if (addContent) {
    //         setTimeout(() => {
    //             setAddContent(false);
    //         }, 4000);
    //     } else {
    //         setTimeout(() => {
    //             setAddContent(true);
    //         }, 4000);
    //     }
    // }, [addContent]);

    return (
        <div
            style={{
                width: '100%',
                marginTop: '70px',
            }}
        >
            <p
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    fontSize: '25px',
                    fontWeight: '700',
                    letterSpacing: '-.5px',
                    textTransform: 'uppercase',
                    marginBottom: '35px',
                }}
            >
                Vì sao chọn chúng tôi?
            </p>
            <div
                style={{
                    display: 'flex',
                    gap: '30px',
                    transition: 'all ease .5s',
                    userSelect: 'none',
                    position: 'relative',
                }}
            >
                {!addContent && (
                    <div
                        style={{
                            backgroundColor: '#ededed',
                            borderRadius: '10px',
                            width: '100%',
                            height: '250px',
                            padding: '30px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            position: 'relative',
                            // boxShadow: 'rgba(0, 0, 0, 0.2) 0px 5px 15px',
                        }}
                        className="cpmount"
                    >
                        <VerifiedUserIcon style={{ fontSize: '80px', color: 'var(--primary)' }} />
                        <p
                            style={{
                                fontSize: '15px',
                                marginTop: '10px',
                                fontWeight: '600',
                                textTransform: 'uppercase',
                                letterSpacing: '-.5px',
                            }}
                        >
                            Uy tín & chuyên nghiệp!
                        </p>
                        <div
                            style={{
                                position: 'absolute',
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                backgroundColor: '#fff',
                                bottom: '-10px',
                                right: '-10px',
                            }}
                        ></div>
                        <Tippy content="Chất lượng dịch vụ, nụ cười khách hàng là giá trị cốt lõi của chúng tôi.">
                            <div
                                style={{
                                    position: 'absolute',
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    backgroundColor: 'var(--primary)',
                                    bottom: '0',
                                    right: '0',
                                    display: 'flex',
                                    color: '#fff',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    cursor: 'poniter',
                                }}
                                className="opacity"
                            >
                                <MoreIcon
                                    style={{
                                        fontSize: '18px',
                                    }}
                                />
                            </div>
                        </Tippy>
                    </div>
                )}
                <div
                    style={{
                        backgroundColor: '#ededed',
                        borderRadius: '10px',
                        width: '100%',
                        height: '250px',
                        padding: '30px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        position: 'relative',
                    }}
                >
                    <WifiTetheringIcon style={{ fontSize: '80px', color: 'var(--primary)' }} />
                    <p
                        style={{
                            fontSize: '15px',
                            marginTop: '10px',
                            fontWeight: '600',
                            textTransform: 'uppercase',
                            letterSpacing: '-.5px',
                        }}
                    >
                        Hỗ trợ nhanh chóng
                    </p>
                    <div
                        style={{
                            position: 'absolute',
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            backgroundColor: '#fff',
                            bottom: '-10px',
                            right: '-10px',
                        }}
                    ></div>
                    <Tippy content="Cung cấp những giải pháp tư vấn, đào tạo nhân sự và hệ thống một cách chuyên nghiệp, hiệu quả, gia tăng lợi.">
                        <div
                            style={{
                                position: 'absolute',
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                backgroundColor: 'var(--primary)',
                                bottom: '0',
                                right: '0',
                                display: 'flex',
                                color: '#fff',
                                justifyContent: 'center',
                                alignItems: 'center',
                                cursor: 'poniter',
                            }}
                            className="opacity"
                        >
                            <MoreIcon
                                style={{
                                    fontSize: '18px',
                                }}
                            />
                        </div>
                    </Tippy>
                </div>
                <div
                    style={{
                        backgroundColor: '#ededed',
                        borderRadius: '10px',
                        width: '100%',
                        height: '250px',
                        padding: '30px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        position: 'relative',
                    }}
                >
                    <SupportAgentIcon style={{ fontSize: '80px', color: 'var(--primary)' }} />
                    <p
                        style={{
                            fontSize: '15px',
                            marginTop: '10px',
                            fontWeight: '600',
                            textTransform: 'uppercase',
                            letterSpacing: '-.5px',
                        }}
                    >
                        Miễn phí tư vấn 24/7
                    </p>
                    <div
                        style={{
                            position: 'absolute',
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            backgroundColor: '#fff',
                            bottom: '-10px',
                            right: '-10px',
                        }}
                    ></div>
                    <Tippy content="MIỄN PHÍ 100% phí tư vấn cho mọi dịch vụ nhân sự. Hỗ trợ liên tục 24/7, quy trình nhanh chóng và chuyên nghiệp.">
                        <div
                            style={{
                                position: 'absolute',
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                backgroundColor: 'var(--primary)',
                                bottom: '0',
                                right: '0',
                                display: 'flex',
                                color: '#fff',
                                justifyContent: 'center',
                                alignItems: 'center',
                                cursor: 'poniter',
                            }}
                            className="opacity"
                        >
                            <MoreIcon
                                style={{
                                    fontSize: '18px',
                                }}
                            />
                        </div>
                    </Tippy>
                </div>
                {addContent && (
                    <div
                        style={{
                            backgroundColor: '#ededed',
                            borderRadius: '10px',
                            width: '100%',
                            height: '250px',
                            padding: '30px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            position: 'relative',
                            // boxShadow: 'rgba(0, 0, 0, 0.2) 0px 5px 15px',
                        }}
                        className="cpmount"
                    >
                        <Diversity2Icon style={{ fontSize: '80px', color: 'var(--primary)' }} />
                        <p
                            style={{
                                fontSize: '15px',
                                marginTop: '10px',
                                fontWeight: '600',
                                textTransform: 'uppercase',
                                letterSpacing: '-.5px',
                            }}
                        >
                            Nhân lực dồi dào
                        </p>
                        <div
                            style={{
                                position: 'absolute',
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                backgroundColor: '#fff',
                                bottom: '-10px',
                                right: '-10px',
                            }}
                        ></div>
                        <Tippy content="Cung cấp nguồn lực phục vụ nhu cầu hoạt động sản xuất, kinh doanh của đối tác.">
                            <div
                                style={{
                                    position: 'absolute',
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    backgroundColor: 'var(--primary)',
                                    bottom: '0',
                                    right: '0',
                                    display: 'flex',
                                    color: '#fff',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    cursor: 'poniter',
                                }}
                                className="opacity"
                            >
                                <MoreIcon
                                    style={{
                                        fontSize: '18px',
                                    }}
                                />
                            </div>
                        </Tippy>
                    </div>
                )}
                <div
                    style={{
                        position: 'absolute',
                        top: '0px',
                        bottom: '0px',
                        left: '-20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <button
                        style={{
                            display: 'flex',
                            border: 'solid 1.5px rgba(0,0,0,0.4)',
                            padding: '5px 10px',
                            borderRadius: '10px',
                            opacity: !addContent ? 0.4 : 1,
                            transition: 'all ease .5s',
                        }}
                        onClick={() => setAddContent(false)}
                        className="opacity"
                        disabled={!addContent}
                    >
                        <EastIcon
                            style={{
                                rotate: '180deg',
                            }}
                        />
                    </button>
                </div>
                <div
                    style={{
                        position: 'absolute',
                        top: '0px',
                        bottom: '0px',
                        right: '-20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <button
                        style={{
                            display: 'flex',
                            border: 'solid 1.5px rgba(0,0,0,0.4)',
                            padding: '5px 10px',
                            borderRadius: '10px',
                            opacity: addContent ? 0.4 : 1,
                            transition: 'all ease .5s',
                        }}
                        onClick={() => setAddContent(true)}
                        className="opacity"
                        disabled={addContent}
                    >
                        <EastIcon />
                    </button>
                </div>
            </div>
        </div>
    );
}
