import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

import mainBgImg from '../../assets/background.jpg'

const BannerDiv = styled.div`
	position: relative;
	background:  no-repeat 50% 50% / cover;
	height: 27em;
	margin-bottom: -7em;
`

const BannerContents = styled.div`
	width: 28rem;
	padding: 7rem 0 14.5rem;
	text-align: center;
	color: var(--gray-background-light);
	::before{
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: calc((100% - 1224px) / 2 + 44rem);
    height: 100%;
    background: rgba(40, 48, 63, 0.5);
	}
	>* {
	position: relative;
	}
	@media (max-width: 1280px) {
	width: 44rem;
	}
	@media (max-width: 768px) {
	width: 100%;
	margin: 0 auto;
	::before {
		width: 100%;
	}
}
`
const BannerSubTxt = styled.p`
	border: 1px solid rgba(249, 249, 249, 0.3);
	border-width: 1px 0;
	padding: 1rem 0 0.8rem;
	font-size: 2rem;
	letter-spacing: 0.2em;
	/* position: relative; */
`
const BannerMainTxt = styled.p`
	font-weight: bold;
	font-size: 5.4rem;
	margin: 1.6rem 0;
`
const BannerDesc = styled.p`
	font-size: 1.2rem;
	text-align: left;
	word-break: break-all;
	padding: 0 0.8rem;
`
const Today = styled.p`
	padding-left: 0.8em;
	font-size: 5rem;
	font-weight: bold;
	text-align: left;
	line-height: 1.1;
	@media (max-width: 1260px) {
		font-size: 3rem;
		padding-left: 0.2em;
	}
	@media (max-width: 768px) {
		text-align: center;
		padding-left: 0;
	}
`
const Em = styled.em`
	display: block;
	font-size: 2em;
	margin-bottom: -0.15em;
	@media (max-width: 1260px) {
		display: inline;
		font-size: 1.4em;
	}
`
export default function Banner(props) {

	const today = new Date();
	const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
	const day = today.getDay();
	const date = today.getDate()
	const stringToday  = '' + today
	const month = stringToday.slice(4,7);

	const blog = props.blog
	
	let url = useLocation().pathname;
	let urlName = url.slice(1,5);
	let urlId = parseInt(url.slice(-1));

	let postData = props.posts.filter(e => e.id === urlId);

	let backgroungImg = mainBgImg

	if(urlName === 'view') {
		backgroungImg = postData[0].mainBg
	} 

	return (
		<BannerDiv style={{backgroundImage : `url(${backgroungImg})`}}>
			<div className='max-width'>
				<BannerContents>
					{ url === "view" ?
						<Today>
							{month}
							<Em>{date}</Em>
							{days[day]}
						</Today> :
						<>
							<BannerSubTxt>{blog.subTitle}</BannerSubTxt>
							<BannerMainTxt>{blog.mainTitle}</BannerMainTxt>
							<BannerDesc>{blog.description}</BannerDesc> 
						</> 

					}
				</BannerContents>
			</div>
		</BannerDiv>
	)
}
