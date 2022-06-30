import React from 'react'
import Logo from './Logo/Logo'
import LoginInfo from './LoginInfo/LoginInfo'
import styled from 'styled-components'

const HeaderWrppaer = styled.header`
  background: var(--white-color);
  width: 1224px;
	max-width: calc(100% - 4rem);
	margin: 0 auto;
`

const HeaderMaxWidth = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 4rem;
	padding: 1rem 0;
  width: 1224px;
	max-width: calc(100% - 4rem);
	margin: 0 auto;
`
function Header() {
  return (
    <HeaderWrppaer>
      <HeaderMaxWidth className='max-width'>
      <Logo></Logo>
      <LoginInfo></LoginInfo>
      </HeaderMaxWidth>
    </HeaderWrppaer>
  )
}

export default Header;