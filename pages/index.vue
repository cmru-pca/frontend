<template>
  <div>
    <v-card class="mt-5">
      <v-card-title class="text-center justify-center text-h6"
        >ตารางคะแนน Sci Freshy CMRU 64</v-card-title
      >
      <v-card-subtitle class="text-center justify-center overline"
        >อัพเดพเมื่อ: {{ member.updated_at }}
      </v-card-subtitle>

      <v-divider class="mt-1 mb-1"></v-divider>

      <v-card-text>
        <v-data-table
          :headers="headers"
          :loading="loading != true"
          :items="member.data"
          item-key="name"
          disable-pagination
          hide-default-footer
        >
          <template #[`item._id`]="{ item }">
            {{ item.type }}{{ item.id }}
          </template>

          <template #[`item.data.point`]="{ item }">
            {{ item.data.point.toLocaleString() }}
          </template>

          <template #[`item.data.like`]="{ item }">
            {{ item.data.like.toLocaleString() }}
          </template>

          <template #[`item.data.share`]="{ item }">
            {{ item.data.share.toLocaleString() }}
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </div>
</template>


<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "#",
          align: "start",
          value: "_id",
          sortable: false,
        },
        { text: "ชื่อ", value: "name", sortable: false },
        { text: "สาขา", value: "major", sortable: false },
        { text: "คะแนนรวม", value: "data.point" },
        { text: "คะแนน Like", value: "data.like" },
        { text: "คะแนน Share", value: "data.share" },
      ],
    };
  },

  async asyncData() {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/cmru-pca/scraper/main/data/member.json"
      );
      if (response.status === 200) {
        let response_json = await response.json();

        return {
          loading: true,
          member: response_json,
        };
      }
    } catch (err) {
      if (e.message === "Network Error") {
        return {
          member: [],
        };
      }
    }
  },
};
</script>
