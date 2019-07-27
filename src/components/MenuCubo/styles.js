import styled from 'styled-components'

export const MenuCuboNav = styled.nav`
  display: flex;
  width: 336px;
  height: 48px;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6);
    width: 82px;
    max-width: 82px;
    height: 35px;
    max-height: 35px;
    transition: 0.3s;
  }
  a:hover {
    border-radius: 4px;
    background-color: #e76924;
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
