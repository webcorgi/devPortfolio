const listState = {
    list: [],        // LIST ALL
    list_kind1: [],  // LIST ALL, WEB, APP, HYBRID
    list_kind2: [],  // LIST ...ETC skill kinds
    kind1: ['ALL', 'WEB', 'APP', 'HYBRID'],
    kind2: ['react', 'vue', 'nodejs', 'graphql', 'apollo', 'nextjs', 'reactNative', 'jsp', 'sql', 'naverCloud', 'mysql', 'mongodb', 'mongoose', 'typescript', 'R3F', 'nestjs', 'supabase', 'firebase', 'tailwind', 'recoil','reactQuery', 'echarts'],
    user_chk_kind2: [],
    inputRef: [],
    listCounting: 5, // 몇개까지 보여줄지 셋팅, more버튼 누를때마다 5개씩 추가
    isShowBtnMore: true,
}

export const states = {
    listState,
    //
}