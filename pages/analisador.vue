<template>
  <v-row justify="center" align="center">
    <v-col cols="12" md="10">
      <div class="text-center">
        <Estrutura :calculating="calculating" />
        <FormDados @calcular="onCalcular" />
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      calculating: false,
    }
  },
  methods: {
    onCalcular({ carregamentos, dimensoes, arame1, arame2 }) {
      const { fR1, fR2 } = this.calcularResultantes(carregamentos, dimensoes)
      console.log(fR1, fR2)
      this.calculating = true
      setTimeout(() => (this.calculating = false), 5000)
    },
    calcularResultantes(carregamentos, dimensoes) {
      const fR1 = carregamentos.w * dimensoes.l3
      const fR2 = 2 * carregamentos.w * (dimensoes.l4 + dimensoes.l5)
      return { fR1, fR2 }
    },
  },
}
</script>
