'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faEllipsisVertical,
    faCircleQuestion,
    faKeyboard,
    faLanguage,
    faCartShopping,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import Search from '@/components/Search';
import Button from '@/components/Button';
import Menu from '@/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'Language',
        children: {
            title: 'Language',
            data: [
                { code: 'en', title: 'English' },
                {
                    code: 'vi',
                    title: 'Việt Nam',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard Shortcuts',
    },
];

const NAVBAR_ITEMS = [
    {
        tittle: 'Showcase',
        to: '/showcase',
    },
    {
        tittle: 'Docs',
        to: '/docs',
    },
    {
        tittle: 'Products',
        to: '/product',
    },
    {
        tittle: 'Analytics',
        to: '/analytics',
    },
    {
        tittle: 'Template',
        to: '/template',
    },
    {
        tittle: 'Enterprise',
        to: '/enterprise',
    },
];

function Header() {
    const [isLogin, setIsLogin] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);

    // useEffect(() => {
    //     const curPath = window.location.pathname.split('/')[1];
    //     const activeItem = NAVBAR_ITEMS.findIndex((item) => item.section === curPath);
    //     setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    // }, [location]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('navbar')}>
                <Link href={'/'} className={cx('logo')}>
                    Ecommerce
                </Link>
                {NAVBAR_ITEMS.map((item, index) => (
                    <Link href={item.to} key={index}>
                        {/* <div className={cx(`navbar-option ${activeIndex === index ? 'active' : ''}`)}> */}
                        <div className={cx('navbar-option')}>{item.tittle}</div>
                        {/* </div> */}
                    </Link>
                ))}

                <div className={cx('search')}>
                    <Search />
                </div>

                {!!isLogin ? (
                    <div className={cx('action')}>
                        <Button primary href={'/login'}>
                            <FontAwesomeIcon icon={faCartShopping} />
                        </Button>

                        <Button className={cx('sing-up')} href={'/signup'} leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                            Sign up
                        </Button>

                        <Menu items={MENU_ITEMS}>
                            <button className={cx('menu-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        </Menu>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default Header;
