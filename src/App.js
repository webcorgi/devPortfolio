import React, {useEffect, useRef} from 'react';
import DarkMode from './components/DarkMode';
import FooterContainer from './containers/FooterContainer';
import Kind1Container from './containers/Kind1Container';
import Kind2Container from './containers/Kind2Container';
import ListContainer from './containers/ListContainer';
import './scss/style.scss'


function App() {
    const fetchGoTopTrigger = useRef(null);
    const appRef = useRef(null);

    return (
        <div className="App" ref={appRef}>
            <DarkMode appRef={appRef} />
            <div className="header">
                <h1 ref={fetchGoTopTrigger}>김대현 포트폴리오</h1>
            </div>
            <div className="wrapper">
                <h2>DEVELOPER</h2>

                <div className="page" >
                    <h3>PORTFOLIO</h3>
                    <Kind1Container />
                    <Kind2Container />
                    <ListContainer />
                </div>
            </div>
            <FooterContainer fetchGoTopTrigger={fetchGoTopTrigger} />
        </div>
    )
}

export default App;
