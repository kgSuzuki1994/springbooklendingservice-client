<template>
  <div id="registration" class="container">
    <h3>{{ $route.params.id }} : 登録内容の変更</h3>
    <div class="form-group">
      <el-form ref="form" :model="form" data="BookList" label-width="250px">
        <el-form-item label="ISBN-13">
          <el-input v-model="form.isbn"></el-input>
        </el-form-item>
        <el-form-item label="書籍のタイトル">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="貸し出し状況">
          <div style="float: left">
            <el-select v-model="form.status" placeholder="選択" size="24">
              <el-option
                v-for="(item, key, index) in status_options"
                :key="index"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </el-form-item>
        <el-form-item label="借り主">
          <el-input v-model="form.person" placeholder="レンタル中の場合のみ記載"></el-input>
        </el-form-item>
        <el-button type="success" @click="addBookList">追加</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BookList",
  data() {
    return {
      form: {
        id: undefined,
        isbn: undefined,
        title: undefined,
        status: undefined,
        person: undefined
      },
      status_options: [
        {
          value: "本棚",
          label: "本棚"
        },
        {
          value: "レンタル中",
          label: "レンタル中"
        }
      ],
      bookLists: []
    };
  },
  created: async function() {
    await this.refresh();
  },
  methods: {
    refresh: async function() {
      const res = await axios.get(
        "http://localhost:8080/edit/" + this.$route.params["id"]
      );
      this.BookList = res.data.bookList;
      this.form = this.BookList;

      console.info("id: " + this.$route.params["id"]);
    },
    addBookList: async function() {
      await axios.post(
        "http://localhost:8080/edit/" + this.$route.params["id"],
        this.form
      );

      await this.refresh();
      this.$message({
        shoClose: true,
        message: "修正を受け付けました!",
        type: "success"
      });

      console.log("id: " + this.form);
    }
  }
};
</script>

<style scoped></style>
