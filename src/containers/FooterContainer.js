import React, {useEffect, useState} from 'react';
import Footer from '../components/Footer';

function FooterContainer({ fetchGoTopTrigger }) {

    const [isShowGoTop, setIsShowGoTop] = useState(null);

    // goTop 버튼 클릭시 최상단으로
    const clickGoTop = () =>  window.scrollTo(0, 0);

    // goTop 감시
    const fetchObserverGoTop = new IntersectionObserver(
        ([{ isIntersecting }]) => {
            isIntersecting ? setIsShowGoTop(false) : setIsShowGoTop(true)
        }
    );

    // goTop 버튼 show / hide
    useEffect(() => {
        fetchObserverGoTop.observe(fetchGoTopTrigger.current);
        return () => {
            fetchObserverGoTop.unobserve(fetchGoTopTrigger.current);
        };
    }, []);


    return (
        <Footer 
            clickGoTop={clickGoTop}
            isShowGoTop={isShowGoTop}
        />
    );
}

export default FooterContainer;
