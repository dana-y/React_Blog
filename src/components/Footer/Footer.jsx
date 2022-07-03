import React from 'react'
import styled from 'styled-components'

const FooterContent = styled.footer`
	background: var(--white-color);
	margin-top: 10rem;
`
const FooterMaxWidth = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 8rem;
	position: relative;
`
const FooterH2 = styled.h2`
  color: var(--gray-color);
`

const TopButton = styled.a`
	position: absolute;
	bottom: 0;
	right: 0;
	width: 6.4rem;
	height: 6.4rem;
	padding-top: 2.2rem;
	border: 0;
	border-radius: var(--border-radius) var(--border-radius) 0 0;
	background: var(--main-color) url(../assets/ArrowTop.svg) no-repeat 50% 0.4rem / 4rem;
	color: var(--white-color);
	text-align: center;
	font-weight: bold;
`

export default function Footer() {
	return (
	<FooterContent>
		<FooterMaxWidth>
		<FooterH2>©Weniv Corp.</FooterH2>
		<TopButton href='#top'>TOP</TopButton>
		</FooterMaxWidth>
	</FooterContent>
	)
}
