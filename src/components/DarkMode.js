import React, {useState, useEffect, useCallback} from 'react';

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
                {!isDark ? (
                    // 해 아이콘 (라이트모드)
                    <svg className="light" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="5" fill="currentColor"/>
                        <path d="M12 1V3M12 21V23M23 12H21M3 12H1M20.071 20.071L18.657 18.657M5.343 5.343L3.929 3.929M20.071 3.929L18.657 5.343M5.343 18.657L3.929 20.071" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                ) : (
                    // 달 아이콘 (다크모드)
                    <svg className="dark" width="30" height="30" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                    </svg>
                )}
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
