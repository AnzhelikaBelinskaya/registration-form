<template>
  <div class="input__container">
    {{ field.title }}
    <div class="form__input form__input-noborder">
      <label v-for="option in field.options" :key="option" class="input__label">
        <input
          :name="field.name"
          :value="option"
          type="radio"
          @change="$emit('input', $event.target.value)"
          class="form__input-radio"
        />{{ option }}
        <span class="checkmark"></span>
      </label>
    </div>
  </div>
</template>
        
      
<script>
export default {
  props: ["field"],
};
</script>

<style lang="scss">
input[type=text] {
-webkit-appearance: none;
}
.form__input-radio {
  display: none;
}
.input__label {
  position: relative;
  padding-left: 30px;
  height: 25px;
  line-height: 25px;
  cursor: pointer;
  user-select: none;
  margin-right: 20px;
  
  @include tablet {
    height: 30px;
    line-height: 30px;
    padding-left: 40px;
    margin: 15px 0;
  }
  &:hover .checkmark {
    border: 1px solid $blue;
  }
}
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  border: 1px solid $grey;
  border-radius: 3px;
  cursor: pointer;
  @include tablet {
    width: 30px;
    height: 30px;
  }
}
.form__input-radio:checked ~ .checkmark:after {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  display: block;
  width: 16px;
  height: 16px;
  background-color: $blue;
  border-radius: 3px;
  @include tablet {
    min-width: 26px;
    min-height: 26px;
  }
}
</style>
