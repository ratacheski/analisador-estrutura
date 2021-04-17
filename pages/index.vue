<template>
  <v-row justify="center" align="center">
    <v-col cols="12" md="10">
      <div class="text-center">
        <Estrutura />
        <v-btn color="success" nuxt to="/analisador" outlined>
          Simular Cálculos
          <v-icon right dark> mdi-calculator </v-icon>
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>
