import LandingPageEventCard from './LandingPageEventCard/LandingPageEventCard';
import { Link } from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage(props) {
	return (
		<div className='landing-page'>
			<p className='welcome-member'>
				Welcome to the Local Buzz! A place where you can meet people in your
				local area.
			</p>
			<Link
				to='/login'
				style={{
					textDecoration: 'none',
					color: 'white',
					minWidth: '80px',
					display: 'inline-block',
					/* POSSIBLE EXTRA CSS TO KEEP BUTTON TEXT ON ONE LINE */
					whiteSpace: "nowrap",
					overflow:"hidden",
					textOverflow:"ellipsis",
				}}>
				<button>Login </button>{' '}
			</Link>
			<Link
				to='/signup'
				style={{
					textDecoration: 'none',
					color: 'white',
					minWidth: '80px',
					display: 'inline-block',
					/* POSSIBLE EXTRA CSS TO KEEP BUTTON TEXT ON ONE LINE */
					whiteSpace:'nowrap',
					overflow:'hidden',
					textOverflow:'ellipsis'
				}}>
				{' '}
				<button>Sign Up </button>{' '}
			</Link>

			<LandingPageEventCard filteredData={props.filteredData} />
		</div>
	);
}
