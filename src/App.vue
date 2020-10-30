<template>
  <div class="app__wrapper">
    <form id="app" class="form__container">
      <div class="form__header">Регистрация</div>
      <div class="form__section">
        Клиент
        <div class="input__wrapper">
          <TextInput
            :field="getField('surname')"
            v-model.trim="$v.surname.$model"
          />

          <TextInput :field="getField('name')" v-model.trim="$v.name.$model" />
          <TextInput
            :field="getField('patronimic')"
            v-model.trim="$v.patronimic.$model"
          />

          <TextInput
            :field="getField('birthdate')"
            v-model.trim="$v.birthdate.$model"
          />
          <TextInput
            :field="getField('phone')"
            v-model.number="$v.phone.$model"
          />
          <RadioButton
            :field="getField('gender')"
            v-model.trim="$v.gender.$model"
          />
        </div>
        <div class="input__wrapper">
          
          <Select :field="getField('doctor')" v-model="$v.doctor.$model" />
          <Select :field="getField('group')" v-model="$v.group.$model" />
          <Checkbox :field="getField('nosms')" v-model="$v.nosms.$model" />
        </div>
      </div>
      <div class="form__section">
        Адрес
        <div class="input__wrapper">
          <TextInput
            :field="getField('index')"
            v-model.trim="$v.index.$model"
          />
          <TextInput :field="getField('country')" v-model="$v.country.$model" />
          <TextInput :field="getField('region')" v-model="$v.region.$model" />
        </div>
        <div class="input__wrapper">
          <TextInput :field="getField('city')" v-model="$v.city.$model" />
          <TextInput :field="getField('street')" v-model="$v.street.$model" />
          <TextInput :field="getField('house')" v-model="$v.house.$model" />
        </div>
      </div>
      <div class="form__section">
        Документ
        <div class="input__wrapper">
          <Select
            :field="getField('documenttype')"
            v-model="$v.documenttype.$model"
          />
          <TextInput :field="getField('SN')" v-model.trim="$v.SN.$model" />
          <TextInput
            :field="getField('number')"
            v-model.trim="$v.number.$model"
          />
        </div>
        <div class="input__wrapper">
          <TextInput
            :field="getField('issuedby')"
            v-model="$v.issuedby.$model"
          />
          <TextInput
            :field="getField('issuedate')"
            v-model.trim="$v.issuedate.$model"
          />
        </div>
      </div>
      <Button title="Создать карту" @click="submit()" />
    </form>
    <Modal v-if="modalIsOpened" @hideModal="hideModal" :title="message" />
  </div>
</template>

<script>
// import Personal from "./components/Personal";
import TextInput from "./components/TextInput";
import Select from "./components/Select";
import Checkbox from "./components/Checkbox";
import RadioButton from "./components/RadioButton";
import Modal from "./components/Modal";
import Button from "./components/Button";
import { fields } from "../data/fields";

export default {
  components: {
    TextInput,
    Select,
    Checkbox,
    RadioButton,
    Modal,
    Button,
  },
  data: function () {
    return fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {
      modalIsOpened: false,
      message: "",
    });
  },

  validations: fields.reduce(
    (acc, field) => ({ ...acc, [field.name]: field.validations || {} }),
    {}
  ),
  methods: {
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.message = "Пожалуйста, введите корректные данные";
      } else {
        this.message = "Новый клиент успешно создан!";
      }
      this.modalIsOpened = true;
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    getField(name) {
      const field = fields.find((field) => field.name === name);
      return {
        ...field,
        validation: this.$v[name],
      };
    },
    hideModal: function () {
      this.modalIsOpened = false;
    },
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
.form__container {
  width: 80%;
  margin: 50px auto;
  padding: 30px 0;
  font-family: "Montserrat", sans-serif;
  outline: none;
  border-radius: 3px;
  box-shadow: -5px 5px 68px -6px $shadow;
  @include tablet {
    width: 99%;
    margin: 0;
  }
}
.form__header {
  color: $blue;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  padding: 20px 10px;
}
.form__section {
  @include flexrow(space-around);
  margin: 20px;
  padding: 20px;
  box-shadow: 0px 5px 8px -6px $shadow;
  @include tablet {
    @include flexcol(flex-start);
    margin: 0;
  }
}
.input__wrapper {
  @include flexcol(flex-start);
  margin-top: 30px;
  width: 40%;
  @include tablet {
    width: 99%;
  }
}
.input__container {
  position: relative;
  margin-bottom: 20px;
  width: 100%;
}
.form__input {
  width: 90%;
  display: block;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid $grey;
  border-radius: 3px;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  box-shadow: none;
  -webkit-appearance: none;
  outline: none;


  &:focus {
    border-color: $blue;
  }
  &-inline {
    display: inline-block;
    margin: 5px 10px;
  }
  &-error {
    border-color: $red;
  }
  &-noborder {
    border: none;
    padding: 0;
    @include tablet {
      @include flexcol(flex-start);
    }
  }
  &-empty {
    display: none;
  }
  &::-webkit-inner-spin-button {
    display: none;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  & option:checked {
    background: white -webkit-linear-gradient(bottom, $light-blue 0%, $light-blue
          100%);
  }
}
.error {
  font-size: 11px;
  color: $red;
  margin-bottom: 15px;
  margin-top: -5px;
}
.form__submit-hidden {
  display: none;
}
</style>
