<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="8">
      <div class="text-center">
        <Estrutura />
        <v-btn color="teal" nuxt to="/analisador" outlined>
          Simular Cálculos
          <v-icon right dark> mdi-calculator </v-icon>
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import Estrutura from '~/components/Estrutura.vue'

export default {
  components: {
    Estrutura,
  },
}
</script>
