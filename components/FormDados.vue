<template>
  <v-card>
    <v-card-title class="justify-center">Dados para cálculo</v-card-title>
    <v-card-text>
      <v-stepper v-model="stepper">
        <v-stepper-header>
          <v-divider></v-divider>
          <v-stepper-step :complete="stepper > 1" step="1">
            Propriedades dos Arames
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step :complete="stepper > 2" step="2">
            Carregamentos e Dimensões da Estrutura
          </v-stepper-step>
          <v-divider></v-divider>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content step="1">
            <arame-form-step @step-completed="completeArameForm" />
          </v-stepper-content>
          <v-stepper-content step="2">
            <estrutura-form-step
              @step-completed="calcular"
              @step-back="stepper = 1"
            />
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      stepper: 1,
      arame1: {},
      arame2: {},
    }
  },
  methods: {
    completeArameForm({ arame1, arame2 }) {
      this.stepper++
      this.arame1 = { ...arame1 }
      this.arame2 = { ...arame2 }
    },
    calcular({ l3, l4, l5, p, w }) {
      this.$emit('calcular', {
        dimensoes: {
          l3,
          l4,
          l5,
        },
        carregamentos: {
          p: p * 1e3,
          w: w * 1e3,
        },
        arame1: {
          elasticidade: this.arame1.elasticidade * 1e9,
          sigma: this.arame1.sigma * 1e6,
          comprimento: this.arame1.comprimento,
          area: this.arame1.area * 1e-6,
        },
        arame2: {
          elasticidade: this.arame2.elasticidade * 1e9,
          sigma: this.arame2.sigma * 1e6,
          comprimento: this.arame2.comprimento,
          area: this.arame2.area * 1e-6,
        },
      })
    },
  },
}
</script>
