import React from 'react';

function List({ list }) {
    const reg = /[\"\[\]]/g; // 특수 문자 "[] 3가지 제거

    return (
        <div className="contents">
            <ul>
                {
                    list.map((item, i) =>
                        <li key={i}>
                            <div className="cpl_wrap">
                                <div className="cpl_info">
                                    <div className="cpli_title">
                                        <strong>{item.title}</strong>
                                        <span>{item.kind1}</span>
                                    </div>
                                    <ul>
                                        <li>
                                            <strong><mark>SKILL</mark></strong>
                                            <span>
                                                {!item.kind2
                                                    ? ''
                                                    : JSON.stringify(item.kind2).replace(reg, '')
                                                }
                                            </span>
                                        </li>
                                        <li>
                                            <strong><mark>WORK</mark></strong>
                                            <span>{item.work}</span>
                                        </li>
                                        {
                                            item.detail &&
                                            <li>
                                                <strong><mark>DETAIL</mark></strong>
                                                <span>{item.detail}</span>
                                            </li>
                                        }
                                        <li>
                                            <strong><mark>GIT</mark></strong>
                                            {
                                                item.git === 'private'
                                                    ? <span>private</span>
                                                    : <span><a href={item.git} target="_blank">{item.git}</a></span>
                                            }
                                        </li>
                                        {
                                            item.viewUrl &&
                                            <li>
                                                <strong><mark>VIEW</mark></strong>
                                                <span><a href={item.viewUrl} className="btn_view" target="_blank">{item.viewUrl}</a></span>
                                            </li>
                                        }
                                        {
                                            item.info &&
                                            <li>
                                                <strong><mark>INFO</mark></strong>
                                                <span><a href={item.info} className="btn_view" target="_blank">{item.info}</a></span>
                                            </li>
                                        }
                                    </ul>
                                </div>
                                <div className={
                                    item.viewUrl !== ""
                                    ? "cpl_pic view"
                                    : "cpl_pic" 
                                }>
                                    {
                                        item.image === ""
                                        ? <img src={`./images/portfolio.jpg`} className="view_img" />
                                        : <img src={`./images/${item.image}`} className="view_img" />
                                    }
                                    
                                    <div className="cplp_info">
                                        {
                                            item.viewUrl !== "" &&
                                            <>
                                                <a href={item.viewUrl} target="_blank"></a>
                                                <strong>VIEW</strong>
                                            </>
                                        }

                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default List;
