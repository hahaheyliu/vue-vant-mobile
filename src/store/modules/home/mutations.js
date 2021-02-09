import * as Types from '@/store/action-types';

const mutations = {
    [Types.SET_CATEGORY](state, payload) { // 修改分类状态
        state.category = payload;
    },
};

export default mutations;