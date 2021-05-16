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
          <v-list-item-subtitle>Va = {{ dados.vA }}</v-list-item-subtitle>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-weight-lifter</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>Vb = {{ dados.vB }}</v-list-item-subtitle>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-weight-lifter</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>Vd = {{ dados.vD }}</v-list-item-subtitle>
        </v-list-item>
      </div>
      <v-divider :vertical="!$vuetify.breakpoint.mobile" />
      <div>
        <h3 class="mt-2">Deformações</h3>
        <v-list-item class="">
          <v-list-item-icon>
            <v-icon>mdi-scale</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>Va = {{ dados.deformBC }}</v-list-item-subtitle>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-scale</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>Vb = {{ dados.deformDE }}</v-list-item-subtitle>
        </v-list-item>
      </div>
      <v-divider :vertical="!$vuetify.breakpoint.mobile" />
      <div>
        <h3 class="mt-2">Deslocamentos</h3>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-map-marker</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle
            >δ<sub>C</sub> = {{ dados.deslocC }}</v-list-item-subtitle
          >
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-map-marker</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle
            >δ<sub>E</sub> = {{ dados.deslocE }}</v-list-item-subtitle
          >
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-map-marker</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle
            >δ<sub>F</sub> = {{ dados.deslocF }}</v-list-item-subtitle
          >
        </v-list-item>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    dados: {
      type: Object,
      default: null,
    },
  },
  methods: {
    onClickOutside() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped></style>
