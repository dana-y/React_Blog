import React from 'react'
import {Link} from 'react-router-dom'
import styled, { css } from 'styled-components'

import Category from './Category'
import Author from './Author'

const PostLink = styled(Link) `
  display: block;
	overflow: hidden;
	border-radius: var(--border-radius);
	background: var(--white-color);
	font-size: 2rem;
`
const PostImg = styled.img`
  width: 100%;
`
const PostWrap = styled.div`
  padding: 1.6rem 2.4rem 2.4rem;
`
const PostStyle = css`
  display: -webkit-box;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
	word-break: break-all;  
`
const PostDes = styled.p`
  height: calc(1.4rem * 1.4 * 3);
	margin-top: 1.6rem;
	color: var(--gray-color);
	font-size: 1.4rem;
	-webkit-line-clamp: 3;
	text-indent: 0.5em;
  @media (max-width: 540px) {
		height: auto;
		-webkit-line-clamp: 1;
  }
  ${PostStyle}
`
const WrapH3 = styled.h3`
  height: calc(1.8rem * 1.4 * 2);
  margin: 1rem 0;
  font-size: 1.8rem;
  font-weight: bold;
  -webkit-line-clamp: 2;
  letter-spacing: -0.02em;
  @media (max-width: 540px) {
    height: auto;
		-webkit-line-clamp: 1;
  }
  ${PostStyle}
`

export default function Post(props) {
  return (
    <li>
      <PostLink to={`/view/${props.id}`}>
        <article>
          <PostImg src={props.thumbnailImg} />
          <PostWrap>
            <Category category={props.category}></Category>
            <WrapH3>{props.title}</WrapH3>
            <Author 
              profileImg={props.profileImg}
              created={props.created}
              userName={props.userName}
            />
            <PostDes>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptas dolores, nobis soluta voluptatum consectetur nesciunt eos distinctio accusamus nisi assumenda culpa adipisci sequi cumque sunt, nulla esse quis. Quia.
            </PostDes>
          </PostWrap>
        </article>
      </PostLink>
    </li>
  )
}
