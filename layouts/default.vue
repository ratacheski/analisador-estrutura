<template>
  <v-app dark>
    <Snackbar></Snackbar>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      <v-col cols="10">
        &copy; {{ new Date().getFullYear() }} —
        <strong>Rafael Ratacheski, Débora Bruna, Janine de Oliveira</strong>
      </v-col>
      <v-col cols="2" class="text-right">
        <v-btn
          icon
          href="https://github.com/ratacheski/analisador-estrutura"
          target="blank"
        >
          <v-icon>mdi-github</v-icon>
        </v-btn>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/',
        },
        {
          icon: 'mdi-calculator',
          title: 'Analizador Estrutural',
          to: '/analisador',
        },
      ],
      miniVariant: false,
      title: 'Analisador Estrutural',
    }
  },
}
</script>
