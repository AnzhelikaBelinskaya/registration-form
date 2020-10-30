<template>
  <div class="input__container">
    <label>{{ field.title }}</label>
    <input
      :type="field.type"
      class="form__input"
      :class="{ 'form__input-error':field.validation.$error }"
      @input="$emit('input', $event.target.value)"
      placeholder=" "
    />
    <div class="" v-if="field.validation.$error">
      <div class="error" v-if="!field.validation.required">Обязательное поле</div>
      <div class="error" v-if="field.type==='tel' && !field.validation.phone">Введите номер в формате 7XXXXXXXXXX</div>
    </div>
  </div>
</template>
        
      
<script>
export default {
  props: ["field"],
};
</script>
      
<style>