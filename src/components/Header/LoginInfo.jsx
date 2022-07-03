import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { css } from 'styled-components'
import { useState } from 'react'

import profileImg from '../../assets/profile.jpg'
import modifyIcon from '../../assets/icon-modify-white.svg'
import logoutIcon from '../../assets/icon-logout.svg'
import loginIcon from '../../assets/icon-login.svg'
import registerIcon from '../../assets/icon-register.svg'

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
const ButtonStyle = css`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 0.8rem;
	height: 4rem;
	padding: 0.2rem 1.2em 0;
	border: 0;
	border-radius: var(--border-radius);
	background: var(--main-color);
	color: var(--white-color);
	font-weight: bold;
	line-height: 1;
`
const HeaderButton = styled(Link)`
	${ButtonStyle}
	text-transform: none;
	@media (max-width: 640px) {
		width: 4.4rem;
		height: 4.4rem;
		padding: 0;
		border-radius: 50%;
	}
`
const HeaderButtonWhite = styled.button`
	${ButtonStyle}
	padding: 0.2rem 0.8em 0;
	background: var(--white-color);
	color: var(--black-color);
`
const ImgInBtn = styled.img`
	height: 1.2em;
	margin-top: -0.2rem;
	vertical-align: middle;
`
const ImgInBtnWhite = styled(ImgInBtn)`
	height: 1.4em;
`
const GrayBtn = styled(Link)`
	${ButtonStyle}
	background: var(--gray-background);
	color: var(--black-color);
`
export default function LoginInfo (){
	const [ loginState, setLogin ] = useState(false)

	const handleLoginBtn = () => {
		loginState? setLogin(false) : setLogin(true); 
	}

	return(
		<LoginUl>
			{loginState?
			<>
				<li>
				<ProfileLink to="/">
					<ProfileImg src={profileImg} alt="My page로 가는 버튼" />
				</ProfileLink>
				</li>
				<li>
				<HeaderButton to="/">
					<ImgInBtn src={modifyIcon} alt="게시글 작성 버튼" />
					<LoginSpan>Write</LoginSpan>
				</HeaderButton>
				</li>
				<li>
				<HeaderButtonWhite as="button" onClick={handleLoginBtn}>
					<ImgInBtnWhite src={logoutIcon} alt="로그아웃 버튼" />
					<LoginSpan>Logout</LoginSpan>
				</HeaderButtonWhite>
				</li> 
			</> :
			<>
				<li>
					<GrayBtn to="#" onClick={handleLoginBtn}>
					<ImgInBtn src={loginIcon} alt="로그인 버튼" />
					<LoginSpan>Login</LoginSpan>
					</GrayBtn>
				</li>
				<li className="only-pc">
					<GrayBtn to="#">
						<ImgInBtn src={registerIcon} alt="회원가입 버튼" />
						<LoginSpan>Register</LoginSpan>
					</GrayBtn>
				</li>
			</>
			}
		</LoginUl>
	)
}