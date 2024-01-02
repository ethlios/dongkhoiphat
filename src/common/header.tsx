import * as React from 'react';
import styles from './common.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

export interface HeaderProps {}

export default function Header(props: HeaderProps) {
    return (
        <div
            style={{
                width: '100vw',
                height: '60px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: 'solid 1.5px var(--primary)',
                padding: '0 30px',
            }}
        >
            <div
                style={{
                    fontWeight: '700',
                    fontSize: '25px',
                    color: 'var(--primary)',
                    letterSpacing: '.5px',
                }}
            >
                DKP
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '30px',
                }}
            >
                <ul
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '20px',
                        fontSize: '15px',
                        transition: ' all ease 0.5s',
                    }}
                    className={cx('link')}
                >
                    <li>Trang chủ</li>
                    <li>Giới thiệu</li>
                    <li>Dịch vụ</li>
                    <li>Tin tức</li>
                    <li>Liên hệ</li>
                </ul>
            </div>
        </div>
    );
}
