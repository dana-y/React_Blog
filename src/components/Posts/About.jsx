import { React } from 'react'
import {Link} from 'react-router-dom'
import styled, { css } from 'styled-components'

const AboutAside = styled.aside`
	flex-basis: calc((100% - 2.4rem * 3) / 4);
	flex-shrink: 0;
	align-self: flex-start;
	padding: 4rem 2.4rem 7rem;
	box-sizing: border-box;
	border-radius: var(--border-radius);
	background: var(--white-color);
	text-align: center;
	font-size: 2rem;
	@media (max-width: 1024px) {
		width: 100%;
	}
`
const AboutHeader = css`
	margin-bottom: 2rem;
	font-size: 1.2rem;
	font-weight: bold;
	text-transform: uppercase;
	text-decoration: underline;
	letter-spacing: 0.1em;
`
const AboutH2 = styled.h2`
	${AboutHeader};
`
const AboutH3 = styled.h3`
	${AboutHeader};
	margin-top: 6rem;
`
const AboutImg = styled.img`
	width: 8rem;
	height: 8rem;
	object-fit: cover;
	border-radius: 50%;
`
const AboutName = styled.p`
	color: var(--main-color);
	font-weight: bold;
	font-size: 1.6rem;
	margin: 1.2rem 0 0.8rem;
`
const AboutDesc = styled.p`
	font-size: 1.4rem;
	padding: 0 0.4rem;
`
const AboutCategoriseUl = styled.ul`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	gap: 0.8rem;
`	
const AboutSnsUl = styled.ul`
	display: flex;
	gap: 0.6rem;
	justify-content: center;
	margin-top: -0.4rem;
`
const AboutLink = styled(Link)`
	background: var(--gray-background);
	color: var(--gray-text);
	font-size: 1.2rem;
	border-radius: calc(var(--border-radius) * 2);
	padding: 0.2rem 1.2rem;
`
const FollowLink = styled(Link)`
	display: block;
	padding: 0.4rem;
	line-height: 1;
`
const FollowImg = styled.img`
	width: 1.6rem;
	display: block;
`

export default function About(props) {
	// 현재 로그인유저 아이디 설정
	let loginId = 1
	const loginUser = props.users.filter(e => e.id === loginId)[0]
	return (
    	<AboutAside>
			<AboutH2>About Me</AboutH2>
			<AboutImg src={loginUser.profileImg} />
			<AboutName>{loginUser.name}</AboutName>
			<AboutDesc>{loginUser.userInfo}</AboutDesc>
			<AboutH3>Categories</AboutH3>
			<AboutCategoriseUl>
				{loginUser.category.map((item) => (
					<li><AboutLink>{item}</AboutLink></li>
				))}
			</AboutCategoriseUl>
			<AboutH3>Follow</AboutH3>
			<AboutSnsUl>
				{Object.entries(loginUser.sns).map((entrie, idx) => (
					<li>
						<FollowLink to="/">
							<FollowImg src={entrie[1]} alt={entrie[0]}/>
						</FollowLink>
					</li>
				)
				)}
			</AboutSnsUl> 
    	</AboutAside>
	)
}
