export const state = () => ({
  menu: [],
  header: [],
  detailHeader: [],
  forummembers: [],
  FETCH_ADVANTAGE: [],
  FETCH_ORGANIZATOR: [],
  FETCH_PARTNER: [],
  FETCH_SPEAKER: [],
  FETCH_COUNTER: [],
  POST_METHOD: [],
  FETCH_ABOUT: [],
  FETCH_PROGRAM: [],
  FETCH_PROGRAM_Category: [],
});

export const getters = {
  menu: (state) => {
    return state.menu;
  },
  header: (state) => {
    return state.header;
  },
  detailHeader: (state) => {
    return state.detailHeader;
  },
  forummembers: (state) => {
    return state.forummembers;
  },

  FETCH_ADVANTAGE: (state) => {
    return state.FETCH_ADVANTAGE;
  },
  FETCH_ORGANIZATOR: (state) => {
    return state.FETCH_ORGANIZATOR;
  },
  FETCH_PARTNER: (state) => {
    return state.FETCH_PARTNER;
  },
  FETCH_SPEAKER: (state) => {
    return state.FETCH_SPEAKER;
  },
  POST_METHOD: (state) => {
    return state.POST_METHOD;
  },
  FETCH_COUNTER: (state) => {
    return state.FETCH_COUNTER;
  },
  FETCH_ABOUT: (state) => {
    return state.FETCH_ABOUT;
  },
  FETCH_PROGRAM: (state) => {
    return state.FETCH_PROGRAM;
  },
  FETCH_PROGRAM_Category: (state) => {
    return state.FETCH_PROGRAM_Category;
  },
};

export const mutations = {
  setState(state, { key, payload }) {
    state[key] = payload;
  },
};

export const actions = {
  fetchMenuList({ commit }, { params }) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await this.$axios.get("/site/menu/list", { params });
        const { status, data, message } = res;
        console.log(data, status);
        if (status == 200 || status == 201) {
          commit("setState", {
            key: "menu",
            payload: (data && data.data) || [],
          });
          resolve({ status, data });
        } else {
          reject(message);
        }
      } catch (error) {
        reject(error);
      }
    });
  },
  fetchHeaderList({ commit }) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await this.$axios.get("/site/forum");
        const { status, data, message } = res;
        console.log(data, status);
        if (status == 200 || status == 201) {
          commit("setState", {
            key: "header",
            payload: (data && data.data) || [],
          });
          resolve({ status, data });
        } else {
          reject(message);
        }
      } catch (error) {
        reject(error);
      }
    });
  },
  fetchDetailHeader({ commit }, { id }) {
    console.log(id);
    return new Promise(async (resolve, reject) => {
      try {
        commit("setState", { key: "detailHeader", payload: {} });
        const res = await this.$axios.get(`/site/forum${id}`);
        const { status, data, message } = res;
        if (status == 200 || status == 201) {
          commit("setState", {
            key: "detailHeader",
            payload: data || {},
          });
          resolve({ status, data });
        } else {
          reject(message);
        }
      } catch (error) {
        reject(error);
      }
    });
  },
  fetchForumMembers({ commit }) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await this.$axios.get(
          "site/post/list?post_group=forum-members&order=position+asc"
        );
        const { status, data, message } = res;
        console.log(data, status);
        if (status == 200 || status == 201) {
          commit("setState", {
            key: "forummembers",
            payload: (data && data.data) || [],
          });
          resolve({ status, data });
        } else {
          reject(message);
        }
      } catch (error) {
        reject(error);
      }
    });
  },
  fetchOrganizator({ commit }) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await this.$axios.get(
          "site/post/list?post_group=organizers&order=position+asc"
        );
        const { status, data, message } = res;
        console.log(data, status);
        if (status == 200 || status == 201) {
          commit("setState", {
            key: "FETCH_ORGANIZATOR",
            payload: (data && data.data) || [],
          });
          resolve({ status, data });
        } else {
          reject(message);
        }
      } catch (error) {
        reject(error);
      }
    });
  },
  fetchAdvantage({ commit }) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await this.$axios.get(
          "site/post/list?post_group=advantages&order=position+asc"
        );
        const { status, data, message } = res;
        console.log(data, status);
        if (status == 200 || status == 201) {
          commit("setState", {
            key: "FETCH_ADVANTAGE",
            payload: (data && data.data) || [],
          });
          resolve({ status, data });
        } else {
          reject(message);
        }
      } catch (error) {
        reject(error);
      }
    });
  },
  fetchPartner({ commit }) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await this.$axios.get(
          "site/menu/list?category=partners&parent_id=20&type=2&order=position+asc&with_posts=true"
        );
        const { status, data, message } = res;
        console.log(data, status);
        if (status == 200 || status == 201) {
          commit("setState", {
            key: "FETCH_PARTNER",
            payload: (data && data.data) || [],
          });
          resolve({ status, data });
        } else {
          reject(message);
        }
      } catch (error) {
        reject(error);
      }
    });
  },
  fetchSpeaker({ commit }) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await this.$axios.get(
          "site/post/list?post_group=speakers&order=position+asc&limit=9"
        );
        const { status, data, message } = res;
        console.log(data, status);
        if (status == 200 || status == 201) {
          commit("setState", {
            key: "FETCH_SPEAKER",
            payload: (data && data.data) || [],
          });
          resolve({ status, data });
        } else {
          reject(message);
        }
      } catch (error) {
        reject(error);
      }
    });
  },
  fetchCounter({ commit }) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await this.$axios.get(
          "site/post/list?post_group=counter&has_content=false"
        );
        const { status, data, message } = res;
        console.log(data, status);
        if (status == 200 || status == 201) {
          commit("setState", {
            key: "FETCH_COUNTER",
            payload: (data && data.data) || [],
          });
          resolve({ status, data });
        } else {
          reject(message);
        }
      } catch (error) {
        reject(error);
      }
    });
  },
  fetchAbout({ commit }) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await this.$axios.get("site/post/by-group/about");
        const { status, data, message } = res;
        console.log(data, status);
        if (status == 200 || status == 201) {
          commit("setState", {
            key: "FETCH_ABOUT",
            payload: (data && data.data) || [],
          });
          resolve({ status, data });
        } else {
          reject(message);
        }
      } catch (error) {
        reject(error);
      }
    });
  },
  fetchProgram({ commit }) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await this.$axios.get(
          "site/menu/list?type=2&category=programm"
        );
        const { status, data, message } = res;
        console.log(data, status);
        if (status == 200 || status == 201) {
          commit("setState", {
            key: "FETCH_PROGRAM",
            payload: (data && data.data) || [],
          });
          resolve({ status, data });
        } else {
          reject(message);
        }
      } catch (error) {
        reject(error);
      }
    });
  },
  fetchProgramCategory({ commit }) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await this.$axios.get(
          "site/menu/list?type=2&parent_id=17&category=programm-category&order=position+asc&with_posts=true"
        );
        const { status, data, message } = res;
        console.log(data, status);
        if (status == 200 || status == 201) {
          commit("setState", {
            key: "FETCH_PROGRAM_Category",
            payload: (data && data.data) || [],
          });
          resolve({ status, data });
        } else {
          reject(message);
        }
      } catch (error) {
        reject(error);
      }
    });
  },
  PostMethod({ commit }) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await this.$axios.post("https://app.replain.cc/auth");
        const { status, data, message } = res;
        console.log(data, status);
        if (status == 200 || status == 201) {
          commit("setState", {
            key: "POST_METHOD",
            payload: (data && data.data) || [],
          });
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
