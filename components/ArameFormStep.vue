<template>
  <div>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-container>
        <h3>Arame 1</h3>
        <v-row>
          <v-col cols="12">
            <v-select
              v-model="selectedMaterial1"
              :items="materiais"
              item-text="nome"
              label="Material"
              return-object
              placeholder="Selecione um material..."
              append-outer-icon="mdi-information-outline"
              @click:append-outer="exibirModalMateriais(1)"
              @change="selectMaterial(1, $event)"
            >
            </v-select>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model.number="arame1.sigma"
              type="number"
              label="Limite de Escoamento"
              prefix="σ ="
              :rules="rules.sigmaRules"
              min="0"
              hint="Limite de escoamento do arame 1"
              suffix="MPa"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model.number="arame1.elasticidade"
              type="number"
              :rules="rules.elasticidadeRules"
              label="Módulo de Elasticidade"
              prefix="E ="
              min="0"
              hint="Módulo de elasticidade do arame 1"
              suffix="GPa"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model.number="arame1.comprimento"
              type="number"
              :rules="rules.comprimentoRules"
              label="Comprimento"
              prefix="L1 ="
              min="0"
              hint="comprimento do primeiro arame"
              suffix="metros"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model.number="arame1.area"
              type="number"
              :rules="rules.areaRules"
              label="Área da Seção Transversal"
              prefix="A1 ="
              min="0"
              hint="área da seção transversal do primeiro arame"
              suffix="mm²"
            ></v-text-field>
          </v-col>
        </v-row>
        <br />
        <h3>Arame 2</h3>
        <v-row>
          <v-col cols="12">
            <v-select
              v-model="selectedMaterial2"
              :items="materiais"
              item-text="nome"
              label="Material"
              return-object
              placeholder="Selecione um material..."
              append-outer-icon="mdi-information-outline"
              @click:append-outer="exibirModalMateriais(2)"
              @change="selectMaterial(2, $event)"
            >
            </v-select>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model.number="arame2.sigma"
              type="number"
              label="Limite de Escoamento"
              prefix="σ ="
              :rules="rules.sigmaRules"
              min="0"
              hint="Limite de escoamento do arame 2"
              suffix="MPa"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model.number="arame2.elasticidade"
              type="number"
              :rules="rules.elasticidadeRules"
              label="Módulo de Elasticidade"
              prefix="E ="
              min="0"
              hint="Módulo de elasticidade do arame 2"
              suffix="GPa"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model.number="arame2.comprimento"
              type="number"
              label="Comprimento"
              prefix="L2 ="
              :rules="rules.comprimentoRules"
              min="0"
              hint="comprimento do segundo arame"
              suffix="metros"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model.number="arame2.area"
              type="number"
              :rules="rules.areaRules"
              label="Área da Seção Transversal"
              prefix="A2 ="
              min="0"
              hint="área da seção transversal do segundo arame"
              suffix="mm²"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <div class="d-flex justify-end">
        <v-btn color="success" outlined @click="validaForm">
          Próximo Passo
          <v-icon right dark> mdi-arrow-right </v-icon>
        </v-btn>
      </div>
    </v-form>
    <TabelaMateriais
      v-if="overlay"
      @close="overlay = false"
      @select-material="selectMaterialFromTable"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedMaterial1: null,
      selectedMaterial2: null,
      arameToSelectMaterial: null,
      overlay: false,
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
        {
          nome: 'Outro...',
          elasticidade: null,
          sigma: null,
        },
      ],
      valid: false,
      arame1: { sigma: null, elasticidade: null },
      arame2: { sigma: null, elasticidade: null },
      rules: {
        elasticidadeRules: [
          (v) => !!v || 'Módulo de elasticidade é obrigatório',
          (v) => v > 0 || 'Módulo de elasticidade deve ser positivo',
        ],
        sigmaRules: [
          (v) => !!v || 'Limite de escoamento é obrigatório',
          (v) => v > 0 || 'Limite de escoamento deve ser positivo',
        ],
        areaRules: [
          (v) => !!v || 'Área é obrigatória',
          (v) => v > 0 || 'Área deve ser positiva',
        ],
        comprimentoRules: [
          (v) => !!v || 'Comprimento é obrigatório',
          (v) => v > 0 || 'Comprimento deve ser positivo',
        ],
      },
    }
  },
  methods: {
    selectMaterialFromTable(material) {
      this.arameToSelectMaterial === 1
        ? (this.selectedMaterial1 = material)
        : (this.selectedMaterial2 = material)
      this.selectMaterial(this.arameToSelectMaterial, material)
      this.overlay = false
    },
    selectMaterial(arame, event) {
      this[`arame${arame}`].sigma = event.sigma
      this[`arame${arame}`].elasticidade = event.elasticidade
    },
    exibirModalMateriais(arameToSelect) {
      this.arameToSelectMaterial = arameToSelect
      this.overlay = true
    },
    validaForm() {
      if (this.$refs.form.validate()) {
        this.$emit('step-completed', {
          arame1: this.arame1,
          arame2: this.arame2,
          material1: this.selectedMaterial1,
          material2: this.selectedMaterial2,
        })
      } else {
        this.$notifier.showError({
          content: 'Preencha corretamente os dados dos arames antes de avançar',
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
