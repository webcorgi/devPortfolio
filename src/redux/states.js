const listState = {
    list: [],        // LIST ALL
    list_kind1: [],  // LIST ALL, WEB, APP, HYBRID
    list_kind2: [],  // LIST ...ETC skill kinds
    kind1: ['ALL', 'WEB', 'APP', 'HYBRID'],
    kind2: ['react', 'reactNative', 'vue', 'webview', 'redux', 'contextAPI', 'sass', 'styledComponent', 'api', 'expo', 'websocket', 'jsp', 'oracle', 'sql', 'graphql', 'apollo', 'cssModule', 'nextjs', 'nodejs', 'crawling'],
    user_chk_kind2: [],
    inputRef: [],
    listCounting: 5, // 몇개까지 보여줄지 셋팅, more버튼 누를때마다 5개씩 추가
    isShowBtnMore: true,
}

export const states = {
    listState,
    //
}