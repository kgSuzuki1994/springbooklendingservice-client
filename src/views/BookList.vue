<template>
  <el-row>
    <el-col :span="24">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>書籍一覧</span>
        </div>
        <div>...</div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import axios from "axios";

export default {
  name: "BookList",
  data() {
    return {
      booklists: []
    };
  },
  created: async function() {
    await this.refresh();
  },
  methods: {
    refresh: async function() {
      const res = await axios.get("http://localhost:8080/");
      this.booklists = res.data.booklists;
      console.info(this.booklists);
    }
  }
};
</script>

<style scoped></style>
