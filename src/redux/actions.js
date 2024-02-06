import {types} from './types'

// 모든 항목 불러오기
export const getListAll = (jsonData) => ({
    type:types.GET_LIST_ALL,
    list:jsonData
});

// KIND1 list
export const getListKind1 = (kindname) => ({
    type:types.GET_LIST_KIND1,
    kind:kindname
});

// KIND2 list
export const getListKind2 = (kinds) => ({
    type:types.GET_LIST_KIND2,
    kinds:kinds
});

// 화면에서 사용자가 클릭한 스킬 목록 
export const userChkKind2 = (kinds) => ({
    type:types.USER_CHK_KIND2,
    kinds:kinds
});


// kind2 checkbox style 제어를 위해 ref를 모두 가져옴
export const getInputRef = (refs) => ({
    type:types.GET_INPUT_REF,
    refs:refs
});

// 몇개까지 보여줄지 셋팅, more버튼 누를때마다 5개씩 추가
export const setListCounting = (list) => ({
    type:types.SET_LIST_COUNTING,
    count:list
});

// more 버튼 show / hide
export const setIsShowBtnMore = (trueFalse) => ({
    type:types.IS_SHOW_BTN_MORE,
    isShow:trueFalse
});




export const actions = {
    getListAll,
    getListKind1,
    getListKind2,
    userChkKind2,
    getInputRef,
    setListCounting,
    setIsShowBtnMore,
}