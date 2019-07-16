import styled from 'styled-components'

export const MenuCuboNav = styled.nav`
  position: relative;
  color: #768c93;
  text-align: right;
  flex: 1;
  ul {
    display: inline-flex;
    list-style: none;
  }
  li {
    padding: 15px 0px;
  }

  a {
    display: inline-block;
    font-size: 14px;
    text-transform: uppercase;
    text-decoration: none;
    color: #768c93;
    /* padding: 10px 22px; */
    width: 82px;
    max-width: 82px;
    height: 35px;
    max-height: 35px;
    text-align: center;
    line-height: 30px;
  }
  a:hover {
    border-radius: 4px;
    background-color: #cb733d;
    color: #fff;
    font-weight: bolder;
  }

  @media screen and (max-width: 700px) {
    a {
      display: none;
      text-align: left;
    }
    nav {
      display: none;
    }
  }
`
