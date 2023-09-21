//components
import { useEffect } from 'react';
import SectionText from './SectionText/SectionText';
import SectionProfile from './SectionProfile/SectionProfile';
import SectionActions from './SectionActions/SectionActions';
import SectionTooltip from './SectionTooltip/SectionTooltip';
//styles
import './Card.scss';

const Card = () => {
	const handlerClick = () => {
		const mediaQuery = window.matchMedia('(max-width: 855px)');
		const profileContainer = document.getElementById('profileContainer');
		const actionsContainer = document.getElementById('actionsContainer');
		const toolTip = document.getElementById('toolTipContainer');
		const btnShare = document.getElementById('btnShare');
		const btnUnShare = document.getElementById('btnUnshare');
		const btnUnShareDesktop = document.getElementById('btnUnShareDesktop');

		if (btnShare) {
			btnShare.addEventListener('click', () => {
				if (mediaQuery.matches) {
					profileContainer.classList.add('disable');
					actionsContainer.classList.remove('disable');
				} else {
					profileContainer.classList.add('disable');
					toolTip.classList.remove('disable');
				}
			});
		}

		if (btnUnShareDesktop) {
			btnUnShareDesktop.addEventListener('click', () => {
				profileContainer.classList.remove('disable');
				actionsContainer.classList.add('disable');
				toolTip.classList.add('disable');
			});
		}
		if (btnUnShare) {
			btnUnShare.addEventListener('click', () => {
				profileContainer.classList.remove('disable');
				actionsContainer.classList.add('disable');
				toolTip.classList.add('disable');
			});
		}
	};

	useEffect(() => handlerClick(), []);
	return (
		<>
			<div className='card'>
				<figure className='card__img img__container'>
					<img className='img' src='/images/drawers.jpg' alt='drawers' />
				</figure>
				<article className='card__body'>
					<SectionText />
					<SectionProfile idContainer={'profileContainer'} idBtn={'btnShare'} />
					<SectionActions
						idContainer={'actionsContainer'}
						idBtn={'btnUnshare'}
					/>
					<SectionTooltip
						idContainer={'toolTipContainer'}
						idBtn={'btnUnShareDesktop'}
					/>
				</article>
			</div>
		</>
	);
};

export default Card;
