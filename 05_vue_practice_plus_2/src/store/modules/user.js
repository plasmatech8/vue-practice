
const state = {
    user: {

    }
}

const getters = {
    user: (state) => state.user
}

const actions = {
    async fetchUser({ commit }) {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/7')
        const data = await response.json()
        console.log(data)
        console.log(commit)
        commit('setUser', data)
    }
}

const mutations = {
    setUser: (state, user) => (state.user = user)
}

export default {
    state,
    getters,
    actions,
    mutations
}