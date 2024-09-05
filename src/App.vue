<script lang="ts" setup>
import NavBar from "./components/NavBar.vue";
import ButtonComponent from "./components/ButtonComponent.vue";
import Pencil from "@/assets/icons/pencil.svg";
import { toCapitalCase } from "@/utils/string.ts";

function generateRandomQuantity() {
  return Math.floor(Math.random() * 100) + 1; // Random quantity between 1 and 100 units
}

const categories = [
  {
    category: "fruits",
    items: [
      { name: "Apples", quantity: generateRandomQuantity() },
      { name: "Bananas", quantity: generateRandomQuantity() },
      { name: "Oranges", quantity: generateRandomQuantity() },
      { name: "Grapes", quantity: generateRandomQuantity() },
      { name: "Mangos", quantity: generateRandomQuantity() },
      { name: "Pineapples", quantity: generateRandomQuantity() },
      { name: "Strawberries", quantity: generateRandomQuantity() },
      { name: "Blueberries", quantity: generateRandomQuantity() },
      { name: "Raspberries", quantity: generateRandomQuantity() },
      { name: "Blackberries", quantity: generateRandomQuantity() },
    ],
  },
  {
    category: "vegetables",
    items: [
      { name: "Carrots", quantity: generateRandomQuantity() },
      { name: "Broccoli", quantity: generateRandomQuantity() },
      { name: "Spinach", quantity: generateRandomQuantity() },
      { name: "Tomatoes", quantity: generateRandomQuantity() },
      { name: "Cucumbers", quantity: generateRandomQuantity() },
      { name: "Peppers", quantity: generateRandomQuantity() },
      { name: "Lettuce", quantity: generateRandomQuantity() },
      { name: "Onions", quantity: generateRandomQuantity() },
      { name: "Garlic", quantity: generateRandomQuantity() },
      { name: "Potatoes", quantity: generateRandomQuantity() },
    ],
  },
  {
    category: "meat",
    items: [
      { name: "Chicken", quantity: generateRandomQuantity() },
      { name: "Beef", quantity: generateRandomQuantity() },
      { name: "Pork", quantity: generateRandomQuantity() },
      { name: "Lamb", quantity: generateRandomQuantity() },
      { name: "Turkey", quantity: generateRandomQuantity() },
    ],
  },
  {
    category: "fish",
    items: [
      { name: "Salmon", quantity: generateRandomQuantity() },
      { name: "Tuna", quantity: generateRandomQuantity() },
      { name: "Cod", quantity: generateRandomQuantity() },
      { name: "Trout", quantity: generateRandomQuantity() },
      { name: "Sardines", quantity: generateRandomQuantity() },
    ],
  },
  {
    category: "beverages",
    items: [
      { name: "Water", quantity: generateRandomQuantity() },
      { name: "Juice", quantity: generateRandomQuantity() },
      { name: "Soda", quantity: generateRandomQuantity() },
      { name: "Tea", quantity: generateRandomQuantity() },
      { name: "Coffee", quantity: generateRandomQuantity() },
    ],
  },
  {
    category: "pet",
    items: [
      { name: "Dog Food", quantity: generateRandomQuantity() },
      { name: "Cat Food", quantity: generateRandomQuantity() },
      { name: "Bird Seed", quantity: generateRandomQuantity() },
      { name: "Fish Food", quantity: generateRandomQuantity() },
      { name: "Pet Toys", quantity: generateRandomQuantity() },
    ],
  },
];
</script>

<template>
  <div class="app-container">
    <NavBar />
    <div class="center">
      <router-view />
    </div>
    <div
      class="shopping-list"
      style="
        position: relative;
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
          background-color: #fff0de;
          height: 100%;
        "
      >
        <div
          class="top-actions"
          style="
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 7rem;
            margin-bottom: 2rem;
            border-radius: 24px;
            background-color: #80485b;
          "
        >
          <p style="color: white; margin-bottom: 1rem">
            Didn't find what you need?
          </p>
          <button
            style="
              background-color: white;
              border-radius: 12px;
              border-color: transparent;
              padding: 0.7rem 1rem;
            "
          >
            Add item
          </button>
        </div>
        <div
          class="lists__title"
          style="
            display: flex;
            justify-content: space-between;
            margin-bottom: 1rem;
          "
        >
          <p style="font-size: 2rem">Shopping list</p>
          <ButtonComponent :iconSvg="Pencil" tooltip="edit" />
        </div>
        <div
          class="lists__container"
          style="min-height: 70px; max-height: 62vh; overflow-y: auto"
        >
          <div
            class="list"
            v-for="(category, index) in categories"
            :key="index"
          >
            <div class="list__title">
              <p>{{ toCapitalCase(category.category) }}</p>
            </div>
            <div class="list__items">
              <div
                class="item"
                v-for="(item, index) in category.items"
                :key="index"
              >
                <p class="item__name">{{ item.name }}</p>
                <button
                  style="
                    background-color: transparent;
                    color: #f9a109;
                    border: 2px solid #f9a109;
                    border-radius: 12px;
                    padding: 0.5rem;
                  "
                >
                  {{ item.quantity }} pc<span v-show="item.quantity > 1"
                    >s</span
                  >
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="bottom-actions"
        style="
          position: absolute;
          bottom: 0;
          height: 130px;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 40px;
          background-color: white;
        "
      >
        <div
          style="
            display: grid;
            grid-template-columns: 2fr 1fr;
            border: 2px solid #f9a109;
            border-radius: 12px;
            background-color: white;
            height: 4rem;
            width: 100%;
          "
        >
          <input
            type="text"
            name="item__name"
            id="item-name"
            placeholder="Enter a name"
          />
          <button
            type="submit"
            style="
              background-color: #f9a109;
              color: white;
              border-color: transparent;
              border-radius: 10px;
              height: 100%;
              padding: 0.5rem;
            "
          >
            Save
          </button>
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
}

.list {
  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }
}

.list__title {
  color: #828282;
  margin-bottom: 1rem;
}

.item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  .item__name {
    font-size: 1.5rem;
  }
}

input[name="item__name"] {
  border-color: transparent;
  height: 100%;
  width: 100%;
  border-radius: inherit;
  padding-left: 0.5rem;

  &::placeholder {
    color: #bdbdbd;
  }

  &:focus {
    outline: none;
  }
}
</style>
