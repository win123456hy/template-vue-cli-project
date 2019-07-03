if (navigator.userAgent.indexOf('PhantomJS') > -1) {
    window.localStorage.clear()
}

const mutations = {
    updateMe (state, payload) {
        state.me = payload;
        localStorage.setItem("me", JSON.stringify(payload));
    },
};

export default mutations;
