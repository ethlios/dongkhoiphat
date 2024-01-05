import React, { useRef, useState } from 'react';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import CallIcon from '@mui/icons-material/Call';
import HomeIcon from '@mui/icons-material/Home';
import ShieldIcon from '@mui/icons-material/Shield';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import HandshakeIcon from '@mui/icons-material/Handshake';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import { Button } from '@mui/material';
import emailjs from '@emailjs/browser';
import DialogSuccess from './dialogSuccess';
import logo from '../../../../public/img/logo.png';
import Image from 'next/image';

export interface IAppProps {
    data: any;
    setOpenCotent: any;
    setData: any;
}

export default function Check({ setOpenCotent, data, setData }: IAppProps) {
    const formRef = useRef<any>();
    const [sendEmailSuccess, setSendEmailSuccess] = useState<boolean>(false);
    const mainRef = useRef<any>();

    const handleSubmit = () => {
        emailjs.sendForm('service_pbfmz7e', 'template_eecmczn', formRef.current, 'q03ZrSYKH_SFOODZt').then(
            (result) => {
                setSendEmailSuccess(true);
            },
            (error) => {
                setSendEmailSuccess(false);
            },
        );

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div
            style={{
                display: 'flex',
                width: '70%',
                padding: '0 60px',
                flexDirection: 'column',
                gap: '15px',
                userSelect: 'none',
            }}
        >
            {sendEmailSuccess && (
                <DialogSuccess setData={setData} setOpenCotent={setOpenCotent} item={mainRef.current} />
            )}
            <div
                style={{
                    display: 'flex',
                    // justifyContent: 'center',
                    width: '100%',
                    gap: '50px',
                }}
            >
                <div
                    style={{
                        width: '50%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                    }}
                >
                    <p
                        style={{
                            fontWeight: '600',
                            textTransform: 'uppercase',
                            letterSpacing: '-1px',
                            fontSize: '15px',
                        }}
                    >
                        <b
                            style={{
                                fontWeight: '600',
                                marginRight: '5px',
                            }}
                        >
                            1.
                        </b>{' '}
                        Nhập thông tin
                    </p>
                    <div
                        style={{
                            width: '100%',
                            borderRadius: '5px',
                            overflow: 'hidden',
                            backgroundColor: 'var(--primary)',
                            display: 'flex',
                            flexDirection: 'row',
                            height: '6px',
                        }}
                    ></div>
                </div>
                <div
                    style={{
                        width: '50%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                    }}
                >
                    <p
                        style={{
                            fontWeight: '600',
                            textTransform: 'uppercase',
                            letterSpacing: '-1px',
                            fontSize: '15px',
                        }}
                    >
                        <b
                            style={{
                                fontWeight: '600',
                                marginRight: '5px',
                            }}
                        >
                            2.
                        </b>{' '}
                        Xác nhận thông tin
                    </p>
                    <div
                        style={{
                            width: '100%',
                            borderRadius: '5px',
                            overflow: 'hidden',
                            backgroundColor: '#e6e6e6',
                            display: 'flex',
                            flexDirection: 'row',
                            height: '6px',
                        }}
                    >
                        <div
                            style={{
                                width: '50%',
                                height: '100%',
                                backgroundColor: 'var(--primary)',
                            }}
                        ></div>
                        {sendEmailSuccess && (
                            <div
                                style={{
                                    width: '50%',
                                    height: '100%',
                                    backgroundColor: 'var(--primary)',
                                }}
                            ></div>
                        )}
                    </div>
                </div>
            </div>
            <div ref={mainRef}>
                <div
                    style={{
                        display: 'none',
                        marginBottom: '20px',
                        width: '104px',
                        height: '42px',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundImage: `url(${logo.src})`,
                    }}
                />

                <p
                    style={{
                        fontSize: '15.5px',
                        fontWeight: '600',
                        letterSpacing: '-.5px',
                        marginBottom: '10px',
                        marginTop: '10px',
                    }}
                >
                    Thông tin cá nhân!
                </p>
                <div
                    style={{
                        display: 'flex',
                        width: '100%',
                        borderRadius: '20px',
                        border: 'solid 2px rgba(0,0,0,0.2)',
                        alignItems: 'center',
                        gap: '30px',
                        flexDirection: 'column',
                        padding: '30px ',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '30px',
                            width: '100%',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: '8px',
                                width: '50%',
                                alignItems: 'center',
                            }}
                        >
                            <AssignmentIndIcon
                                style={{
                                    color: 'rgba(0,0,0,0.6)',
                                }}
                            />
                            <p
                                style={{
                                    fontSize: '15px',
                                    letterSpacing: '-.2px',
                                    fontWeight: '600',
                                }}
                            >
                                {data.name}
                            </p>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: '8px',
                                width: '50%',
                                alignItems: 'center',
                            }}
                        >
                            <AlternateEmailIcon
                                style={{
                                    color: 'rgba(0,0,0,0.6)',
                                }}
                            />
                            <p
                                style={{
                                    fontSize: '15px',
                                    letterSpacing: '-.2px',
                                    fontWeight: '600',
                                }}
                            >
                                {data.email}
                            </p>
                        </div>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '8px',
                            width: '100%',
                            alignItems: 'center',
                        }}
                    >
                        <CallIcon
                            style={{
                                color: 'rgba(0,0,0,0.6)',
                            }}
                        />
                        <p
                            style={{
                                fontSize: '15px',
                                letterSpacing: '-.2px',
                                fontWeight: '600',
                            }}
                        >
                            {data.phone}
                        </p>
                    </div>
                </div>
                <div
                    style={{
                        fontSize: '12.7px',
                        fontWeight: '500',
                        letterSpacing: '-.5px',
                        color: 'rgba(0,0,0,0.5)',
                        marginBottom: '10px',
                        marginTop: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                    }}
                >
                    <ShieldIcon />{' '}
                    <p>Thông tin cá nhân của bạn sẽ được chúng tôi bảo mật một cách hết sức cẩn thận!</p>
                </div>
                <p
                    style={{
                        fontSize: '15.5px',
                        fontWeight: '600',
                        letterSpacing: '-.5px',
                        marginBottom: '10px',
                        marginTop: '30px',
                    }}
                >
                    Thông tin cuộc hẹn!
                </p>
                <div
                    style={{
                        display: 'flex',
                        width: '100%',
                        borderRadius: '20px',
                        border: 'solid 2px rgba(0,0,0,0.2)',
                        alignItems: 'center',
                        gap: '30px',
                        flexDirection: 'column',
                        padding: '30px ',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '30px',
                            width: '100%',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: '8px',
                                width: '50%',
                                alignItems: 'center',
                            }}
                        >
                            <AccessTimeIcon
                                style={{
                                    color: 'rgba(0,0,0,0.6)',
                                }}
                            />
                            <p
                                style={{
                                    fontSize: '15px',
                                    letterSpacing: '-.2px',
                                    fontWeight: '600',
                                }}
                            >
                                {data.time.format('HH:mm A')}, {data.date.format('DD/MM/YYYY')}
                            </p>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: '8px',
                                width: '50%',
                                alignItems: 'center',
                            }}
                        >
                            <SettingsSuggestIcon
                                style={{
                                    color: 'rgba(0,0,0,0.6)',
                                }}
                            />
                            <p
                                style={{
                                    fontSize: '15px',
                                    letterSpacing: '-.2px',
                                    fontWeight: '600',
                                }}
                            >
                                {data.service}
                            </p>
                        </div>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '8px',
                            width: '100%',
                            alignItems: 'center',
                        }}
                    >
                        <HomeIcon
                            style={{
                                color: 'rgba(0,0,0,0.6)',
                            }}
                        />
                        <p
                            style={{
                                fontSize: '15px',
                                letterSpacing: '-.2px',
                                fontWeight: '600',
                            }}
                        >
                            {data.address}
                        </p>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '8px',
                            width: '100%',
                        }}
                    >
                        <StickyNote2Icon
                            style={{
                                color: 'rgba(0,0,0,0.6)',
                                position: 'relative',
                                top: '2px',
                            }}
                        />
                        <p
                            style={{
                                fontSize: '15px',
                                letterSpacing: '-.2px',
                                fontWeight: '600',
                            }}
                        >
                            {data.message ? data.message : 'Không có ghi chú nào được biên soạn!'}
                        </p>
                    </div>
                </div>
                <div
                    style={{
                        fontSize: '12.7px',
                        fontWeight: '500',
                        letterSpacing: '-.5px',
                        color: 'rgba(0,0,0,0.5)',
                        marginBottom: '10px',
                        marginTop: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                    }}
                >
                    <HandshakeIcon /> <p>Thông tin của cuộc hẹn là thỏa thuận chung giữa chúng ta!</p>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: '20px',
                    }}
                >
                    <Button
                        variant="outlined"
                        style={{
                            fontSize: '14px',
                            fontWeight: '600',
                            border: '2px solid',
                        }}
                        onClick={() => setOpenCotent(false)}
                    >
                        Chỉnh sửa
                    </Button>
                    <Button
                        variant="contained"
                        style={{
                            fontSize: '14px',
                            fontWeight: '600',
                        }}
                        onClick={handleSubmit}
                    >
                        Gửi thông tin
                    </Button>
                </div>
                <form
                    ref={formRef}
                    style={{
                        display: 'none',
                    }}
                >
                    <input type="text" defaultValue={data.name} name="Name" />
                    <input type="text" defaultValue={data.email} name="Email" />
                    <input type="text" defaultValue={data.phone} name="Phone" />
                    <input
                        type="text"
                        defaultValue={`${data.time.format('HH:mm A')}, ${data.date.format('DD/MM/YYYY')}`}
                        name="Time"
                    />
                    <input type="text" defaultValue={data.service} name="Service" />
                    <input type="text" defaultValue={data.address} name="Address" />
                    <textarea defaultValue={data.message} name="Message" />
                </form>
            </div>
        </div>
    );
}
