<script lang="ts" setup>
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

const items = generateItems(40);
</script>

<template>
  <div class="container">
    <div class="center"></div>
    <div class="right">
      <v-navigation-drawer permanent width="389" location="right">
        <div
          class="shopping-list"
          style="display: flex; flex-direction: column; height: 100vh"
        >
          <div
            class="shopping-list__content"
            style="
              height: 90%;
              padding: 40px 40px 0 40px;
              border: 1px solid black;
            "
          >
            <div
              class="top-actions"
              style="
                height: 130px;
                margin-bottom: 2rem;
                border: 1px solid black;
              "
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
              style="height: 100%; overflow-y: auto"
            >
              <div class="list__title">
                <p>Fruit and vegetables</p>
              </div>
              <div
                class="list__items"
                v-for="(item, index) in items"
                :key="index"
              >
                <div class="item">
                  <p class="item__name">{{ item.name }}</p>
                  <button class="item__quantity">
                    {{ item.quantity }} pcs
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="bottom-actions" style="width: 100%">
            <div style="padding: 40px; border: 1px solid black; background-color: white;">
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
      </v-navigation-drawer>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  background-color: red;
  height: 100vh;
  width: 100vw;
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
</style>
