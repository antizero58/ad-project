<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-subheader>Orders</v-subheader>
        <v-list two-line subheader flat>
          <v-list-item
              v-for="order in orders"
              :key="order.id"
            >
              <template v-slot:default="{ active, toggle }">
                <v-list-item-action>
                <v-checkbox
                  color="success"
                  :input-value="order.done"
                  @change="markDone(order)"
                ></v-checkbox>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>{{order.name}}</v-list-item-title>
                  <v-list-item-subtitle>{{order.phone}}</v-list-item-subtitle>
                </v-list-item-content>
                <v-btn right
                  :to="'/ad/' + order.adId"
                  class="primary"
                >Open</v-btn>
              </template>
            </v-list-item>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      orders: [
        {
          id: 'fds3',
          name: 'Dmitriy',
          phone: '8-921-121-12-12',
          adId: '123',
          done: false
        }
      ]
    }
  },
  methods: {
    markDone (order) {
      order.done = true
    }
  }
}
</script>
