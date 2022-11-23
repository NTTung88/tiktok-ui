import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-1/264828375_3019175918334968_1227467617213764545_n.jpg?stp=dst-jpg_p100x100&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=7a87EUIEp0YAX-IwGoC&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfAbF9k8ErtZfsCQqyf-09nH5V2QoNFsANOAWK6TOFu3Eg&oe=636F2478"
                    alt="BT"
                />

                <Button className={cx('follow-btn')} primary>
                    Following
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>Bao top</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Bảo chóp</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <strong className={cx('label')}>Follover </strong>
                    <strong className={cx('value')}>8.2M </strong>
                    <strong className={cx('label')}>Like</strong>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
