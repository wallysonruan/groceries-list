<script lang="ts" setup>
//
</script>

<template>
  <v-app>
    <v-navigation-drawer rail permanent rail-width="2rem">
      <div class="navbar">
        <button>User Profile</button>
        <ul>
          <li>
            <button>Items</button>
          </li>
          <li>
            <button>History</button>
          </li>
          <li>
            <button>Stastistics</button>
          </li>
        </ul>
        <button>Cart</button>
      </div>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style scoped lang="scss">
.navbar {
  height: 100vh;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

ul {
  li {
    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }
  }
}
</style>
