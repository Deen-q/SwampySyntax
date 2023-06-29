import { Button, TextField } from '@mui/material';
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/user.context';
import './SignUp.Page.css';

const Signup = () => {
	const navigate = useNavigate();
	const location = useLocation();

	// As explained in the Login page.
	const { emailPasswordSignup } = useContext(UserContext);
	const [form, setForm] = useState({
		email: '',
		password: '',
	});

	// As explained in the Login page.
	const onFormInputChange = event => {
		const { name, value } = event.target;
		setForm({ ...form, [name]: value });
	};

	// As explained in the Login page.
	const redirectNow = () => {
		const redirectTo = location.search.replace('?redirectTo=', '');
		navigate(redirectTo ? redirectTo : '/');
	};

	// As explained in the Login page.
	const onSubmit = async () => {
		try {
			const user = await emailPasswordSignup(form.email, form.password);
			if (user) {
				redirectNow();
				navigate('/login');
			}
		} catch (error) {
			alert(error);
		}
	};

	return (
		<div className='signUpForm'>
			<form
				style={{
					display: 'flex',
					flexDirection: 'column',
					maxWidth: '300px',
					margin: 'auto',
				}}>
				<Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
					{' '}
					<button className='closeFormButton'> X </button>
				</Link>
				<h1 className='SignUp-h1'> Signup</h1>
				<input
					className='loginInput'
					placeholder='Email'
					type='email'
					variant='outlined'
					name='email'
					value={form.email}
					onInput={onFormInputChange}
					style={{ marginBottom: '1rem' }}
				/>
				<input
					className='loginInput'
					placeholder='Password'
					type='password'
					variant='outlined'
					name='password'
					value={form.password}
					onInput={onFormInputChange}
					style={{ marginBottom: '1rem' }}
				/>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<Button
						className='signUpButton'
						variant='contained'
						color='primary'
						onClick={onSubmit}
						sx={{
							backgroundColor: '#5aaaa6',
							border: '1px solid #47474782',
							borderRadius: '25px',
							display: 'flex',
							justifyContent: 'center',
							padding: '0.5em 3em 0.5em 3em',
							color: 'white',
							marginBottom: '4vw',
							width: '4vw',
							textTransform: 'capitalize',
							textTransformFont: 'josefin sans',
							textTransformWeight: 'bold',
							maxWidth: '60px',
							maxHeight: '30px',
						}}>
						SignUp
					</Button>
				</div>
				<div className='loginLine'>
					<div className='orLine'>
						<p className='orText'>or</p>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Signup;
