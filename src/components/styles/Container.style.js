import styled from "styled-components";

export const Container = styled.div`
background-color:${({theme}) => theme.colors.footer}
width:1000;
max-width:100%;
padding: 20px;
margin: 0 auto;
text-align:center;
display:flex;
letter-spacing:-0.5px;


@media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`