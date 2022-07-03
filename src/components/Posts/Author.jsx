import React from 'react'
import styled from 'styled-components'

const AuthorWrap = styled.dl`
	display: flex;
	gap: 1rem;
	color: #767676;
	font-size:${props => (props.title === undefined) ? "1.2rem" : "1.4rem"};
  @media (max-width: 1024px) {
    height: 5.2rem;
		margin-bottom: 1rem;
  }
  @media (max-width: 640px) {
    margin-bottom: 1rem;
		padding-left: 3rem;
  }
`
const AuthorDd = styled.dd`
	display: flex;
	align-items: center;
	gap: 0.6rem;
`
const AuthorCreated = styled(AuthorDd)`
  ::before {
    content: "";
    display: block;
    width: 1px;
    height: 0.8em;
    margin-right: 1rem;
    background: var(--border-color);
  }
`
const AuthorImg = styled.img`
	width: 2em;
	height: 2em;
	border-radius: 50%;
`
export default function Author(props) {
  return (
    <AuthorWrap >
      <dt className='a11y-hidden'>Author</dt>
      <AuthorDd>
        <AuthorImg src={props.profileImg} />
        {props.userName}
      </AuthorDd>
      <dt className='a11y-hidden'>Created</dt>
      <AuthorCreated>{props.created}</AuthorCreated>
    </AuthorWrap>
  )
}
