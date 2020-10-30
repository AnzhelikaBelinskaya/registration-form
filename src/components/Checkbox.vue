<template>
  <div class="input__container">
    <label class="input__label">
      {{ field.title }}
      <input
        type="checkbox"
        class="form__input-checkbox"
        v-model="checked"
        @change="$emit('input', checked)"
      />
      <span class="checkmark"></span>
    </label>
  </div>
</template>
        
      
<script>
export default {
  props: ["field"],
  data() {
    return {
      checked: false,
    };
  },
};
</script>

      
<style lang="scss">
.form__input-checkbox {
  display: none;
}
.input__label {
  padding-left: 30px;
  height: 25px;
  line-height: 25px;
  cursor: pointer;
  user-select: none;
  @include tablet {
    height: 30px;
    line-height: 30px;
    margin-right: 30px;
    padding-left: 40px;
  }
  &:hover .checkmark {
    border: 1px solid $blue;
  }
}
.checkmark {
  position: absolute;
  top: -1;
  left: 0;
  min-width: 20px;
  min-height: 20px;
  border: 1px solid $grey;
  border-radius: 3px;
  cursor: pointer;
  @include tablet {
    min-width: 30px;
    min-height: 30px;
  }
}
.form__input-checkbox:checked ~ .checkmark:after {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  display: block;
  min-width: 16px;
  min-height: 16px;
  background-color: $blue;
  border-radius: 3px;
  @include tablet {
    min-width: 26px;
    min-height: 26px;
  }
}
</style>