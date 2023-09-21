//propTypes
import PropTypes from 'prop-types';
//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
//style
import './SectionProfile.scss';

const SectionProfile = ({ idContainer, idBtn }) => {
	SectionProfile.propTypes = {
		idContainer: PropTypes.string.isRequired,
		idBtn: PropTypes.string.isRequired,
	};
	return (
		<>
			<div className='card__section profile ' id={idContainer}>
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
				<button className='profile__share share' type='button' id={idBtn}>
					<FontAwesomeIcon icon={faShare} />
				</button>
			</div>
		</>
	);
};

export default SectionProfile;
