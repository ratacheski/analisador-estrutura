<template>
  <v-row justify="center" align="center">
    <v-col cols="12" md="10">
      <div class="text-center">
        <Estrutura :calculating="calculating" />
        <FormDados @calcular="onCalcular" />
        <v-overlay :value="overlay">
          <Relatorio :dados="dados" @close="overlay = false" />
        </v-overlay>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      calculating: false,
      overlay: false,
      dados: null,
    }
  },
  methods: {
    onCalcular({ carregamentos, dimensoes, arame1, arame2 }) {
      this.calculating = true
      const { fR1, fR2 } = this.calcularResultantes(carregamentos, dimensoes)
      const { vA, vB, vD } = this.calcularApoios(
        carregamentos,
        dimensoes,
        arame1,
        arame2,
        fR1,
        fR2
      )
      const { deformBC, deformDE } = this.calcularDeformacoes(
        arame1,
        arame2,
        vB,
        vD
      )
      const deslocC = this.calcularDeslocamentoC(vB, arame1)
      const deslocE = this.calcularDeslocamentoE(vD, arame2)
      const deslocF = this.calcularDeslocamentoF(deslocC, dimensoes)
      this.dados = {
        vA,
        vB,
        vD,
        deformBC,
        deformDE,
        deslocC,
        deslocE,
        deslocF,
      }
      this.$vuetify.goTo(0, {
        duration: 1000,
        offset: 0,
        easing: 'easeInOutCubic',
      })
      setTimeout(() => this.exibirRelatorio(), 2000)
    },
    exibirRelatorio() {
      this.calculating = false
      this.overlay = true
    },
    calcularResultantes(carregamentos, dimensoes) {
      const fR1 = carregamentos.w * dimensoes.l3
      const fR2 = 2 * carregamentos.w * (dimensoes.l4 + dimensoes.l5)
      return { fR1, fR2 }
    },
    calcularApoios({ p }, { l3, l4, l5 }, arame1, arame2, fR1, fR2) {
      const l1 = arame1.comprimento
      const a1 = arame1.area
      const l2 = arame2.comprimento
      const a2 = arame2.area
      const e1 = arame1.elasticidade
      const e2 = arame2.elasticidade

      const vBPrimeiraParcela =
        l3 * fR1 + (2 * l3 + l4 + l5) * fR2 + 2 * (l3 + l4) * p
      const vBNumerador = vBPrimeiraParcela * l2 * l3 * e1 * a1
      const vBDenominador =
        2 *
        (l2 * (l3 ^ 2) + l1 * (l3 ^ 2) + 2 * l1 * l3 * l4 + l1 * (l4 ^ 2)) *
        e2 *
        a2
      const vB = vBNumerador / vBDenominador
      const vD = ((l1 * (l3 + l4)) / (l2 * l3)) * ((e2 * a2) / (e1 * a1)) * vB
      const vA = fR1 + fR2 + p - vB - vD
      return { vA, vB, vD }
    },
    calcularDeformacoes(arame1, arame2, vB, vD) {
      const deslocBC =
        (vB * arame1.comprimento) / (arame1.elasticidade * arame1.area)
      const deslocDE =
        (vD * arame2.comprimento) / (arame2.elasticidade * arame2.area)
      const deformBC = deslocBC / arame1.comprimento
      const deformDE = deslocDE / arame2.comprimento
      return { deformBC, deformDE }
    },
    calcularDeslocamentoC(vB, arame1) {
      return (vB * arame1.comprimento) / (arame1.elasticidade * arame1.area)
    },
    calcularDeslocamentoE(vD, arame2) {
      return (vD * arame2.comprimento) / (arame2.elasticidade * arame2.area)
    },
    calcularDeslocamentoF(deslocC, { l3, l4, l5 }) {
      return (deslocC * (l3 + l4 + l5)) / l3
    },
  },
}
</script>
