import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { community } from "./components/community";
import Card from "./components/Card";


const theme ={
  colors :{
    header:'#ebfbff',
    body:'#fff',
    footer:'#003333'
  },

  mobile:'768px',
}

function App() {
  return (
    <ThemeProvider theme= {theme}>
    
    <Navbar/>
    <Header/>
     {/* <Card/> */}
    {community.map((item, index)=>{
      return(
       <Card key={index} item={item}/>

        )})}
     
    
    </ThemeProvider>
  );
}

export default App;
