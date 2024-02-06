import React, {useEffect, useCallback, useRef} from 'react';
import Kind1 from '../components/Kind1';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../redux/actions'


function Kind1Container() {
    const dispatch = useDispatch();
    const { kind1, list_kind1, inputRef } = useSelector(state => state.listStates)

    const clickButton = (e) => {
        buttonStyle(e);
        uncheckedInput();
        onGetListKind1(e.target.attributes.kind.nodeValue);
        resetCounting();
    }

    // 보여줄 리스트 개수 초기화
    const resetCounting = () => {
        dispatch(actions.setListCounting(5))
    }

    // 화면에 띄울 list_kind1 업데이트
    const onGetListKind1 = (kind1) => {
        dispatch(actions.getListKind1(kind1))
    }

    // kind1 Button on/off style
    const buttonStyle = (e) => {
        e.target.parentNode.childNodes.forEach(e => e.classList.remove('on')) // on 제거
        e.target.classList.add('on') // on 추가
    }

    // input checkbox 전체 해제
    const uncheckedInput = () => {
        inputRef.current.map(input => input.checked = false)
    }

    // list_kind1이 바뀌면 list_kind2에도 담아 화면에 최종 리스트 출력
    useEffect(() => {
        dispatch(actions.getListKind2(list_kind1))
    }, [list_kind1]);

    
    return (
        <Kind1
            kind1={kind1}
            clickButton={clickButton}
        />
    );
}

export default Kind1Container;
