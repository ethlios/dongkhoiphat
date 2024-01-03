'use client';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { MobileTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import Link from 'next/link';
import { useState } from 'react';

export interface IAppProps {}

const day = dayjs();

export default function Appointment(props: IAppProps) {
    const [date, setDate] = useState<any>(day ?? '');
    const [time, setTime] = useState<any>(day ?? '');
    const [service, setService] = useState<number>(10);

    return (
        <div
            style={{
                width: '74%',
                minHeight: '180px',
                marginTop: '40px',
                borderBottom: 'solid 2px var(--secondary)',
                paddingBottom: '25px',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    textTransform: 'uppercase',
                    fontWeight: '700',
                    fontSize: '15px',
                }}
            >
                Đặt cuộc hẹn
            </div>
            <div
                style={{
                    backgroundColor: 'var(--secondary)',
                    width: '200px',
                    height: '3.3px',
                    margin: '6px 0',
                }}
            />
            <div
                style={{
                    marginTop: '12px',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '15px',
                }}
            >
                <FormControl sx={{ m: 1, minWidth: 230, position: 'relative', top: '3.5px' }}>
                    <InputLabel id="demo-simple-select-helper-label">Dịch vụ</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={service}
                        label="Dịch vụ"
                        onChange={(e: any) => setService(e.target.value)}
                    >
                        <MenuItem value={10}>Bốc vác</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker label="Chọn ngày" value={date} onChange={(value) => setDate(value)} />
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
                <div
                    style={{
                        backgroundColor: 'var(--primary)',
                        color: '#fff',
                        borderRadius: '10px',
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: '8px',
                    }}
                    className="opacity"
                >
                    <Link href={'/lienhe'}>
                        <ArrowRightAltIcon />
                    </Link>
                </div>
            </div>
            <div
                style={{
                    borderRadius: '10px',
                    width: '200px',
                    padding: '14px 17px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '14px',
                    marginTop: '16px',
                    letterSpacing: '-0.5px',
                    border: 'solid 1.5px var(--primary)',
                }}
                className="opacity"
            >
                <Link
                    href={'/lienhe'}
                    style={{
                        fontWeight: '600',
                    }}
                >
                    THÔNG TIN LIÊN HỆ
                </Link>
            </div>
        </div>
    );
}
