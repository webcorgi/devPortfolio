import React from 'react';

function BtnMore({ isShowBtnMore, fetchMoreTrigger, onSetListCounting }) {

    return (
        <button 
            className={isShowBtnMore === true ? "btn_more on" : 'btn_more'}
            ref={fetchMoreTrigger}
            onClick={onSetListCounting}
        >
            MORE
        </button>
    );
}

export default BtnMore;