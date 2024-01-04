import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import CallIcon from '@mui/icons-material/Call';
import HomeIcon from '@mui/icons-material/Home';
import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    IconButton,
    InputAdornment,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
} from '@mui/material';
import { DatePicker, LocalizationProvider, MobileTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import classNames from 'classnames/bind';
import dayjs from 'dayjs';
import { useRef, useState } from 'react';
import styles from './lienhe.module.scss';

const cx = classNames.bind(styles);

export interface IFormContactProps {}

const day = dayjs();

export default function FormContact(props: IFormContactProps) {
    const [date, setDate] = useState<any>(day ?? '');
    const [time, setTime] = useState<any>(day ?? '');
    const [service, setService] = useState<any>('');
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const validateEmailRegex = /^\S+@\S+\.\S+$/;
    const isPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    const form = useRef<any>('');

    const handleSubmit = (e: any) => {
        e.preventDefault();

        console.log({
            data: {
                date: date.format('DD/MM/YYYY'),
                time: time.format('HH:mm A'),
                service,
                name,
                email,
                phone,
                address,
                message,
            },
        });
    };

    const handleReset = () => {
        setDate(day);
        setTime(day);
        setService('');
        setName('');
        setEmail('');
        setPhone('');
        setAddress('');
        setMessage('');
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
                            backgroundColor: '#e6e6e6',
                            display: 'flex',
                            flexDirection: 'row',
                            height: '6px',
                        }}
                    >
                        {name.length >= 2 && (
                            <div
                                style={{
                                    width: 'calc(100% / 7)',
                                    backgroundColor: 'var(--primary)',
                                    height: '6px',
                                }}
                            ></div>
                        )}
                        {validateEmailRegex.test(email) && (
                            <div
                                style={{
                                    width: 'calc(100% / 7)',
                                    backgroundColor: 'var(--primary)',
                                    height: '6px',
                                }}
                            ></div>
                        )}
                        {isPhone.test(phone) && (
                            <div
                                style={{
                                    width: 'calc(100% / 7)',
                                    backgroundColor: 'var(--primary)',
                                    height: '6px',
                                }}
                            ></div>
                        )}
                        {address.length > 8 && (
                            <div
                                style={{
                                    width: 'calc(100% / 7)',
                                    backgroundColor: 'var(--primary)',
                                    height: '6px',
                                }}
                            ></div>
                        )}
                        {!!service && (
                            <div
                                style={{
                                    width: 'calc(100% / 7)',
                                    backgroundColor: 'var(--primary)',
                                    height: '6px',
                                }}
                            ></div>
                        )}
                        {!!date && (
                            <div
                                style={{
                                    width: 'calc(100% / 7)',
                                    backgroundColor: 'var(--primary)',
                                    height: '6px',
                                }}
                            ></div>
                        )}
                        {!!time && (
                            <div
                                style={{
                                    width: 'calc(100% / 7)',
                                    backgroundColor: 'var(--primary)',
                                    height: '6px',
                                }}
                            ></div>
                        )}
                    </div>
                </div>
                <div
                    style={{
                        width: '50%',
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
                    <progress max={100} value={0} />
                </div>
            </div>
            <div>
                <form
                    style={{
                        width: '100%',
                    }}
                    onSubmit={handleSubmit}
                    ref={form}
                >
                    <p
                        style={{
                            fontSize: '12.7px',
                            fontWeight: '500',
                            letterSpacing: '-.5px',
                            color: 'rgba(0,0,0,0.5)',
                            marginBottom: '10px',
                        }}
                    >
                        Thông tin cá nhân!
                    </p>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '30px',
                            marginBottom: '20px',
                        }}
                    >
                        <FormControl sx={{ m: 1, width: '50%' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Tên</InputLabel>
                            <OutlinedInput
                                type="text"
                                color="primary"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            // onClick={handleClickShowPassword}
                                            // onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            disabled
                                        >
                                            <AssignmentIndIcon sx={{ color: 'rgba(0,0,0,0.6)' }} />
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Tên"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                                required
                            />
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '50%' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
                            <OutlinedInput
                                type="email"
                                color="primary"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            // onClick={handleClickShowPassword}
                                            // onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            disabled
                                        >
                                            <AlternateEmailIcon sx={{ color: 'rgba(0,0,0,0.6)' }} />
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </FormControl>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '30px',
                        }}
                    >
                        <FormControl sx={{ width: '50%', paddingRight: '15px' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Số điện thoại</InputLabel>
                            <OutlinedInput
                                type="text"
                                color="primary"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            // onClick={handleClickShowPassword}
                                            // onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            disabled
                                        >
                                            <CallIcon sx={{ color: 'rgba(0,0,0,0.6)' }} />
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Số điện thoại"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </FormControl>
                    </div>
                    <p
                        style={{
                            fontSize: '12.7px',
                            fontWeight: '500',
                            letterSpacing: '-.5px',
                            color: 'rgba(0,0,0,0.5)',
                            marginBottom: '10px',
                            marginTop: '30px',
                        }}
                    >
                        Thông tin cuộc hẹn!
                    </p>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '30px',
                            marginBottom: '20px',
                        }}
                    >
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker
                                    label="Chọn ngày"
                                    value={date}
                                    onChange={(value) => setDate(value)}
                                    format="DD/MM/YYYY"
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['MobileTimePicker']}>
                                <MobileTimePicker
                                    label="Chọn giờ"
                                    value={time}
                                    onChange={(value) => setTime(value)}
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '30px',
                            marginBottom: '20px',
                        }}
                    >
                        <FormControl sx={{ width: '100%' }}>
                            <InputLabel id="demo-simple-select-helper-label">Dịch vụ</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={service}
                                label="Dịch vụ"
                                onChange={(e: any) => setService(e.target.value)}
                                required
                            >
                                <MenuItem value={10}>Bốc vác</MenuItem>
                                <MenuItem value={20}>Chuyển nhà</MenuItem>
                                <MenuItem value={30}>Cung ứng nhân lực</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <FormControl sx={{ width: '100%' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Địa chỉ</InputLabel>
                        <OutlinedInput
                            type="text"
                            color="primary"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        // onClick={handleClickShowPassword}
                                        // onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        disabled
                                    >
                                        <HomeIcon sx={{ color: 'rgba(0,0,0,0.6)' }} />
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Địa chỉ"
                            value={address}
                            onChange={(e) => {
                                setAddress(e.target.value);
                            }}
                            required
                        />
                    </FormControl>
                    <textarea
                        style={{
                            width: '100%',
                            height: '140px',
                        }}
                        className={cx('textarea')}
                        placeholder="Ghi chú thêm"
                        onChange={(e) => {
                            setMessage(e.target.value);
                        }}
                        value={message}
                    />
                    <FormControlLabel
                        required
                        control={<Checkbox />}
                        label="Chúng tôi cam kết thông tin của bạn sẽ được bảo mật một cách trọn vẹn. Việc bạn chọn vào ô này cũng đồng nghĩa với việc chấp thuận các cam kết của chúng tôi!"
                        sx={{
                            marginTop: '10px',
                            fontSize: '10px',
                        }}
                    />
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
                            onClick={handleReset}
                        >
                            Làm lại
                        </Button>
                        <Button
                            variant="contained"
                            style={{
                                fontSize: '14px',
                                fontWeight: '600',
                            }}
                            type="submit"
                        >
                            Tiếp tục
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
