<template>
  <Page>
    <bookmarks></bookmarks>
  </Page>
</template>

<script>
import bookmarks from "./BookMarks";
export default {
  data() {
    return {
      msg: "Hello World!"
    };
  },
  components: {
    bookmarks
  }
};
</script>

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}
</style>
