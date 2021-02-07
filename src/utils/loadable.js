import Loading from '@/components/Loading/index.vue';

const loadable = (asyncFUnction) => {
    const component = () => ({
        component: asyncFUnction(),
        loading: Loading,
    });
    return {
        render(h) {
            return h(component)
        }
    }
}

// 路由切换，异步加载过渡loading
export default loadable;