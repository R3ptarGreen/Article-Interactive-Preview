//styles
import './Footer.scss';

const Footer = () => {
	return (
		<>
			<footer className='footer'>
				<div className='footer__attribution'>
					<p>
						Coded by{' '}
						<a
							className='footer__underline'
							href='https://github.com/R3ptarGreen'
						>
							Edgar Mendez
						</a>
						.
					</p>
				</div>
			</footer>
		</>
	);
};

export default Footer;
