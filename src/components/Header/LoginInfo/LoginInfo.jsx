import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
// import profileImg from '../../../assets/profile.jpg'
import modifyIcon from '../../../assets/icon-modify.svg'
import logoutIcon from '../../../assets/icon-logout.svg'

const LoginUl = styled.ul`
	display: flex;
	align-items: center;
	gap: 1rem;
` 

const ProfileLink = styled(Link)`
	width: 4.4rem;
	height: 4.4rem;
	display: block;
	border-radius: 50%;
  @media (max-width: 640px) {
    width: 4.4rem;
		height: 4.4rem;
		padding: 0;
		border-radius: 50%;
  }
`
const ProfileImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`

const LoginSpan = styled.span`
  @media (max-width: 640px){
    overflow: hidden;
		position: absolute;
		clip: rect(0, 0, 0, 0);
		width: 1px;
		height: 1px;
		margin: -1px;
		border: 0;
		padding: 0;
		display: none;
}
`

const HeaderBtn = styled.button`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 0.8rem;
	height: 4rem;
	border: 0;
	border-radius: var(--border-radius);
	
	text-transform: uppercase;
	font-weight: bold;
	line-height: 1;
  text-transform: none;
  padding: 0.2rem 0.8em 0;
	background: var(--white-color);
	color: var(--black-color);
  @media (max-width: 640px) {
    width: 4.4rem;
		height: 4.4rem;
		padding: 0;
		border-radius: 50%;
  }
`

export default function LoginInfo (){
  return(
    <LoginUl>
      <li>
        <ProfileLink to="/">
          <ProfileImg src='/assets/profile.jpg' alt="My Page" />
        </ProfileLink>
      </li>
      <li>
        <Link to="/">
          <img src={modifyIcon} alt="" />
          <LoginSpan>Write</LoginSpan>
        </Link>
      </li>
      <li>
        <HeaderBtn>
          <ProfileImg src={logoutIcon} alt="" />
          <LoginSpan>Logout</LoginSpan>
        </HeaderBtn>
      </li>
    </LoginUl>
  )
}