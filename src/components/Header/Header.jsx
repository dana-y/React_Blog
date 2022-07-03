import { React } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import LoginInfo from './LoginInfo'

import logoImg from '../../assets/Logo.svg'

const HeaderWrppaer = styled.header`
  background: var(--white-color);
`
const HeaderMaxWidth = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 4rem;
	padding: 1rem 0;
`
const LogoH1 = styled.h1 `
  font-size: 3rem;
`
const LogoLink = styled(Link) `
	display: block;
	padding: 0.4rem;
	margin-left: -0.4rem;
  > img {
    display: block;
  }
`

function Header() {
  return (
    <HeaderWrppaer id='top'>
      <HeaderMaxWidth className='max-width'>
      <LogoH1>
      <LogoLink to="/">
        <img src={logoImg} alt="My Blog" />
      </LogoLink>
    </LogoH1>
    <LoginInfo></LoginInfo>
    </HeaderMaxWidth>
    </HeaderWrppaer>
  )
}

export default Header;