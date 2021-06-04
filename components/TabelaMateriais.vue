<template>
  <v-overlay>
    <v-card
      v-click-outside="closeModal"
      class="mx-auto overflow-y-auto"
      max-height="90vh"
    >
      <v-card-title class="justify-center">
        Selecione um Material
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="materiais"
          class="elevation-1"
          hide-default-footer
          @click:row="onRowClick"
        ></v-data-table>
      </v-card-text>
    </v-card>
  </v-overlay>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: 'Material',
          sortable: false,
          align: 'center',
          value: 'nome',
        },
        {
          text: 'Módulo de Elasticidade E [GPa]',
          sortable: false,
          align: 'center',
          value: 'elasticidade',
        },
        {
          text: 'Tensão de Escoamento [MPa]',
          sortable: false,
          align: 'center',
          value: 'sigma',
        },
      ],
      materiais: [
        {
          nome: 'Alumínio 2014',
          elasticidade: 73.1,
          sigma: 414,
        },
        {
          nome: 'Alumínio 6061',
          elasticidade: 68.9,
          sigma: 255,
        },
        {
          nome: 'Latão Vermelho C83400',
          elasticidade: 101,
          sigma: 70,
        },
        {
          nome: 'Bronze C86100',
          elasticidade: 103,
          sigma: 345,
        },
        {
          nome: 'Magnésio Am 1004 - T61',
          elasticidade: 44.7,
          sigma: 152,
        },
        {
          nome: 'Aço Estrutural A36',
          elasticidade: 200,
          sigma: 250,
        },
        {
          nome: 'Aço Inoxidável 304',
          elasticidade: 193,
          sigma: 207,
        },
        {
          nome: 'Aço Ferramentas L2',
          elasticidade: 200,
          sigma: 703,
        },
        {
          nome: 'Titânio Ti - 6A1 - 4V',
          elasticidade: 120,
          sigma: 924,
        },
      ],
    }
  },
  methods: {
    closeModal() {
      this.$emit('close')
    },
    onRowClick(material) {
      this.$emit('select-material', material)
    },
  },
}
</script>

<style lang="scss" scoped></style>
