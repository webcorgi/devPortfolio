import React, {useEffect, useCallback, useRef, useState} from 'react';
import List from '../components/List'
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../redux/actions'
import listData from "../json/list.json";
import BtnMore from '../components/BtnMore';


function ListContainer() {
    const dispatch = useDispatch();

    const { list_kind2, listCounting, isShowBtnMore } = useSelector(state => state.listStates)

    const onGetListAll = () => dispatch(actions.getListAll(listData))
    const onGetListKind1 = (kind) => dispatch(actions.getListKind1(kind))
    const onGetListKind2 = () => dispatch(actions.getListKind2(listData))
    const onSetIsShowBtnMore = (trueFalse) => dispatch(actions.setIsShowBtnMore(trueFalse))
    const onSetListCounting = () => dispatch(actions.setListCounting(listCounting + 5))


    // 최초 실행 시 list 박스 3개 배열에 모두 담기
    useEffect(() => {
        onGetListAll();
        onGetListKind1('ALL');
        onGetListKind2();
    }, []);

/*
    useEffect(() => {
        console.log("🚀 ~ file: ListContainer.js ~ line 37 ~ ListContainer ~ list", list)
        console.log("🚀 ~ file: ListContainer.js ~ line 38 ~ ListContainer ~ list_kind1", list_kind1)
        console.log("🚀 ~ file: ListContainer.js ~ line 39 ~ ListContainer ~ list_kind2", list_kind2)
    }, [list, list_kind1, list_kind2 ]);
*/

    // infinite scroll ( list 스크롤 아래로 내렸을 때 추가 출력하기 )

    // 감시할 타겟 생성
    const fetchMoreTrigger = useRef(null);

    // 감시자 생성
    const fetchMoreObserver = new IntersectionObserver(([{ isIntersecting }]) => {
        if(isIntersecting) onSetListCounting();
    })

    // 타겟 감시
    useEffect(() => {
        fetchMoreObserver.observe(fetchMoreTrigger.current);
        return () => {
            fetchMoreObserver.unobserve(fetchMoreTrigger.current);
        };
    }, [listCounting]); // listCounting이 바껴서 함수가 호출되지 않는 에러때문에 count기준으로 리옵져빙


    // more 버튼 show / hide ( observe 오류날 경우를 대비, 버튼 생성 )
    useEffect(() => {
        if( list_kind2.length < listCounting ){
            onSetIsShowBtnMore(false)
        }else{
            onSetIsShowBtnMore(true)
        }
    }, [list_kind2, listCounting]);


    return (
        <>
            <h4>총 개수 : {list_kind2.length}</h4>
            <List
                list={list_kind2.slice(0, listCounting)}
            />
            <BtnMore
                isShowBtnMore={isShowBtnMore}
                fetchMoreTrigger={fetchMoreTrigger}
                onSetListCounting={onSetListCounting}
            />
        </>
    );
}

export default ListContainer;
