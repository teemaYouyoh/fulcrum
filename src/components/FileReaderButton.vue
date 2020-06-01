<template>
  <label class="text-reader">
    Завантажити файл
    <input type="file" @change="loadTextFromFile">
  </label>
</template>

<script>
export default {
  methods: {
    loadTextFromFile(ev) {
      const file = ev.target.files[0];
      const reader = new FileReader();

      reader.onload = e => this.$emit("load", e.target.result);
      reader.readAsText(file);
    }
  }
};
</script>

<style>
.text-reader {
  position: relative;
  overflow: hidden;
  display: inline-block;
  text-align: center;
    /* margin: 0 auto; */
    padding: 1.25%;
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
    border-radius: 25px;
    cursor: pointer;
    font-weight: 500;
    font-size: 1.05rem;
    width: 20%;
    text-transform: uppercase;
    transition: 0.5s;
  /* Fancy button style 😎 */
  /* border: 2px solid black; */
  /* border-radius: 5px; */
  /* padding: 8px 12px; */
  /* cursor: pointer; */
}

.text-reader:hover {
  color: #FFF;
  background-color: #000;
}

.text-reader:focus {
  outline: none;
}

.text-reader input {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0;
}
</style>