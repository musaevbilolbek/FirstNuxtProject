export const state = () => ({
  listLang: [],
});

export const getters = {
  listLang: (state) => {
    return state.listLang;
  },
};

export const mutations = {
  setState(state, { key, payload }) {
    state[key] = payload;
  },
};

export const actions = {
  fetchData({ commit }) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await this.$axios.get("/site/menu/list");
        const { status, data, message } = res;
        if (status == 200 || status == 201) {
          commit("setState", { key: "listLang", payload: data || [] });
          resolve({ status, data });
        } else {
          reject(message);
        }
      } catch (error) {
        reject(error);
      }
    });
  },
};
