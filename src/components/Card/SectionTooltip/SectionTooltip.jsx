//propTypes
import PropTypes from 'prop-types';
//style
import './SectionTooltip.scss';
//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';

const SectionTooltip = ({ idContainer, idBtn }) => {
	SectionTooltip.propTypes = {
		idContainer: PropTypes.string.isRequired,
		idBtn: PropTypes.string.isRequired,
	};
	return (
		<>
			<section className='card__section tooltips disable' id={idContainer}>
				<div className='profile__container'>
					<figure>
						<img
							className='profile__img'
							src='/images/avatar-michelle.jpg'
							alt='profile'
						/>
					</figure>
					<div className='profile__user text__user'>
						<h2 className='text__title'>Michelle Appleton</h2>
						<span className='text__content'>28 Jun 2020</span>
					</div>
				</div>
				<div className='tooltips__container tooltip__box' id='toolTipDesktop'>
					<span className='tooltips__span text__content'>S H A R E</span>
					<FontAwesomeIcon className='icon--pointer' icon={faSquareFacebook} />
					<FontAwesomeIcon className='icon--pointer' icon={faTwitter} />
					<FontAwesomeIcon className='icon--pointer' icon={faPinterest} />
				</div>
				<button className='tooltips__share' type='button' id={idBtn}>
					<FontAwesomeIcon icon={faShare} />
				</button>
			</section>
		</>
	);
};

export default SectionTooltip;