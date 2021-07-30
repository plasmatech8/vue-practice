
const state = {
    user: {}
}

const getters = {
    user: (state) => state.user
}

const actions = {
    async fetchUser({ commit }) {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/7')
        const data = await response.json()
        commit('setUser', data)
    },
    async setUser({ commit }, updateduser) {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${updateduser.id}`,
            {
                method: "PUT",
                body: JSON.stringify(updateduser),
                headers: { "Content-type": "application/json; charset=UTF-8" },
            }
        );
        commit('setUser', await response.json());
        return response;
    },
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