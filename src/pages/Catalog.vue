<script lang="ts" setup>
const categories = [
  {
    category: "fruits",
    items: [
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
    ],
  },
  {
    category: "vegetables",
    items: [
      "Carrots",
      "Broccoli",
      "Spinach",
      "Tomatoes",
      "Cucumbers",
      "Peppers",
      "Lettuce",
      "Onions",
      "Garlic",
      "Potatoes",
    ],
  },
  {
    category: "meat",
    items: ["Chicken", "Beef", "Pork", "Lamb", "Turkey"],
  },
  {
    category: "fish",
    items: ["Salmon", "Tuna", "Cod", "Trout", "Sardines"],
  },
  {
    category: "beverages",
    items: ["Water", "Juice", "Soda", "Tea", "Coffee"],
  },
  {
    category: "pet",
    items: ["Dog Food", "Cat Food", "Bird Seed", "Fish Food", "Pet Toys"],
  },
];
</script>

<template>
  <div class="catalog-container">
    <div class="head">
      <h1>
        Shoppingify allows you to take your <br />
        shopping list wherever you go
      </h1>
      <input type="text" />
    </div>
    <div class="catalog">
      <section
        v-for="(category, index) in categories"
        :key="index"
        style="margin-bottom: 2rem"
      >
        <h2>{{ category.category }}</h2>
        <div>
          <ul style="display: flex; flex-wrap: wrap; row-gap: 2rem">
            <li v-for="(item, index) in category.items" :key="index">
              <input type="checkbox" />
              <label>{{ item }}</label>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
.catalog-container {
  background-color: red;
  height: 100vh;
  overflow-y: scroll;

  .head {
    display: flex;
    align-items: center;
  }
}
</style>
