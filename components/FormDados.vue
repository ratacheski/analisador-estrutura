<template>
  <v-card>
    <v-card-title class="justify-center">Dados para cálculo</v-card-title>
    <v-card-text>
      <v-stepper v-model="stepper">
        <v-stepper-header>
          <v-divider></v-divider>
          <v-stepper-step :complete="e1 > 1" step="1">
            Propriedades dos Arames
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step :complete="e1 > 2" step="2">
            Carregamentos e Dimensões da Estrutura
          </v-stepper-step>
          <v-divider></v-divider>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content step="1">
            <v-form ref="form1" v-model="valid1" lazy-validation>
              <v-container>
                <h3>Arame 1</h3>
                <v-row>
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
                      suffix="MPa"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
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
                </v-row>
                <br />
                <h3>Arame 2</h3>
                <v-row>
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
                      suffix="MPa"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
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
                </v-row>
              </v-container>
            </v-form>
            <div class="d-flex justify-end">
              <v-btn color="success" outlined @click="validaForm1">
                Próximo Passo
                <v-icon right dark> mdi-arrow-right </v-icon>
              </v-btn>
            </div>
          </v-stepper-content>
          <v-stepper-content step="2">
            <v-form ref="form2" v-model="valid2" lazy-validation>
              <v-container>
                <h3>Carregamentos</h3>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model.number="w"
                      type="number"
                      label="w"
                      min="0"
                      :rules="rules.wRules"
                      hint="Valor da carga distribuída"
                      suffix="KN/m"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model.number="p"
                      type="number"
                      label="P"
                      :rules="rules.pRules"
                      min="0"
                      hint="Valor da força pontual P"
                      suffix="KN"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <br />
                <h3>Dimensões</h3>
                <v-row>
                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model.number="l3"
                      type="number"
                      label="L3"
                      :rules="rules.comprimentoRules"
                      min="0"
                      hint="comprimento L3"
                      suffix="metros"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model.number="l4"
                      type="number"
                      label="L4"
                      :rules="rules.comprimentoRules"
                      min="0"
                      hint="comprimento L4"
                      suffix="metros"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model.number="l5"
                      type="number"
                      label="L5"
                      :rules="rules.comprimentoRules"
                      min="0"
                      hint="comprimento L5"
                      suffix="metros"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
            <div class="d-flex justify-end">
              <v-btn color="success" class="mr-3" text @click="stepper = 1">
                <v-icon left dark> mdi-arrow-left </v-icon>
                Passo Anterior
              </v-btn>
              <v-btn color="success" outlined @click="calcular">
                Calcular
                <v-icon right dark> mdi-calculator </v-icon>
              </v-btn>
            </div>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      stepper: 1,
      valid1: false,
      valid2: false,
      l3: null,
      l4: null,
      l5: null,
      w: null,
      p: null,
      arame1: {
        elasticidade: null,
        sigma: null,
        comprimento: null,
      },
      arame2: {
        elasticidade: null,
        sigma: null,
        comprimento: null,
      },
      rules: {
        comprimentoRules: [(v) => !!v || 'Comprimento é obrigatório'],
        wRules: [(v) => !!v || 'w é obrigatório'],
        pRules: [(v) => !!v || 'P é obrigatório'],
        elasticidadeRules: [
          (v) => !!v || 'Módulo de elasticidade é obrigatório',
        ],
        sigmaRules: [(v) => !!v || 'Limite de escoamento é obrigatório'],
        areaRules: [(v) => !!v || 'Área é obrigatória'],
      },
    }
  },
  computed: {
    areaArame1() {
      return this.reacaoVB / this.arame1.sigma
    },
    areaArame2() {
      return this.reacaoVD / this.arame2.sigma
    },
    fR1() {
      return this.w * this.l3
    },
    fR2() {
      return 2 * this.w * (this.l4 + this.l5)
    },
    reacaoVA() {
      return 0
    },
    reacaoVB() {
      return 0
    },
    reacaoVD() {
      return 0
    },
  },
  methods: {
    validaForm1() {
      if (this.$refs.form1.validate()) {
        if (this.validarLimiteEscoamentoArames()) {
          this.stepper++
        }
      } else {
        this.$notifier.showError({
          content: 'Preencha corretamente os dados dos arames antes de avançar',
        })
      }
    },
    calcular() {
      if (this.$refs.form2.validate()) {
        this.calcularDeformacoesArames()
      } else {
        this.$notifier.showError({
          content:
            'Preencha corretamente os dados da estrutura antes de calcular',
        })
      }
    },
    validarLimiteEscoamentoArames() {
      const sigmaAco = 350
      if (this.arame1.sigma > sigmaAco && this.arame2.sigma > sigmaAco) {
        this.$notifier.showError({
          content: 'Ambos os arames ultrapassam o limite de escoamento do aço.',
        })
      } else if (this.arame1.sigma > sigmaAco) {
        this.$notifier.showError({
          content: 'O arame 1 ultrapassa o limite de escoamento do aço.',
        })
      } else if (this.arame2.sigma > sigmaAco) {
        this.$notifier.showError({
          content: 'O arame 2 ultrapassa o limite de escoamento do aço.',
        })
      }
      return this.arame1.sigma <= sigmaAco && this.arame2.sigma <= sigmaAco
    },
    calcularDeformacoesArames() {
      this.$emit('calculating')
      this.$notifier.showSuccess({
        content: `R1= ${this.fR1}; R2= ${this.fR2}`,
      })
    },
    calcularReacoesDeApoio() {},
  },
}
</script>
