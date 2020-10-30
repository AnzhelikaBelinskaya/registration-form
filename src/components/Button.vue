<template>
  <div class="button" @click="onClick">
    {{ title }}
  </div>
</template>

<script>
export default {
  props: ["title"],
  methods: {
    onClick: function () {
      console.log("кнопка");
      this.$emit("click");
    },
  },
};
</script>

<style scoped lang="scss">
.button {
  display: block;
  border: none;
  cursor: pointer;
  width: 30%;
  padding: 10px;
  background-color: $blue;
  color: white;
  border-radius: 3px;
  box-shadow: 0px 5px 10px -4px $shadow;
  text-align: center;
  line-height: 30px;
  margin: 30px auto 0 auto;
  font-size: 18px;
  font-weight: 400;
  &:hover {
      background-color: $light-blue;
  }
  @include tablet {
    width: 40vw;
  }
}
</style>