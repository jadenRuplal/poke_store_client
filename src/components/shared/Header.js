import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
const linkStyle = {
	color: 'black',
	fontSize: '30px'
}
const authenticatedOptions = (
	<>
		<Nav.Item className='m-2'>
			<Link to='change-password' style={linkStyle}>
				Change Password
			</Link>
		</Nav.Item>
		<Nav.Item className='m-2'>
			<Link to='sign-out' style={linkStyle}>
				Sign out
			</Link>
		</Nav.Item>
		<Nav.Item className='m-2'>
			<Link to='/addItem' style={linkStyle}>
				Create Item
			</Link>
		</Nav.Item>
		<Nav.Item className='m-2'>
			<Link to='/order' style={linkStyle}>
				My Order
			</Link>
		</Nav.Item>
		<Nav.Item className='m-2'>
			<Link to='/carts' style={linkStyle}>
				My Cart
			</Link>
		</Nav.Item>


	</>
)

const unauthenticatedOptions = (
	<>
		<Nav.Item className='m-2'>
			<Link to='sign-up' style={linkStyle}>Sign Up</Link>
		</Nav.Item>
		<Nav.Item className='m-2'>
			<Link to='sign-in' style={linkStyle}>Sign In</Link>
		</Nav.Item>
	</>
)

// const alwaysOptions = (
// 	<>
// 		<Nav.Item className='m-2'>
// 			<Link to='/' style={linkStyle}>
// 				Home
// 			</Link>
// 		</Nav.Item>
// 	</>
// )

const Header = ({ user }) => (
	<Navbar bg='primary' variant='dark' expand='md'>
		<Navbar.Brand className='m-2'>
			<Link to='/' style={linkStyle}>
				Poke
			</Link>
		</Navbar.Brand>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto'>
				{user && (
					<span className='navbar-text mr-2'>Welcome, {user.name}</span>
				)}
				{/* {alwaysOptions} */}
				{user ? authenticatedOptions : unauthenticatedOptions}
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Header
