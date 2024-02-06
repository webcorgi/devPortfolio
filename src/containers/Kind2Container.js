import React, {useEffect, useCallback, useRef} from 'react';
import Kind2 from '../components/Kind2';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../redux/actions'

function Kind2Container() {
    const dispatch = useDispatch();
    const { list_kind1, kind2, user_chk_kind2 } = useSelector(state => state.listStates)

    const onUserChkKind2 = (e) => dispatch(actions.userChkKind2(e));
    const onGetListKind2 = (e) => dispatch(actions.getListKind2(e));
    const resetCounting = () => dispatch(actions.setListCounting(5));
    const clickButton = (checkbox) => {
        resetCounting();
        changeSkillList(checkbox)
    };

    // kind1 클릭시 kind2 button active style을 모두 해제하기 위해 store에 등록
    const kind2InputRef = useRef([]);
    const onGetInputRef = (refs) => dispatch(actions.getInputRef(refs));
    useEffect(() => onGetInputRef(kind2InputRef) , [kind2InputRef]);


    /**
     * @name changeSkillList
     * @param {checkbox} 
     * @description 유저가 화면에서 체크한 스킬 리스트 store에 등록
     */
    const changeSkillList = (checkbox) => {
        if( checkbox.target.value == undefined ) return;
        const userchk_skill = user_chk_kind2.slice(); // 복사해서 사용
        const indexof = userchk_skill.indexOf(checkbox.target.value); 

        if( checkbox.target.checked === true && indexof === -1 ) {       // kind선택 했고, 배열안에 없다면
            userchk_skill.push(checkbox.target.value); // 추가
        }else if( checkbox.target.checked === false && indexof !== -1 ){ // kind선택 지웠고, 배열안에 있다면
            userchk_skill.splice( indexof, 1 ); // 제거
        }
        kind2Calculator(userchk_skill);
    }


    /**
     * @name kind2Calculator 
     * @param {유저가 화면상에 체크한 스킬} userchk_skill 
     * @description 화면상에 띄울 리스트인 list_kind2 를 계산
     *              1) 유저가 체크한 스킬에 모두 포함되는지, 각 리스트 모두 체크
     *              2) 중복값 모두 제거
     */
    const kind2Calculator = (userchk_skill) => {
        try{
            let listResult = [];

            for(let k=0; k<list_kind1.length; k++){
                let chk = false; // chk => 2) 중복값 모두 제거 
                for(let i=0; i<userchk_skill.length; i++){
                    if(list_kind1[k].kind2.indexOf(userchk_skill[i]) !== -1){
                        chk = true;
                    }else{
                        chk = false;
                        break;
                    }
                }
                if( chk === true ) listResult.push(list_kind1[k]) // 중복 아니면 push
            }
            
            onUserChkKind2(userchk_skill);
            onGetListKind2(listResult);
            // console.log("🚀 ~ file: kind2Container.js ~ line 69 ~ kind2Calculator ~ listResult", listResult)
        }catch(error){
            console.log(error)
        }
    }


    return (
        <Kind2
            kind2={kind2}
            clickButton={clickButton}
            inputRef={kind2InputRef}
        />
    );
}

export default Kind2Container;
