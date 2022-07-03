import React from 'react'
import styled from 'styled-components'
import { useParams, Link } from 'react-router-dom'

import Author from '../Posts/Author'
import Category from '../Posts/Category'
import ButtonGroup from './ButtonGroup'

import likeIcon from '../../assets/icon-like.svg'
import likeIconWhite from '../../assets/icon-like-white.svg'
import backIcon from '../../assets/ArrowLeft-blue.svg'

const ViewWrapSec = styled.section`
	position: relative;
	border-radius: var(--border-radius);
	background: var(--white-color);
	font-size: 4rem;
	transition: all 0.3s;
  width: 91.2rem;
	max-width: 100%;
	margin: -30rem 0 auto auto;
	padding: 8rem;
  @media (max-width: 1024px) {
    margin-top: -35rem;
    padding: 6rem;
    width: 100%;
  }
  @media (max-width: 640px) {
    padding: 4rem;
  }
`
const ViewInner = styled.div`
	margin: 0 auto;
	font-size: 1.6rem;
  width: 100%;
	max-width: 100%;
`
const TitleWrap = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	gap: 8rem;
	margin-bottom: 1rem;
	font-size: 1.6rem;
  @media (max-width: 1024px) {
		flex-direction: column;
		gap: 2rem;
  }
`
const TitleH2 = styled.h2`
  width: 100%;
	text-transform: none;
  font-size: 3.2rem;
	font-weight: bold;
  margin-bottom: 0;
`
const LikeButton = styled.button`
	width: 12rem;
	height: 4rem;
	padding-left: 3rem;
	border: 1px solid rgba(var(--red-rgb), 0.5);
	border-radius: var(--border-radius);
  background: url(${likeIcon}) var(--white-color) no-repeat 2.5rem 50% / 2.4rem;
	transition: all 0.3s;
  flex-shrink: 0;
  :hover, :active {
    background: var(--red-color) url(${likeIconWhite}) no-repeat 2.5rem 50% / 2.4rem;
    color: var(--white-color);
  }
  :focus {
    outline-color: rgba(var(--red-rgb), 0.2);
    box-shadow: none;
  }
`
const Hr = styled.hr`
  border: 1px solid var(--border-color);
	border-width: 1px 0 0 0;
	margin: 3.2rem 0;
`
const ViewContentsP = styled.p`
  font-size: 1.6rem;
	line-height: 1.6;
	text-align: justify;
	letter-spacing: -0.01em;
`
const ViewContentsImage = styled.img`
	max-width: 100%;
	margin: 3.2rem 0;
`
const ButtonBack = styled(Link)`
	width: 6.4rem;
	height: 6.4rem;
	border-radius: 0 var(--border-radius) var(--border-radius) 0;
	background: var(--gray-background) url(${backIcon}) no-repeat 50% 50% / 4rem;
	font-size: 1.6rem;
  position: absolute;
	top: 8rem;
	left: 0;
  @media (max-width: 1024px) {
    top: 6rem;
		width: 5.2rem;
		height: 5.2rem;
  }
  @media (max-width: 640px){
    top: 4rem;
  }
`

export default function PostView(props) {
  const postId = parseInt(useParams().id);
  const postData = props.posts.filter(e => e.id === postId);
  const data = postData[0]
  
  return (
    <div className='view'>
      <div className='max-width'>
        <ViewWrapSec>
          <ViewInner>
            <Author 
              profileImg={data.profileImg}
              created={data.created}
              userName={data.userName}
            />
            <Category category={data.category}/>
            <TitleWrap>
              <TitleH2>{data.title}</TitleH2>
              <LikeButton>Like</LikeButton>
            </TitleWrap>

            <Hr/>
            <div>
              {data.contents.map((item) => (
                item.type === "p"?
                <ViewContentsP>{item.text}</ViewContentsP> :
                <ViewContentsImage src={item.src}></ViewContentsImage> 
                )
                )}
            </div>
            <ButtonGroup />
            <ButtonBack to="/">
              <span class="a11y-hidden">Back</span>
            </ButtonBack>
          </ViewInner>  
        </ViewWrapSec>
      </div>
    </div>
  )
}
