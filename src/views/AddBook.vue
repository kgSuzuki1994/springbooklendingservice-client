<template>
  <div id="registration" class="container">
    <h3>新しい書籍を登録</h3>
    <div class="form-group">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item>
          <el-form-item label="isbn">
            <el-input v-model="form.isbn"></el-input>
          </el-form-item>
        </el-form-item>
        <el-form-item>
          <el-form-item label="title">
            <el-input v-model="form.title"></el-input>
          </el-form-item>
        </el-form-item>
        <el-form-item>
          <el-form-item label="status">
            <el-select v-model="value" placeholder="Select">
              <el-option
                v-for="(item, key, index) in status_options"
                :key="index"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-form-item>
        <el-form-item>
          <el-form-item label="person">
            <el-input v-model="form.person"></el-input>
          </el-form-item>
        </el-form-item>
        <el-col :span="8">
          <el-button type="success" @click="addBookList">追加</el-button>
        </el-col>
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
    addBookList: async function() {
      await axios.post("http://localhost:8080/", this.form);
      await this.refresh();
    }
  }
};
</script>

<style scoped></style>
