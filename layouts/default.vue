<template>
  <div class="wrapper">
    <div v-if="loading">loading...</div>
    <template v-else>
      <LayoutsHeader />
      <nuxt />
      <LayoutsFooter />
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    ...mapActions([
      "fetchMenuList",
      "fetchHeaderList",
      "fetchForumMembers",
      "PostMethod",
      "fetchAdvantage",
      "fetchOrganizator",
      "fetchPartner",
      "fetchSpeaker",
      "fetchCounter",
      "fetchAbout",
      "fetchProgram",
      "fetchProgramCategory",

    ]),

    async FetchData() {
      try {
        await this.fetchMenuList({ params: { parent_id: 0 } });
        await this.fetchHeaderList();
        await this.fetchForumMembers();
        await this.fetchAdvantage();
        await this.PostMethod();
        await this.fetchOrganizator();
        await this.fetchPartner();
        await this.fetchSpeaker();
        await this.fetchCounter();
        await this.fetchAbout();
        await this.fetchProgram();
        await this.fetchProgramCategory();

      } catch (error) {
        console.error(error);
      }
    },
  },
  async mounted() {
    this.loading = true;
    await this.FetchData();
    this.loading = false;
  },
};
</script>

<style></style>