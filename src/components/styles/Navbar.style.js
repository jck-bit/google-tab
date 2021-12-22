import styled from "styled-components";

export const Nav = styled.div`
display:flex;
width:100%
background-color:tomato;
height:50px;
justify-content:space-between;
margin-top:20px;
margin-right:30px;

@media (max-width: ${({ theme }) => theme.mobile}) {
    justify-content:space-between;
    width:100%;
  }
`
