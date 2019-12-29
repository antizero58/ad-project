<template>
<div id="app">
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app></v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Ad application</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn text>Btn text
        <!-- <v-icon>mdi-heart</v-icon> -->
      </v-btn>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>

      <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-content>

    </v-content>
  </v-app>
</div>
</template>

<script>
export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  })
}
</script>
