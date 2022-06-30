import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logoImg from '../../../assets/Logo.svg'

const LogoH1 = styled.h1 `
  font-size: 3rem;
`
const LogoLink = styled(Link) `
	display: block;
	padding: 0.4rem;
	margin-left: -0.4rem;
`

export default function Logo(){
  return(
    <LogoH1>
      <LogoLink to="./">
        <img src={logoImg} alt="My Blog" />
      </LogoLink>
    </LogoH1>
    )
}
