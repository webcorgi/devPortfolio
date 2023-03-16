import React from 'react';

function Kind1({ kind1, clickButton }) {

    
    return (
        <div className="kind1">
            {
                kind1.map((kind, i) => 
                    <button 
                        key={i} 
                        className={
                            i===0 
                            ? "btn_kind1 on" // 페이지 최초 실행시 'ALL' 클릭 DEFAULT
                            : "btn_kind1"
                        } 
                        onClick={clickButton}
                        kind={kind}
                    >
                        {kind}
                    </button>
                )
            }
        </div>
    );
}

export default Kind1;
