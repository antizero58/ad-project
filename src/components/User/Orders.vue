<template>
  <v-container>
    <v-layout row>
      <v-flex v-if="loading" xs12 class="text-xs-center pt-5">
        <v-progress-circular
          indeterminate
          :size="100"
          :width="4"
          color="purple"
        ></v-progress-circular>
      </v-flex>
      <v-flex v-else-if="!loading && orders.length !== 0" xs12 sm6 offset-sm3>
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
      <v-flex v-else xs12 class="text-xs-center">
        <h1 class="text--secondary">You have no orders</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    loading () {
      return this.$store.getters.loading
    },
    orders () {
      return this.$store.getters.orders
    }
  },
  methods: {
    markDone (order) {
      this.$store.dispatch('markOrderDone', order.id)
        .then(() => {
          order.done = true
        })
        .catch(() => {})
      order.done = true
    }
  },
  created () {
    this.$store.dispatch('fetchOrders')
  }
}
</script>
