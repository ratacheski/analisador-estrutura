<template>
  <v-card
    v-click-outside="onClickOutside"
    class="mx-auto overflow-y-auto"
    max-height="90vh"
  >
    <Estrutura v-if="!$vuetify.breakpoint.mobile" style="width: 80%" />

    <v-card-title class="justify-center"> Resultados </v-card-title>

    <v-divider></v-divider>

    <v-card-text class="d-lg-flex flex-row">
      <div>
        <h3>Reações de Apoio</h3>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-weight-lifter</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle class="text-left"
            >Va = {{ calcularString('vA') }}</v-list-item-subtitle
          >
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-weight-lifter</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle class="text-left"
            >Vb = {{ calcularString('vB') }}</v-list-item-subtitle
          >
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-weight-lifter</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle class="text-left"
            >Vd = {{ calcularString('vD') }}</v-list-item-subtitle
          >
        </v-list-item>
      </div>
      <v-divider :vertical="!$vuetify.breakpoint.mobile" />
      <div>
        <h3 class="mt-2 mt-md-0">Deformações</h3>
        <v-list-item class="">
          <v-list-item-icon>
            <v-icon>mdi-scale</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle class="text-left"
            >Ɛ<sub>BC</sub> =
            {{ calcularString('deformBC') }}</v-list-item-subtitle
          >
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-scale</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle class="text-left"
            >Ɛ<sub>DE</sub> =
            {{ calcularString('deformDE') }}</v-list-item-subtitle
          >
        </v-list-item>
      </div>
      <v-divider :vertical="!$vuetify.breakpoint.mobile" />
      <div>
        <h3 class="mt-2 mt-md-0">Deslocamentos</h3>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-map-marker</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle class="text-left"
            >δ<sub>C</sub> =
            {{ calcularString('deslocC') }}</v-list-item-subtitle
          >
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-map-marker</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle class="text-left"
            >δ<sub>E</sub> =
            {{ calcularString('deslocE') }}</v-list-item-subtitle
          >
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-map-marker</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle class="text-left"
            >δ<sub>F</sub> =
            {{ calcularString('deslocF') }}</v-list-item-subtitle
          >
        </v-list-item>
      </div>
    </v-card-text>
    <v-card-actions class="d-flex justify-center mb-2">
      <v-btn color="success" outlined @click="gerarRelatorio">
        Gerar Relatório
        <v-icon right dark> mdi-file-chart </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { jsPDF } from 'jspdf'
export default {
  props: {
    dados: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      unidadeMedida: {
        vA: 'N',
        vB: 'N',
        vD: 'N',
        deformBC: 'm',
        deformDE: 'm',
        deslocC: 'm',
        deslocE: 'm',
        deslocF: 'm',
      },
    }
  },
  methods: {
    onClickOutside() {
      this.$emit('close')
    },
    calcularString(valor) {
      const valorCheio = this.dados[valor]
      if (Math.abs(valorCheio) >= 0.8e9) {
        return (
          this.roundValue(valorCheio / 1e9) + ' G' + this.unidadeMedida[valor]
        )
      } else if (Math.abs(valorCheio) >= 0.8e6) {
        return (
          this.roundValue(valorCheio / 1e6) + ' M' + this.unidadeMedida[valor]
        )
      } else if (Math.abs(valorCheio) >= 0.8e3) {
        return (
          this.roundValue(valorCheio / 1e3) + ' K' + this.unidadeMedida[valor]
        )
      } else if (Math.abs(valorCheio) >= 0.8) {
        return this.roundValue(valorCheio) + ' ' + this.unidadeMedida[valor]
      } else if (Math.abs(valorCheio) >= 0.8e-3) {
        return (
          this.roundValue(valorCheio / 1e-3) + ' m' + this.unidadeMedida[valor]
        )
      } else if (Math.abs(valorCheio) >= 0.8e-6) {
        return (
          this.roundValue(valorCheio / 1e-6) + ' µ' + this.unidadeMedida[valor]
        )
      } else if (Math.abs(valorCheio) >= 0.8e-9) {
        return (
          this.roundValue(valorCheio / 1e-9) + ' n' + this.unidadeMedida[valor]
        )
      } else {
        return this.roundValue(valorCheio) + ' ' + this.unidadeMedida[valor]
      }
    },
    roundValue(value) {
      return Math.round(value * 100) / 100
    },
    gerarRelatorio() {
      // eslint-disable-next-line new-cap
      const doc = new jsPDF('p', 'pt', 'A4')

      doc.setFontSize(32)
      doc.text(80, 60, 'Relatório - Análise Estrutural')

      doc.setFontSize(22)
      doc.text(20, 100, 'Reações de Apoio')
      doc.setFontSize(12)
      doc.text(20, 130, [
        'Apoio VA: ' + this.calcularString('vA'),
        'Apoio VB: ' + this.calcularString('vB'),
        'Apoio VD: ' + this.calcularString('vD'),
      ])

      doc.setFontSize(22)
      doc.text(20, 200, 'Deformações')
      doc.setFontSize(12)
      doc.text(20, 230, [
        'Deformação Arame BC: ' + this.calcularString('deformBC'),
        'Deformação Arame DE: ' + this.calcularString('deformDE'),
      ])

      doc.setFontSize(22)
      doc.text(20, 290, 'Deslocamentos')
      doc.setFontSize(12)
      doc.text(20, 320, [
        'Deslocamento C: ' + this.calcularString('deslocC'),
        'Deslocamento E: ' + this.calcularString('deslocE'),
        'Deslocamento F: ' + this.calcularString('deslocF'),
      ])

      doc.save('relatorio.pdf')
    },
  },
}
</script>

<style lang="scss" scoped></style>
