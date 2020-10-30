<template>
  <div class="input__container">
    <label>{{ field.title }}</label>
    <select
      :multiple="field.multiple"
      class="form__input"
      :class="{ 'form__input-error': field.validation.$error }"
      v-model="selected"
      @change="$emit('input', selected)"
    >
      <option selected disabled value="" class="form__input-empty"></option>
      <option v-for="option in field.options" :key="option" :value="option" class="form__select">
        {{ option }}
      </option>
    </select>
    <div class="" v-if="field.validation.$error">
      <div class="error" v-if="!field.validation.required">
        Обязательное поле
      </div>
    </div>
  </div>
</template>
        
      
<script>
export default {
  props: ["field"],
  data() {
      return {
          selected: []
      }
  }
};
</script>

<style>