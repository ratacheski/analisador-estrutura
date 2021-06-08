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
        arame1: {
          comprimento: 'm',
          area: 'm²',
          elasticidade: 'Pa',
          sigma: 'Pa',
        },
        arame2: {
          comprimento: 'm',
          area: 'm²',
          elasticidade: 'Pa',
          sigma: 'Pa',
        },
        carregamentos: {
          p: 'N',
          w: 'N.m',
        },
        dimensoes: {
          l3: 'm',
          l4: 'm',
          l5: 'm',
        },
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
    calcularString(valor, valor2, quadrado = false) {
      const valorCheio = valor2 ? this.dados[valor][valor2] : this.dados[valor]
      if (Math.abs(valorCheio) >= 0.8e9) {
        return (
          this.roundValue(valorCheio / 1e9) +
          ' G' +
          (valor2
            ? this.unidadeMedida[valor][valor2]
            : this.unidadeMedida[valor])
        )
      } else if (Math.abs(valorCheio) >= 0.8e6) {
        return (
          this.roundValue(valorCheio / 1e6) +
          ' M' +
          (valor2
            ? this.unidadeMedida[valor][valor2]
            : this.unidadeMedida[valor])
        )
      } else if (Math.abs(valorCheio) >= 0.8e3) {
        return (
          this.roundValue(valorCheio / 1e3) +
          ' K' +
          (valor2
            ? this.unidadeMedida[valor][valor2]
            : this.unidadeMedida[valor])
        )
      } else if (Math.abs(valorCheio) >= 0.8) {
        return (
          this.roundValue(valorCheio) +
          ' ' +
          (valor2
            ? this.unidadeMedida[valor][valor2]
            : this.unidadeMedida[valor])
        )
      } else if (Math.abs(valorCheio) >= 0.8e-3) {
        return (
          this.roundValue(valorCheio / 1e-3) +
          (quadrado ? ' cm' : ' m') +
          (valor2
            ? this.unidadeMedida[valor][valor2]
            : this.unidadeMedida[valor])
        )
      } else if (Math.abs(valorCheio) >= 0.8e-6) {
        return (
          this.roundValue(valorCheio / 1e-6) +
          (quadrado ? ' m' : ' µ') +
          (valor2
            ? this.unidadeMedida[valor][valor2]
            : this.unidadeMedida[valor])
        )
      } else if (Math.abs(valorCheio) >= 0.8e-9) {
        return (
          this.roundValue(valorCheio / 1e-9) +
          ' n' +
          (valor2
            ? this.unidadeMedida[valor][valor2]
            : this.unidadeMedida[valor])
        )
      } else {
        return (
          this.roundValue(valorCheio) +
          ' ' +
          (valor2
            ? this.unidadeMedida[valor][valor2]
            : this.unidadeMedida[valor])
        )
      }
    },
    roundValue(value) {
      return Math.round(value * 100) / 100
    },
    gerarRelatorio() {
      // eslint-disable-next-line new-cap
      const doc = new jsPDF()

      // CABEÇALHO
      doc.setFontSize(32)
      const width = doc.internal.pageSize.getWidth()
      doc.text('Relatório', width / 2, 20, {
        align: 'center',
      })
      doc.text('Análise Estrutural', width / 2, 36, {
        align: 'center',
      })

      // DADOS DE ENTRADA
      doc.setFontSize(22)
      doc.text(5, 60, 'Dados de Entrada')
      // ARAME 1
      doc.setFontSize(16)
      doc.text(15, 80, 'Arame 1:')
      doc.setFontSize(12)
      doc.text(15, 88, [
        'Material: ' + this.dados.material1.nome,
        'Limite de Escoamento: ' + this.calcularString('arame1', 'sigma'),
        'Módulo de Elasticidade: ' +
          this.calcularString('arame1', 'elasticidade'),
        'Comprimento: ' + this.calcularString('arame1', 'comprimento'),
        'Área da Seção Transversal: ' +
          this.calcularString('arame1', 'area', true),
      ])
      // ARAME 2
      doc.setFontSize(16)
      doc.text(width / 2 + 5, 80, 'Arame 2:')
      doc.setFontSize(12)
      doc.text(width / 2 + 5, 88, [
        'Material: ' + this.dados.material2.nome,
        'Limite de Escoamento: ' + this.calcularString('arame2', 'sigma'),
        'Módulo de Elasticidade: ' +
          this.calcularString('arame2', 'elasticidade'),
        'Comprimento: ' + this.calcularString('arame2', 'comprimento'),
        'Área da Seção Transversal: ' +
          this.calcularString('arame2', 'area', true),
      ])
      // DIMENSÕES
      doc.setFontSize(16)
      doc.text(15, 122, 'Dimensões:')
      doc.setFontSize(12)
      doc.text(15, 130, [
        'Comprimento L3: ' + this.calcularString('dimensoes', 'l3'),
        'Comprimento L4: ' + this.calcularString('dimensoes', 'l4'),
        'Comprimento L5: ' + this.calcularString('dimensoes', 'l5'),
      ])
      // CARREGAMENTOS
      doc.setFontSize(16)
      doc.text(width / 2 + 5, 122, 'Carregamentos:')
      doc.setFontSize(12)
      doc.text(width / 2 + 5, 130, [
        'Força P: ' + this.calcularString('carregamentos', 'p'),
        'Força Distribuída W: ' + this.calcularString('carregamentos', 'w'),
        'Fator de Segurança: ' + this.dados.fs,
      ])
      doc.line(5, 145, width - 5, 145)

      // DADOS DE SAÍDA
      doc.setFontSize(22)
      doc.text(5, 160, 'Dados de Saída')

      // REAÇÕES DE APOIO
      doc.setFontSize(16)
      doc.text(15, 180, 'Reações de Apoio')
      doc.setFontSize(12)
      doc.text(15, 188, [
        'Apoio VA: ' + this.calcularString('vA'),
        'Apoio VB: ' + this.calcularString('vB'),
        'Apoio VD: ' + this.calcularString('vD'),
      ])

      // DEFORMAÇÕES
      doc.setFontSize(16)
      doc.text(width / 3, 180, 'Deformações')
      doc.setFontSize(12)
      doc.text(width / 3, 188, [
        'Deformação Arame BC: ' + this.calcularString('deformBC'),
        'Deformação Arame DE: ' + this.calcularString('deformDE'),
      ])

      // DESLOCAMENTOS
      doc.setFontSize(16)
      doc.text((width * 2) / 3, 180, 'Deslocamentos')
      doc.setFontSize(12)
      doc.text((width * 2) / 3, 188, [
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
