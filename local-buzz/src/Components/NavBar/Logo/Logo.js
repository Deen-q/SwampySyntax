// logo component
// render the logo followed by Local Buzz title
import './Logo.css';
import LogoWhiteOutline from '../../../assets/LogoWhiteOutline.png';
// import LogoBlackOutline from '../../../assets/LogoBlackOutline.png';
export default function Logo() {
	return (
		<div className='logo-container'>
			<img id='logo' src={LogoWhiteOutline} alt='logo' />
			<div className='line'></div>
			<h1>LocalBuzz</h1>
			{/* <img id='logo' src={LogoBlackOutline} alt='logo' />
			<h1>| LocalBuzz</h1> */}
		</div>
	);
}
