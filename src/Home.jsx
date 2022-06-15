import React, { useState } from 'react'
import style,{ ThemeProvider } from 'styled-components';
import {lightTheme,darkTheme, GlobalStyles} from './themes';
import {Link} from  "react-router-dom";
import "./Home.css" ;

const StyledApp = style.div`
  color:${(props)=>props.theme.fontColor}
`;

function Home() {
    const [theme,setTheme] = useState('light');

    const changeTheme = ()=>{
      theme === 'light' ?setTheme('dark') : setTheme('light');
    }
  
  return (
    <ThemeProvider theme={theme==='light'? lightTheme: darkTheme}>
    <GlobalStyles />
    <StyledApp>
    
    <div className='navbar'>
        <nav>
            <Link to="/">Home</Link>
        </nav>
        <nav>
            <Link to="/products">Products</Link>
        </nav>
      <div>
        <button onClick={()=>changeTheme()}>Change Theme </button>
      </div>
    </div>
    </StyledApp>
    </ThemeProvider>
  )
}

export default Home