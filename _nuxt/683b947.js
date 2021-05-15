(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{373:function(e,t,r){"use strict";r.r(t);r(28);var o={data:function(){return{stepper:1,valid1:!1,valid2:!1,l3:null,l4:null,l5:null,w:null,p:null,arame1:{elasticidade:null,sigma:null,comprimento:null},arame2:{elasticidade:null,sigma:null,comprimento:null},rules:{comprimentoRules:[function(e){return!!e||"Comprimento é obrigatório"}],wRules:[function(e){return!!e||"w é obrigatório"}],pRules:[function(e){return!!e||"P é obrigatório"}],elasticidadeRules:[function(e){return!!e||"Módulo de elasticidade é obrigatório"}],sigmaRules:[function(e){return!!e||"Limite de escoamento é obrigatório"}],areaRules:[function(e){return!!e||"Área é obrigatória"}]}}},computed:{areaArame1:function(){return this.reacaoVB/this.arame1.sigma},areaArame2:function(){return this.reacaoVD/this.arame2.sigma},fR1:function(){return this.w*this.l3},fR2:function(){return 2*this.w*(this.l4+this.l5)},reacaoVA:function(){return 0},reacaoVB:function(){return 0},reacaoVD:function(){return 0}},methods:{validaForm1:function(){this.$refs.form1.validate()?this.validarLimiteEscoamentoArames()&&this.stepper++:this.$notifier.showError({content:"Preencha corretamente os dados dos arames antes de avançar"})},calcular:function(){this.$refs.form2.validate()?this.calcularDeformacoesArames():this.$notifier.showError({content:"Preencha corretamente os dados da estrutura antes de calcular"})},validarLimiteEscoamentoArames:function(){var e=350;return this.arame1.sigma>e&&this.arame2.sigma>e?this.$notifier.showError({content:"Ambos os arames ultrapassam o limite de escoamento do aço."}):this.arame1.sigma>e?this.$notifier.showError({content:"O arame 1 ultrapassa o limite de escoamento do aço."}):this.arame2.sigma>e&&this.$notifier.showError({content:"O arame 2 ultrapassa o limite de escoamento do aço."}),this.arame1.sigma<=e&&this.arame2.sigma<=e},calcularDeformacoesArames:function(){this.$emit("calculating"),this.$notifier.showSuccess({content:"R1= ".concat(this.fR1,"; R2= ").concat(this.fR2)})},calcularReacoesDeApoio:function(){}}},l=r(73),n=r(84),c=r.n(n),m=r(233),d=r(369),v=r(365),f=r(356),h=r(362),_=r(398),x=r(399),w=r(170),R=r(384),V=r(370),k=r(371),y=r(363),C=r(372),$=r(400),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-card-title",{staticClass:"justify-center"},[e._v("Dados para cálculo")]),e._v(" "),r("v-card-text",[r("v-stepper",{model:{value:e.stepper,callback:function(t){e.stepper=t},expression:"stepper"}},[r("v-stepper-header",[r("v-divider"),e._v(" "),r("v-stepper-step",{attrs:{complete:e.e1>1,step:"1"}},[e._v("\n          Propriedades dos Arames\n        ")]),e._v(" "),r("v-divider"),e._v(" "),r("v-stepper-step",{attrs:{complete:e.e1>2,step:"2"}},[e._v("\n          Carregamentos e Dimensões da Estrutura\n        ")]),e._v(" "),r("v-divider")],1),e._v(" "),r("v-stepper-items",[r("v-stepper-content",{attrs:{step:"1"}},[r("v-form",{ref:"form1",attrs:{"lazy-validation":""},model:{value:e.valid1,callback:function(t){e.valid1=t},expression:"valid1"}},[r("v-container",[r("h3",[e._v("Arame 1")]),e._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{type:"number",label:"Limite de Escoamento",prefix:"σ =",rules:e.rules.sigmaRules,min:"0",hint:"Limite de escoamento do arame 1",suffix:"MPa"},model:{value:e.arame1.sigma,callback:function(t){e.$set(e.arame1,"sigma",e._n(t))},expression:"arame1.sigma"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{type:"number",rules:e.rules.elasticidadeRules,label:"Módulo de Elasticidade",prefix:"E =",min:"0",hint:"Módulo de elasticidade do arame 1",suffix:"MPa"},model:{value:e.arame1.elasticidade,callback:function(t){e.$set(e.arame1,"elasticidade",e._n(t))},expression:"arame1.elasticidade"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{type:"number",rules:e.rules.comprimentoRules,label:"Comprimento",prefix:"L1 =",min:"0",hint:"comprimento do primeiro arame",suffix:"metros"},model:{value:e.arame1.comprimento,callback:function(t){e.$set(e.arame1,"comprimento",e._n(t))},expression:"arame1.comprimento"}})],1)],1),e._v(" "),r("br"),e._v(" "),r("h3",[e._v("Arame 2")]),e._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{type:"number",label:"Limite de Escoamento",prefix:"σ =",rules:e.rules.sigmaRules,min:"0",hint:"Limite de escoamento do arame 2",suffix:"MPa"},model:{value:e.arame2.sigma,callback:function(t){e.$set(e.arame2,"sigma",e._n(t))},expression:"arame2.sigma"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{type:"number",rules:e.rules.elasticidadeRules,label:"Módulo de Elasticidade",prefix:"E =",min:"0",hint:"Módulo de elasticidade do arame 2",suffix:"MPa"},model:{value:e.arame2.elasticidade,callback:function(t){e.$set(e.arame2,"elasticidade",e._n(t))},expression:"arame2.elasticidade"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{type:"number",label:"Comprimento",prefix:"L2 =",rules:e.rules.comprimentoRules,min:"0",hint:"comprimento do segundo arame",suffix:"metros"},model:{value:e.arame2.comprimento,callback:function(t){e.$set(e.arame2,"comprimento",e._n(t))},expression:"arame2.comprimento"}})],1)],1)],1)],1),e._v(" "),r("div",{staticClass:"d-flex justify-end"},[r("v-btn",{attrs:{color:"success",outlined:""},on:{click:e.validaForm1}},[e._v("\n              Próximo Passo\n              "),r("v-icon",{attrs:{right:"",dark:""}},[e._v(" mdi-arrow-right ")])],1)],1)],1),e._v(" "),r("v-stepper-content",{attrs:{step:"2"}},[r("v-form",{ref:"form2",attrs:{"lazy-validation":""},model:{value:e.valid2,callback:function(t){e.valid2=t},expression:"valid2"}},[r("v-container",[r("h3",[e._v("Carregamentos")]),e._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{type:"number",label:"w",min:"0",rules:e.rules.wRules,hint:"Valor da carga distribuída",suffix:"KN/m"},model:{value:e.w,callback:function(t){e.w=e._n(t)},expression:"w"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{type:"number",label:"P",rules:e.rules.pRules,min:"0",hint:"Valor da força pontual P",suffix:"KN"},model:{value:e.p,callback:function(t){e.p=e._n(t)},expression:"p"}})],1)],1),e._v(" "),r("br"),e._v(" "),r("h3",[e._v("Dimensões")]),e._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{type:"number",label:"L3",rules:e.rules.comprimentoRules,min:"0",hint:"comprimento L3",suffix:"metros"},model:{value:e.l3,callback:function(t){e.l3=e._n(t)},expression:"l3"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{type:"number",label:"L4",rules:e.rules.comprimentoRules,min:"0",hint:"comprimento L4",suffix:"metros"},model:{value:e.l4,callback:function(t){e.l4=e._n(t)},expression:"l4"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{type:"number",label:"L5",rules:e.rules.comprimentoRules,min:"0",hint:"comprimento L5",suffix:"metros"},model:{value:e.l5,callback:function(t){e.l5=e._n(t)},expression:"l5"}})],1)],1)],1)],1),e._v(" "),r("div",{staticClass:"d-flex justify-end"},[r("v-btn",{staticClass:"mr-3",attrs:{color:"success",text:""},on:{click:function(t){e.stepper=1}}},[r("v-icon",{attrs:{left:"",dark:""}},[e._v(" mdi-arrow-left ")]),e._v("\n              Passo Anterior\n            ")],1),e._v(" "),r("v-btn",{attrs:{color:"success",outlined:""},on:{click:e.calcular}},[e._v("\n              Calcular\n              "),r("v-icon",{attrs:{right:"",dark:""}},[e._v(" mdi-calculator ")])],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VBtn:m.a,VCard:d.a,VCardText:v.a,VCardTitle:v.b,VCol:f.a,VContainer:h.a,VDivider:_.a,VForm:x.a,VIcon:w.a,VRow:R.a,VStepper:V.a,VStepperContent:k.a,VStepperHeader:y.a,VStepperItems:y.b,VStepperStep:C.a,VTextField:$.a})}}]);