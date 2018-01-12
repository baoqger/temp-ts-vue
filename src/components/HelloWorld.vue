<template>
  <div class="hello">
    <Button type="error">ABCD</Button>
  </div>
</template>

<script>
import Vue from 'vue';
// import axios from 'axios';
// import echarts from 'echarts'

export default Vue.extend({
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
