import React from 'react'
import styled from 'styled-components'

const CategoryDl = styled.dl`
  display: flex;
  flex-wrap: wrap;
  color: var(--main-color);
  margin: 2rem 0 1rem 0;
`
const CategoryDd = styled.dd`
	margin-right: 0.4rem;
	padding: 0.2rem 1.2rem;
	border-radius: calc(var(--border-radius) * 2);
	background: var(--gray-background);
	font-size: 1.2rem;
`
export default function Category(props) {
  return (
    <>
      <CategoryDl>
        <dt className='a11y-hidden'>Category</dt>
        {props.category.map((e) => <CategoryDd>{e}</CategoryDd>)}
      </CategoryDl>
    </>
  )
}
