<template>
  <div id="app">
    <textarea rows="10" v-model="text"></textarea>
    <br>
    <FileReaderButton @load="text = $event"></FileReaderButton>
  </div>
</template>

<script>
import FileReaderButton from "./FileReaderButton.vue";

export default {
  name: "app",
  props: {
    text: String
  },
  data: () => ({ text: "" }),
  components: {
    FileReaderButton
  }
};
</script>