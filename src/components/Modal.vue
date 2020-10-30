<template>
  <div class="modal__wrapper" @click.self="hideModal">
    <div class="modal__window">
      <div class="modal__message">
        {{ title }}
        <Button title="OK" @click="hideModal" />
      </div>
    </div>
  </div>
</template>


<script>
import Button from "./Button";
export default {
  props: ["title"],
  components: { Button },
  methods: {
    hideModal() {
      console.log("modal");
      this.$emit("hideModal");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal__wrapper {
  position: fixed;
  z-index: 100;
  background-color: $modal-bg;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.modal__window {
  position: relative;
  margin: 30vh auto;
  width: 30%;
  @include tablet {
      width: 70%;
  }
}
.modal__message {
  width: 80%;
  padding: 30px;
  background-color: white;
  text-align: center;
  margin-bottom: 2vw;
  font-size: 18px;
  color: $red;
  font-weight: 600;
  border-radius: 3px;
}
</style>