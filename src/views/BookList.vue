<template>
  <el-row>
    <el-col :span="24">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>書籍一覧</span>
        </div>
        <el-table :data="bookLists" style="width: 100%">
          <el-table-column prop="id" label="書籍ID" width="100" />
          <el-table-column prop="isbn" label="ISBN-13" width="300" />
          <el-table-column prop="title" label="書籍名" width="450" />
          <el-table-column prop="status" label="貸し出し状況" width="150" />
          <el-table-column prop="person" label="貸出人" width="300" />
        </el-table>
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
      bookLists: []
    };
  },
  created: async function() {
    await this.refresh();
  },
  methods: {
    refresh: async function() {
      const res = await axios.get("http://localhost:8080/");
      this.bookLists = res.data.bookLists;
      console.info(this.bookLists);
    }
  }
};
</script>

<style scoped></style>
