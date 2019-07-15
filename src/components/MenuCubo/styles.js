import styled from 'styled-components'

export const MenuCuboNav = styled.nav`
  position: relative;
  color: #768c93;
  text-align: right;
  flex: 1;
  ul {
    display: inline-flex;
    flex-direction: row;
    list-style: none;
  }
  li {
    display: list-item;
    text-align: center;
    font-size: 14px;
    border-radius: 4px;
    text-transform: uppercase;
    padding: 15px 0;
  }

  a {
    text-decoration: none;
    color: #768c93;
    line-height: 25px;
    padding: 15px;
  }
  a:hover {
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
