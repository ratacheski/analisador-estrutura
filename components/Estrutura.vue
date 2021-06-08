<template>
  <svg
    :class="estruturaClass"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 800 600"
  >
    <g id="Layer_1">
      <rect
        id="barra"
        height="78"
        width="686.1902"
        y="242.5"
        x="60.5"
        fill="#A4FFFF"
      />
      <g id="apoio">
        <path
          id="apoioTriangulo"
          d="m-1,302.625l39.5,-42l39.5,42l-79,0z"
          fill="#FFE2FF"
          transform="rotate(90 38.49999999999995,281.62500000000006) "
        />
        <line
          id="apoioEngaste"
          stroke="#FFE2FF"
          stroke-width="6"
          y2="333.00796"
          x2="17.70833"
          y1="233.68056"
          x1="17.70833"
        />
      </g>

      <g id="arame1" stroke="#FFF093" fill="#FFF093">
        <line
          id="fio1"
          stroke-width="2"
          x1="338.5"
          y1="80.5"
          x2="338.5"
          y2="242.97062"
        />
        <g id="engasteArame1">
          <line
            id="svg_11"
            stroke-width="3"
            y2="80.5"
            x2="357.51351"
            y1="80.5"
            x1="320.5"
          />
          <line
            id="svg_15"
            transform="rotate(-45 326.3817749023437,75.24998474121094) "
            y2="75.24998"
            x2="333.39808"
            y1="75.24998"
            x1="319.36549"
          />
          <line
            id="svg_16"
            transform="rotate(-45 332.6317749023437,75.24998474121094) "
            y2="75.24998"
            x2="339.64807"
            y1="75.24998"
            x1="325.61547"
          />
          <line
            id="svg_17"
            transform="rotate(-45 338.8817443847657,75.24998474121095) "
            y2="75.24998"
            x2="345.89806"
            y1="75.24998"
            x1="331.86546"
          />
          <line
            id="svg_18"
            transform="rotate(-45 345.13174438476557,75.24998474121092) "
            y2="75.24998"
            x2="352.14804"
            y1="75.24998"
            x1="338.11545"
          />
          <line
            id="svg_19"
            transform="rotate(-45 351.38174438476557,75.24998474121094) "
            y2="75.24998"
            x2="358.39803"
            y1="75.24998"
            x1="344.36543"
          />
          <line
            id="svg_20"
            transform="rotate(-45 357.6317138671875,75.24998474121092) "
            y2="75.24998"
            x2="364.64802"
            y1="75.24998"
            x1="350.61542"
          />
        </g>
        <text
          id="svg_35"
          :x="broken1 ? '255' : '299.5'"
          y="170.5"
          font-size="24"
          stroke-width="0"
          font-family="monospace"
          text-anchor="start"
          xml:space="preserve"
          font-weight="bold"
          font-style="normal"
        >
          {{ broken1 ? broken1 + ' m' : 'L1' }}
        </text>
      </g>
      <g id="arame2" stroke="#FFF093" fill="#FFF093">
        <line
          id="fio2"
          stroke-width="2"
          x1="543.44444"
          y1="34.5"
          x2="543.44444"
          y2="242.97062"
        />
        <g id="engasteArame2">
          <line
            id="svg_10"
            stroke-width="3"
            y2="33.5"
            x2="562.45795"
            y1="33.5"
            x1="525.44444"
          />
          <line
            id="svg_21"
            transform="rotate(-45 531.844970703125,27.842575073242134) "
            y2="27.84258"
            x2="538.86104"
            y1="27.84258"
            x1="524.82845"
          />
          <line
            id="svg_22"
            transform="rotate(-45 538.094970703125,27.84257507324216) "
            y2="27.84258"
            x2="545.11103"
            y1="27.84258"
            x1="531.07843"
          />
          <line
            id="svg_23"
            transform="rotate(-45 544.3449707031251,27.842575073242184) "
            y2="27.84258"
            x2="551.36101"
            y1="27.84258"
            x1="537.32842"
          />
          <line
            id="svg_24"
            transform="rotate(-45 550.5949707031251,27.842575073242184) "
            y2="27.84258"
            x2="557.611"
            y1="27.84258"
            x1="543.57841"
          />
          <line
            id="svg_25"
            transform="rotate(-45 556.844970703125,27.842575073242205) "
            y2="27.84258"
            x2="563.86099"
            y1="27.84258"
            x1="549.82839"
          />
          <line
            id="svg_26"
            transform="rotate(-45 563.0949096679688,27.842575073242205) "
            y2="27.84258"
            x2="570.11097"
            y1="27.84258"
            x1="556.07838"
          />
        </g>
        <text
          id="svg_37"
          stroke-width="0"
          :x="broken2 ? '455' : '503.5'"
          y="170.5"
          font-size="24"
          font-family="monospace"
          text-anchor="start"
          xml:space="preserve"
          font-weight="bold"
          font-style="normal"
        >
          {{ broken2 ? broken2 + ' m' : 'L2' }}
        </text>
      </g>

      <g id="eixoX" stroke="#ffffff" fill="#ffffff">
        <line
          id="svg_45"
          stroke-width="4"
          y2="492.01389"
          x2="747.02981"
          y1="492.01389"
          x1="60.06944"
        />
        <line
          id="svg_46"
          stroke-width="4"
          y2="506.73701"
          x2="342.01389"
          y1="476.04167"
          x1="342.01389"
        />
        <line
          id="svg_47"
          stroke-width="4"
          y2="506.73701"
          x2="61.45832"
          y1="476.04167"
          x1="61.45832"
        />
        <line
          id="svg_48"
          stroke-width="4"
          y2="506.73701"
          x2="541.31945"
          y1="476.04167"
          x1="541.31945"
        />
        <line
          id="svg_49"
          stroke-width="4"
          y2="506.73701"
          x2="744.79168"
          y1="476.04167"
          x1="744.79168"
        />
        <text
          id="svg_5"
          style="cursor: move"
          x="173.5"
          y="518.5"
          font-size="24"
          stroke-width="0"
          font-family="monospace"
          text-anchor="start"
          xml:space="preserve"
          font-weight="bold"
          font-style="normal"
        >
          L3
        </text>
        <text
          id="svg_34"
          style="cursor: move"
          x="431.5"
          y="518.5"
          font-size="24"
          stroke-width="0"
          font-family="monospace"
          text-anchor="start"
          xml:space="preserve"
          font-weight="bold"
          font-style="normal"
        >
          L4
        </text>
        <text
          id="svg_43"
          stroke-width="0"
          x="630.5"
          y="518.5"
          font-size="24"
          font-family="monospace"
          text-anchor="start"
          xml:space="preserve"
          font-weight="bold"
          font-style="normal"
        >
          L5
        </text>
      </g>

      <g id="forcaP" fill="#ff7f00">
        <path
          id="forcaPSeta"
          d="m550.27027,215.62393l-6.1905,31.93731l-6.1905,-31.93731l3.09525,0l0,-32.09099l6.1905,0l0,32.09099l3.09525,0z"
        />
        <text
          id="svg_51"
          x="558.5"
          y="192.5"
          font-size="24"
          font-family="monospace"
          text-anchor="start"
          xml:space="preserve"
          font-weight="bold"
          font-style="normal"
        >
          P
        </text>
      </g>

      <g id="forca2W" fill="#aaffaa">
        <path
          id="svg_28"
          d="m348.88098,375.05477l-6.1905,55.14537l-6.1905,-55.14537l3.09525,0l0,-55.41072l6.1905,0l0,55.41072l3.09525,0z"
        />
        <path
          id="svg_30"
          d="m448.88117,375.05477l-6.1905,55.14537l-6.1905,-55.14537l3.09525,0l0,-55.41072l6.1905,0l0,55.41072l3.09525,0z"
        />
        <path
          id="svg_31"
          d="m548.88138,375.05477l-6.1905,55.14537l-6.1905,-55.14537l3.09525,0l0,-55.41072l6.1905,0l0,55.41072l3.09525,0z"
        />
        <path
          id="svg_32"
          d="m648.88162,375.05477l-6.1905,55.14537l-6.1905,-55.14537l3.09525,0l0,-55.41072l6.1905,0l0,55.41072l3.09525,0z"
        />
        <path
          id="svg_33"
          d="m748.88162,375.05477l-6.1905,55.14537l-6.1905,-55.14537l3.09525,0l0,-55.41072l6.1905,0l0,55.41072l3.09525,0z"
        />
        <line
          id="svg_44"
          stroke="#aaffaa"
          stroke-width="4"
          y2="429.81169"
          x2="742.07535"
          y1="429.81169"
          x1="342.98629"
        />
        <text
          id="svg_27"
          x="530.5"
          y="459.5"
          font-size="24"
          font-family="monospace"
          text-anchor="start"
          xml:space="preserve"
          font-weight="bold"
          font-style="normal"
        >
          2w
        </text>
      </g>
      <g id="forcaW" fill="#ffaaaa">
        <path
          id="svg_36"
          d="m69.83258,341.92944l-6.1905,22.17873l-6.1905,-22.17873l3.09525,0l0,-22.28546l6.1905,0l0,22.28546l3.09525,0z"
        />
        <path
          id="svg_38"
          d="m146.02344,341.92944l-6.1905,22.17874l-6.1905,-22.17874l3.09525,0l0,-22.28546l6.1905,0l0,22.28546l3.09525,0z"
        />
        <path
          id="svg_39"
          d="m212.69036,342.72344l-6.1905,22.17874l-6.1905,-22.17874l3.09525,0l0,-22.28546l6.1905,0l0,22.28546l3.09525,0z"
        />
        <path
          id="svg_40"
          d="m348.88152,341.92944l-6.1905,22.17874l-6.1905,-22.17874l3.09525,0l0,-22.28546l6.1905,0l0,22.28546l3.09525,0z"
        />
        <path
          id="svg_41"
          d="m282.21438,341.92944l-6.1905,22.17874l-6.1905,-22.17874l3.09525,0l0,-22.28546l6.1905,0l0,22.28546l3.09525,0z"
        />
        <line
          id="svg_42"
          stroke="#ffaaaa"
          stroke-width="4"
          y2="364.00806"
          x2="343.46425"
          y1="364.00806"
          x1="63.81958"
        />
        <text
          id="svg_12"
          x="188.5"
          y="402.5"
          font-size="24"
          font-family="monospace"
          text-anchor="start"
          xml:space="preserve"
          font-weight="bold"
          font-style="normal"
        >
          w
        </text>
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    calculating: {
      type: Boolean,
      default: false,
    },
    broken1: {
      type: Number,
      default: 0,
    },
    broken2: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    estruturaClass() {
      let classe = 'estrutura'
      classe += this.calculating ? ' calculating' : ''
      classe += this.broken1 ? ' broken1' : ''
      classe += this.broken2 ? ' broken2' : ''
      return classe
    },
  },
}
</script>

<style scoped></style>

<style lang="scss" scoped>
.estrutura {
  padding-top: 50px;
  animation: estrutura 0.5s forwards;
  transform: translateX(300px);
  opacity: 0;
}
.calculating {
  #arame1,
  #arame2,
  #barra {
    animation: calculating1 1s linear alternate infinite;
  }
}

.broken1 {
  #arame1 {
    animation: disappear 2s forwards;
  }
}

.broken2 {
  #arame2 {
    animation: disappear 2s forwards;
  }
}

@keyframes disappear {
  to {
    fill: red;
    stroke: red;
  }
}

@keyframes calculating1 {
  to {
    fill: red;
    stroke: red;
  }
}

@keyframes estrutura {
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
