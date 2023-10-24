import {Link} from 'react-router-dom'

import {Nav, NavLogo} from './styledComponents'

const Header = () => (
  <Nav>
    <Link to="/">
      <NavLogo
        src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
        alt="website logo"
      />
    </Link>
  </Nav>
)
export default Header
