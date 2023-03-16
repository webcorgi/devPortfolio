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
            
        </div>
    );
}

export default Footer;
