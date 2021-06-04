<template>
  <v-row justify="center" align="center">
    <v-col cols="12" md="10">
      <div class="text-center">
        <Estrutura
          :calculating="calculating"
          :broken1="broken1"
          :broken2="broken2"
        />
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
      broken1: false,
      broken2: false,
      calculating: false,
      overlay: false,
      dados: null,
    }
  },
  methods: {
    onCalcular({ carregamentos, dimensoes, arame1, arame2 }) {
      this.calculating = true
      this.broken1 = false
      this.broken2 = false
      const { deformMaxBC, deformMaxDE } = this.calcularDeformacoesMaximas(
        arame1,
        arame2
      )
      const { fR1, fR2 } = this.calcularResultantes(carregamentos, dimensoes)
      const { vA, vB, vD } = this.calcularApoios(
        carregamentos,
        dimensoes,
        arame1,
        arame2,
        fR1,
        fR2
      )
      const deslocC = this.calcularDeslocamento(vB, arame1)
      const deslocE = this.calcularDeslocamento(vD, arame2)
      const deslocF = this.calcularDeslocamentoF(deslocC, dimensoes)
      const { deformBC, deformDE } = this.calcularDeformacoes(
        arame1,
        arame2,
        vB,
        vD
      )
      if (deformBC > deformMaxBC) {
        if (deformDE > deformMaxDE) {
          this.$vuetify.goTo(0, {
            duration: 1000,
            offset: 0,
            easing: 'easeInOutCubic',
          })
          setTimeout(() => {
            this.$notifier.showError({
              content:
                'Os dois arames ultrapassaram as deformações máximas suportadas dado o carregamento.',
            })
            this.broken1 = true
            this.broken2 = true
            this.calculating = false
          }, 2000)
          return
        } else {
          setTimeout(() => {
            this.$notifier.showError({
              content:
                'O arame 1 ultrapassou a deformação máxima suportada dado o carregamento.',
            })
            this.broken1 = true
            this.broken2 = false
            this.calculating = false
          }, 2000)
          return
        }
      } else if (deformDE > deformMaxDE) {
        setTimeout(() => {
          this.$notifier.showError({
            content:
              'O arame 2 ultrapassou a deformação máxima suportada dado o carregamento.',
          })
          this.broken1 = false
          this.broken2 = true
          this.calculating = false
        }, 2000)
        return
      }
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
      this.broken1 = false
      this.broken2 = false
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
        2 * (l2 * (l3 ^ 2) * e1 * a1 + ((l3 + l4) ^ 2) * l1 * e2 * a2)
      const vB = vBNumerador / vBDenominador
      const vD = ((l1 * (l3 + l4)) / (l2 * l3)) * ((e2 * a2) / (e1 * a1)) * vB
      const vA = fR1 + fR2 + p - vB - vD
      return { vA, vB, vD }
    },
    calcularDeformacoesMaximas(arame1, arame2) {
      const deformMaxBC = arame1.sigma / arame1.elasticidade
      const deformMaxDE = arame2.sigma / arame2.elasticidade
      return { deformMaxBC, deformMaxDE }
    },
    calcularDeformacoes(arame1, arame2, vB, vD) {
      const deslocBC = this.calcularDeslocamento(vB, arame1)
      const deslocDE = this.calcularDeslocamento(vD, arame2)
      const deformBC = deslocBC / arame1.comprimento
      const deformDE = deslocDE / arame2.comprimento
      return { deformBC, deformDE }
    },
    calcularDeslocamento(v, arame) {
      return (v * arame.comprimento) / (arame.elasticidade * arame.area)
    },
    calcularDeslocamentoF(deslocC, { l3, l4, l5 }) {
      return (deslocC * (l3 + l4 + l5)) / l3
    },
  },
}
</script>
