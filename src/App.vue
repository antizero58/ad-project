<template>
<div id="app">
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
    >
    <!-- <v-card
        height="400"
        width="256"
        class="mx-auto"
      > -->
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              Application
            </v-list-item-title>
            <v-list-item-subtitle>
              subtext
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list>
          <v-list-item
            v-for="link of links"
            :key="link.title"
            link
            :to="link.url"
            >
            <v-list-item-icon>
              <v-icon>{{link.icon}}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="link.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

      <!-- </v-card> -->
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>Ad application</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        v-for="link in links"
        :key="link.title"
        :to="link.url"
        text
        class="hidden-sm-and-down">
        <v-icon left>{{link.icon}}</v-icon>
        {{link.title}}
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

  data () {
    return {
      drawer: false,
      links: [
        { title: 'Login', icon: 'lock', url: '/login' },
        { title: 'Registration', icon: 'face', url: '/registration' },
        { title: 'Orders', icon: 'bookmark_border', url: '/orders' },
        { title: 'New ad', icon: 'note_add', url: '/new' },
        { title: 'My ads', icon: 'list', url: '/list' }
      ]
    }
  }
}
</script>
