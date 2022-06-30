import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import deleteIcon from '../../assets/icon-delete.svg'
import deleteIconWhite from '../../assets/icon-delete-white.svg'
import modifyIcon from '../../assets/icon-modify.svg'
import modifyIconWhite from '../../assets/icon-modify-white.svg'

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
    background: var(--gray-background) url(${modifyIcon}) no-repeat 50% 50% / 1.6rem;
    right: 13rem;
    :hover {
        background: url(${modifyIconWhite}) var(--main-color) no-repeat 50% 50% / 1.6rem;
    }
`
const DeleteBtn = styled.button`
	width: 4rem;
	height: 4rem;
	border: 0;
	border-radius: var(--border-radius);
	transition: all 0.3s;
    background: url(${deleteIcon}) var(--gray-background)  no-repeat 50% 50% / 1.6rem;
    :hover {
    background: var(--red-color) url(${deleteIconWhite}) no-repeat 50% 50% / 1.6rem;
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
            <DeleteBtn type="button">
                <span class="a11y-hidden">delete</span>
            </DeleteBtn>
        </BtnGroup>
    )
}
