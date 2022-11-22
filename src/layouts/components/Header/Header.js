import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
// import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import config from '~/config';

import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
// import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';

// import AccountItem from '~/components/AccountItem';
import { Inbox, MessagesIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';

import Search from '../Search';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    type: 'language',
                    code: 'Ja',
                    title: 'Japanese',
                },
                {
                    type: 'language',
                    code: 'Fr',
                    title: 'France',
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
        title: 'Keyboard shortcuts',
    },
];
function Header() {
    const currentUser = true;

    //logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                break;
            default:
        }
    };
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Logout',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={(0, 200)} content="Upload Video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={(0, 200)} content="Messages" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessagesIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={(0, 200)} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <Inbox />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-1/264828375_3019175918334968_1227467617213764545_n.jpg?stp=dst-jpg_p100x100&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=7a87EUIEp0YAX-IwGoC&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfAbF9k8ErtZfsCQqyf-09nH5V2QoNFsANOAWK6TOFu3Eg&oe=636F2478"
                                alt="NVA"
                                // fallback="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-1/311010658_1609222699493835_8262739481538743087_n.jpg?stp=dst-jpg_p100x100&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=N8WxiWKB-k4AX_xQG-F&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfBtA5JCPGic785SHMFOkiReV8Tv2A04_-XUr3XGc1CYsQ&oe=6371E82D"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}
export default Header;
