import styled from "styled-components";

export const Problems = styled.header`
display:flex;
border-radius:5px;
color:white;
width:800px;
height:500px;
align-items:center;
background-image: url(./images/bck.jpg);
backgoround-size:cover;
background-position:center;
& > div,
& > ul {
  flex: 1;
}

& 


`
export const Another = styled.div`
width:500px;
margin-left: 20px;
align-items:center;


p{
  font-weight:bold;
  text-align:left;
}

@media (max-width: ${({ theme }) => theme.mobile}) {
  flex-direction: column;
  margin-left:100px;
  
}
`