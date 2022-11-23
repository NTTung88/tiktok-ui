import PropTypes from 'prop-types';

import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview';
const cx = classNames.bind(styles);

function AccountItem() {
    const rederPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={rederPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-1/264828375_3019175918334968_1227467617213764545_n.jpg?stp=dst-jpg_p100x100&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=7a87EUIEp0YAX-IwGoC&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfAbF9k8ErtZfsCQqyf-09nH5V2QoNFsANOAWK6TOFu3Eg&oe=636F2478"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>Bao top</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Bảo chóp</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;
