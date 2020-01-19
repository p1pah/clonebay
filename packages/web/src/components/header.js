import { Link } from "gatsby"
import { arrayOf, string } from "prop-types"
import React from "react"
import { rustyOrange } from "./colors"
import styled from "styled-components"
import homeImage from "../images/home.jpg"

const Header = ({ siteNavItems, siteLinks }) => (
  <ColoredHeader rustyOrange={rustyOrange}>
    <StyledDiv>
      <Link to="/">
        <img src={homeImage} alt="homepage" height="100" width="95" />
      </Link>
      {siteNavItems.map((current, index) => (
        <HeaderParagraph key={index}>
          <StyledLink to={siteLinks[index]}>{current}</StyledLink>
        </HeaderParagraph>
      ))}
    </StyledDiv>
  </ColoredHeader>
)

const ColoredHeader = styled.header`
  background: ${props => props.rustyOrange};
  margin-bottom: 1rem;
`

const StyledDiv = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 1rem 0.875rem;
  display: flex;
  padding-bottom: 0px;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding-left: 130px;
`

const HeaderParagraph = styled.p`
  margin: 0;
  padding-top: 35px;
`
Header.propTypes = {
  siteNavItems: arrayOf(string),
  siteLinks: arrayOf(string),
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
