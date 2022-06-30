import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom';

const Banner = styled.div`
	position: relative;
	background:no-repeat 50% 50% / cover;
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
export default function ViewBanner(props) {
  const {postId} = parseInt(useParams().id);
  const postData = props.posts.filter(e => e.id === postId);
  
  console.log("postId!", postId)
  const today = new Date();
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  const day = today.getDay();
  const date = today.getDate()
  const stringToday  = '' + today
  const month = stringToday.slice(4,7);

  const mainBgPath = postData[0].mainBg

  return (
    <Banner style={{backgroundImage:`url(${mainBgPath})`}}>
      <div className='max-width'>
        <BannerContents>
          <Today>
            {month}
            <Em>{date}</Em>
            {days[day]}
          </Today>
        </BannerContents>
      </div>
    </Banner>
  )
}
