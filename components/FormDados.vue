<template>
  <v-card>
    <v-card-title class="justify-center">Dados para cálculo</v-card-title>
    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="w"
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
                v-model="p"
                type="number"
                label="P"
                :rules="rules.pRules"
                min="0"
                hint="Valor da força pontual P"
                suffix="KN"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="sigma"
                type="number"
                label="σ"
                :rules="rules.sigmaRules"
                min="0"
                hint="Limite de escoamento do arame"
                suffix="MPa"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="elasticidade"
                type="number"
                :rules="rules.elasticidadeRules"
                label="E"
                min="0"
                hint="Módulo de elasticidade do arame"
                suffix="MPa"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="l1"
                type="number"
                :rules="rules.comprimentoRules"
                label="L1"
                min="0"
                hint="comprimento do primeiro arame"
                suffix="metros"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="l2"
                type="number"
                label="L2"
                :rules="rules.comprimentoRules"
                min="0"
                hint="comprimento do segundo arame"
                suffix="metros"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="l3"
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
                v-model="l4"
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
                v-model="l5"
                type="number"
                label="L5"
                :rules="rules.comprimentoRules"
                min="0"
                hint="comprimento L5"
                suffix="metros"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>
    <v-card-actions class="justify-center">
      <v-btn color="success" outlined @click="calcular">
        Calcular
        <v-icon right dark> mdi-calculator </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      l1: null,
      l2: null,
      l3: null,
      l4: null,
      l5: null,
      w: null,
      p: null,
      elasticidade: null,
      sigma: null,
      rules: {
        comprimentoRules: [(v) => !!v || 'Comprimento é obrigatório'],
        wRules: [(v) => !!v || 'w é obrigatório'],
        pRules: [(v) => !!v || 'P é obrigatório'],
        elasticidadeRules: [
          (v) => !!v || 'Módulo de elasticidade é obrigatório',
        ],
        sigmaRules: [(v) => !!v || 'Limite de escoamento é obrigatório'],
      },
    }
  },
  methods: {
    calcular() {
      if (this.$refs.form.validate()) {
        alert('Irá calcular')
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
