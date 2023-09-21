//propTypes
import PropTypes from 'prop-types';
//style
import './SectionActions.scss';
//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';

const SectionActions = ({ idContainer, idBtn }) => {
	SectionActions.propTypes = {
		idContainer: PropTypes.string.isRequired,
		idBtn: PropTypes.string.isRequired,
	};
	return (
		<>
			<div className='card__section actions disable' id={idContainer}>
				<div className='actions__container'>
					<span className='actions__span text__content'>S H A R E</span>
					<FontAwesomeIcon className='icon--pointer' icon={faSquareFacebook} />
					<FontAwesomeIcon className='icon--pointer' icon={faTwitter} />
					<FontAwesomeIcon className='icon--pointer' icon={faPinterest} />
				</div>
				<button className='actions__share' type='button' id={idBtn}>
					<FontAwesomeIcon icon={faShare} />
				</button>
			</div>
		</>
	);
};

export default SectionActions;
