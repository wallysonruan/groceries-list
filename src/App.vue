<script lang="ts" setup>
import { RouterLink } from "vue-router";

function generateItems(count: number) {
  const itemNames = [
    "Apples",
    "Bananas",
    "Oranges",
    "Grapes",
    "Mangos",
    "Pineapples",
    "Strawberries",
    "Blueberries",
    "Raspberries",
    "Blackberries",
  ];
  return Array.from({ length: count }, (_, i) => ({
    name: itemNames[i % itemNames.length],
    quantity: Math.floor(Math.random() * 100) + 1, // Random quantity between 1 and 100
  }));
}

const items = generateItems(50);
</script>

<template>
  <div class="app-container">
    <div class="navbar">
      <button>User Profile</button>
      <ul>
        <li>
          <RouterLink to="/">Items</RouterLink>
        </li>
        <li>
          <RouterLink to="/history">History</RouterLink>
        </li>
        <li>
          <RouterLink to="/statistics">Statistics</RouterLink>
        </li>
      </ul>
      <button>Cart</button>
    </div>
    <div class="center">
      <router-view />
    </div>
    <div
      class="shopping-list"
      style="
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: white;
      "
    >
      <div
        class="shopping-list__content"
        style="
          padding: 40px 40px 0 40px;
          border: 1px solid black;
          background-color: violet;
          height: 100%;
        "
      >
        <div
          class="top-actions"
          style="height: 5rem; margin-bottom: 2rem; border: 1px solid black"
        >
          <p>Didn't find what you need?</p>
          <button>Add item</button>
        </div>
        <div
          class="lists__title"
          style="
            font-size: 2rem;
            display: flex;
            justify-content: space-between;
            margin-bottom: 1rem;
            border: 1px solid black;
          "
        >
          <p>Shopping list</p>
          <button>edit</button>
        </div>
        <div
          class="lists__container"
          style="min-height: 70px; max-height: 60vh; overflow-y: auto"
        >
          <div class="list__title">
            <p>Fruit and vegetables</p>
          </div>
          <div class="list__items" style="height: 20%">
            <div class="item" v-for="(item, index) in items" :key="index">
              <p class="item__name">{{ item.name }}</p>
              <button class="item__quantity">{{ item.quantity }} pcs</button>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-actions" style="width: 100%">
        <div style="border: 1px solid black; background-color: white">
          <input
            type="text"
            name="item__name"
            id="item-name"
            placeholder="Enter a name"
          />
          <button type="submit">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-container {
  display: grid;
  grid-template-columns: auto 1fr auto;
  height: 100vh;
  overflow: hidden;
  padding: 0%;
  margin: 0%;
  background-color: blue;
}

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

.item {
  display: flex;
  justify-content: space-between;

  .item__name {
    font-size: 1.5rem;
    border: 1px solid black;
  }

  .item__quantity {
    border: 1px solid black;
  }
}

// @media (max-width: 768px) {
//   .center {
//     display: none;
//   }
// }
</style>
