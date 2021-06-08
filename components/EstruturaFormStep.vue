<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-container>
      <h3>Carregamentos</h3>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model.number="w"
            type="number"
            label="w"
            min="0"
            :rules="rules.wRules"
            hint="Valor da carga distribuída"
            suffix="KN/m"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model.number="p"
            type="number"
            label="P"
            :rules="rules.pRules"
            min="0"
            hint="Valor da força pontual P"
            suffix="KN"
          ></v-text-field>
        </v-col>
      </v-row>
      <br />
      <h3>Dimensões</h3>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model.number="l3"
            type="number"
            label="L3"
            :rules="rules.comprimentoRules"
            min="0"
            hint="comprimento L3"
            suffix="metros"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model.number="l4"
            type="number"
            label="L4"
            :rules="rules.comprimentoRules"
            min="0"
            hint="comprimento L4"
            suffix="metros"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model.number="l5"
            type="number"
            label="L5"
            :rules="rules.comprimentoRules"
            min="0"
            hint="comprimento L5"
            suffix="metros"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-slider
            v-model.number="fs"
            label="Fator de Segurança"
            :rules="rules.fsRules"
            min="1"
            max="5"
            step="0.1"
            thumb-label
          ></v-slider>
        </v-col>
      </v-row>
    </v-container>
    <div class="d-flex justify-end">
      <v-btn color="success" class="mr-3" text @click="$emit('step-back')">
        <v-icon left dark> mdi-arrow-left </v-icon>
        Passo Anterior
      </v-btn>
      <v-btn color="success" outlined @click="validateForm">
        Calcular
        <v-icon right dark> mdi-calculator </v-icon>
      </v-btn>
    </div>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      l3: null,
      l4: null,
      l5: null,
      w: null,
      p: null,
      fs: null,
      rules: {
        comprimentoRules: [
          (v) => !!v || 'Comprimento é obrigatório',
          (v) => v > 0 || 'Comprimento deve ser positivo',
        ],
        wRules: [
          (v) => !!v || 'w é obrigatório',
          (v) => v > 0 || 'w deve ser positivo',
        ],
        pRules: [
          (v) => !!v || 'P é obrigatório',
          (v) => v > 0 || 'P deve ser positivo',
        ],
        fsRules: [
          (v) => !!v || 'Fator de Segurança é obrigatório',
          (v) => (v >= 1 && v <= 5) || 'FS deve ser um valor entre 1 e 5',
        ],
      },
    }
  },
  methods: {
    validateForm() {
      if (this.$refs.form.validate()) {
        this.$emit('step-completed', {
          l3: this.l3,
          l4: this.l4,
          l5: this.l5,
          p: this.p,
          w: this.w,
          fs: this.fs,
        })
      } else {
        this.$notifier.showError({
          content:
            'Preencha corretamente os dados da estrutura antes de calcular',
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
