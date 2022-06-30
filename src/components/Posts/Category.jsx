import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'


const CategoryDl = styled.dl`
  display: flex;
  flex-wrap: wrap;
  color: var(--main-color);
`
const CategoryDd = styled.dd`
	margin-right: 0.4rem;
	padding: 0.2rem 1.2rem;
	border-radius: calc(var(--border-radius) * 2);
	background: var(--gray-background);
	font-size: 1.2rem;
`
export default function Category(props) {
  // const postId = useParams();
  
  return (
    <>
      <CategoryDl>
        <dt className='a11y-hidden'>Category</dt>
        {props.category.map((e) => <CategoryDd>{e}</CategoryDd>)}
      </CategoryDl>
    </>
  )
}
