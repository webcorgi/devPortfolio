import React from 'react';
import VerticalAlignTopIcon from '@material-ui/icons/VerticalAlignTop';

function Footer({clickGoTop, isShowGoTop}) {

    return (
        <div className="Footer">
            <div className="f_copyright">
                @2021 
                <strong>daehyun</strong>
            </div>

            {isShowGoTop === true &&
                <button className="goTop" onClick={clickGoTop}>
                    <VerticalAlignTopIcon />
                </button>
            }
            <div className="btmnav_mobile">
                <p>다른 포트폴리오도 있어요 😍</p>
                <div className="link">
                    <a href="https://onedev.i234.me/dhweb/des.html" className="des ">웹디자이너</a>
                    <a href="https://onedev.i234.me/dhweb/pub.html" className="pub">퍼블리셔</a>
                    <a href="https://webcorgi.github.io/devPortfolio/" className="dev unactive">개발자</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
