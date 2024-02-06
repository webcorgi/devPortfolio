import React, {useState, useEffect, useCallback} from 'react';
/* import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2'; */

function DarkMode({ appRef }) {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const viewMode = localStorage.getItem('viewMode');
        if( viewMode === 'dark' ) darkMode();
    }, []);

    const lightMode = useCallback(() => {
        appRef.current.classList.remove('darkMode') 
        localStorage.removeItem('viewMode');
        setIsDark(false);
    },[]);

    const darkMode = useCallback(() => {
        appRef.current.classList.add('darkMode') 
        localStorage.setItem('viewMode', 'dark');
        setIsDark(true);
    },[]);
    
    const fetchToMode = useCallback(() => {
        if(isDark){
            lightMode();
        }else{
            darkMode();
        }
    },[isDark]);


    return (
        <button className={
            isDark === false
            ? "darkModeComponent light"
            : "darkModeComponent dark"
        }
        onClick={fetchToMode}>
            <div className="icons">
                {/* <WbSunnyIcon className={!isDark && "light"} />
                <Brightness2Icon className={isDark && "dark"} /> */}
            </div>
            {
                isDark === false
                ? <span>Light</span>
                : <span>Dark</span>
            }
        </button>
    );
}

export default DarkMode;
