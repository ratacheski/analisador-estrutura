<template>
  <v-row justify="center" align="center">
    <v-col cols="12" md="10">
      <div class="text-center">
        <Estrutura :calculating="calculating" />
        <FormDados @calculating="onCalculating" />
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
    onCalculating() {
      this.calculating = true
      setTimeout(() => (this.calculating = false), 5000)
    },
  },
}
</script>
