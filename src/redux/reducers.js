import {types} from './types'
import {states} from './states'
import { combineReducers } from 'redux';

const listReducer = (state = states.listState, action) => {
    switch (action.type) {
        case types.GET_LIST_ALL:
            return{
                ...state,
                list:action.list
            };
        case types.GET_LIST_KIND1:
            return{
                ...state,
                list_kind2:[],
                user_chk_kind2:[],
                list_kind1: action.kind === 'ALL'
                        ? state.list
                        : state.list.filter(list=> list.kind1 === action.kind)
            };
        case types.GET_LIST_KIND2:
            return{
                ...state,
                list_kind2: action.kinds
            }
        case types.USER_CHK_KIND2:
            return{
                ...state,
                user_chk_kind2: action.kinds
            }
        case types.GET_INPUT_REF:
            return{
                ...state,
                inputRef: action.refs
            }
        case types.SET_LIST_COUNTING:
            return{
                ...state,
                listCounting: action.count
            }
        case types.IS_SHOW_BTN_MORE:
            return{
                ...state,
                isShowBtnMore: action.isShow
            }
        default:
            return state; // 기본 값 설정. 파라미터가 undefiend인 경우를 대비
    }
}


export const reducers = combineReducers({
    listStates:listReducer,
    //
})