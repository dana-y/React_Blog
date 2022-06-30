import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import deletePath from '../../assets/icon-delete.svg'

const BtnGroup = styled.div`
	display: flex;
	align-items: center;
	gap: 0.8rem;
	position: absolute;
	top: 9.2rem;
	right: 8rem;
	font-size: 1.6rem;
    @media (max-width: 1024px) {
		top: 6rem;
		right: 6rem;
		height: 5.2rem;
    }
    @media (max-width: 640px) {
		top: 4rem;
		right: 4rem;
    }
`
const ModifyBtn = styled(Link)`
	width: 4rem;
	height: 4rem;
	border: 0;
	border-radius: var(--border-radius);
	transition: all 0.3s;
    background: var(--gray-background) url('../../assets/icon-modify.svg') no-repeat 50% 50% / 1.6rem;
    right: 13rem;
    :hover {
        background: var(--main-color) url('../../assets/icon-modify-white.svg') no-repeat 50% 50% / 1.6rem;
    }
`
const DeleteBtn = styled.button`
	width: 4rem;
	height: 4rem;
	border: 0;
	border-radius: var(--border-radius);
	transition: all 0.3s;
    background: url(deletePath) var(--gray-background)  no-repeat 50% 50% / 1.6rem;
    :hover {
    background: var(--red-color) url('../../assets/icon-delete-white.svg') no-repeat 50% 50% / 1.6rem;
    outline-color: rgba(var(--red-rgb), 0.2);
	box-shadow: 0 0 0 1px var(--red-color);
}
`
export default function ButtonGroup() {
    return (
        <BtnGroup>
            <ModifyBtn to="/">
                <span class="a11y-hidden">modify</span>
            </ModifyBtn>
            <DeleteBtn type="button" >
                <span class="a11y-hidden">delete</span>
            </DeleteBtn>
        </BtnGroup>
    )
}
