import "./App.css";
import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import {darkTheme, lightTheme } from "./utils/Theme";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import Signin from "./pages/Signin";

const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 7;
  background-color: ${({theme}) => theme.bg}

`;
const Warraper = styled.div`
padding: 0px 5px;
`;

function App() {

  const [darkMode,setDarkMode] = useState(true)



  return (

   

    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>

    
    <Container>
      <BrowserRouter>
     
      <Menu darkMode= {darkMode} setDarkMode = {setDarkMode}/>

      <Main>
        <Navbar />
        <Warraper>
        <Routes>
          <Route path = "/">
            <Route index element = {<Home/>}/>
            <Route path= "signin" element = {<Signin/>}/>
          </Route>
          <Route path = "video">
            <Route path = ":id" element = {<Video/>}/>
          </Route>
        </Routes>
        </Warraper>
      </Main>
      </BrowserRouter>
    </Container>
    </ThemeProvider>
  );
}

export default App;
