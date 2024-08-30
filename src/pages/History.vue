<script lang="ts" setup>
function generateRandomDate(start: Date, end: Date) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  )
    .toISOString()
    .split("T")[0];
}

function generateLists(count: number) {
  const listNames = [
    "Grocery List",
    "Birthday Grocery List",
    "Christmas Grocery List",
    "Thanksgiving Grocery List",
    "New Year Grocery List",
    "Easter Grocery List",
    "Halloween Grocery List",
    "Party Grocery List",
    "Weekly Grocery List",
    "Monthly Grocery List",
  ];
  const statuses = ["completed", "pending", "in-progress"];

  return Array.from({ length: count }, (_, i) => ({
    name: listNames[Math.floor(Math.random() * listNames.length)],
    created_at: generateRandomDate(new Date(2021, 9, 1), new Date(2021, 9, 31)),
    status: statuses[Math.floor(Math.random() * statuses.length)],
  }));
}

const lists = generateLists(20);
</script>

<template>
  <div class="history-container" style="padding: 2rem">
    <div class="head">
      <h1>Shopping history</h1>
    </div>
    <div class="history">
      <div
        v-for="(list, index) in lists"
        :key="index"
        style="
          display: flex;
          justify-content: space-between;
          margin-bottom: 1rem;
          border: 1px solid black;
        "
      >
        <p>{{ list.name }}</p>
        <div style="display: flex; gap: 1rem">
          <p>{{ list.created_at }}</p>
          <p>{{ list.status }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.history-container {
  background-color: red;
  height: 100vh;
  overflow-y: scroll;

  .head {
    display: flex;
    align-items: center;
  }
}
</style>
