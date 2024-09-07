<script lang="ts" setup>
import ButtonComponent from "@/components/ButtonComponent.vue";
import ChevronRight from "@/assets/icons/chevron-right.svg";

function generateRandomDate(start: Date, end: Date) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  )
    .toISOString()
    .split("T")[0];
}

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

const statuses = ["completed", "cancelled"];

function generateHistory(maxList: number) {
  return Array.from(
    { length: Math.floor(Math.random() * maxList) },
    (_, i) => ({
      created_at: generateRandomDate(
        new Date(2021, 1, 1),
        new Date(2021, 12, 31),
      ),
      name: listNames[Math.floor(Math.random() * listNames.length)],
      status: statuses[Math.floor(Math.random() * statuses.length)],
    }),
  );
}

const lists = generateHistory(20);

const listsSortedByDate = lists.sort((a, b) => {
  const aDate = new Date(a.created_at);
  const bDate = new Date(b.created_at);

  if (aDate < bDate) {
    return -1;
  }
  if (aDate > bDate) {
    return 1;
  }
  return 0;
});

const arrayListsSeparatedByMonth: {
  month: number;
  year: number;
  lists: any[];
}[] = listsSortedByDate.reduce(
  (acc: { month: number; year: number; lists: any[] }[], list) => {
    const date = new Date(list.created_at);
    const month = date.getMonth() + 1; // getMonth() returns 0-11, so add 1
    const year = date.getFullYear();

    const existingGroup = acc.find(
      (group) => group.month === month && group.year === year,
    );

    if (existingGroup) {
      existingGroup.lists.push(list);
    } else {
      acc.push({
        month,
        year,
        lists: [list],
      });
    }

    return acc;
  },
  [],
);

function getMonthNameByNumber(monthNumber: number): string {
  const months = [
    "Dummy",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[monthNumber];
}
</script>

<template>
  <div class="history-container" style="padding: 2rem">
    <div class="head">
      <h1>Shopping history</h1>
    </div>
    <div class="history">
      <section
        class="history__item"
        v-for="(date, index) in arrayListsSeparatedByMonth"
        :key="index"
      >
        <h2>{{ getMonthNameByNumber(date.month) + " " + date.year }}</h2>
        <div
          v-for="(list, index) in date.lists"
          :key="index"
          class="item__list"
        >
          <p>{{ list.name }}</p>
          <div class="item__info">
            <p class="info__created-at">
              {{ list.created_at.split("-").join(".") }}
            </p>
            <p class="info__status" :status="list.status">{{ list.status }}</p>
            <ButtonComponent :iconSvg="ChevronRight" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
.history-container {
  background-color: #fafafe;
  height: 100vh;
  overflow-y: scroll;
  padding: 2rem 4rem;

  .head {
    display: flex;
    align-items: center;

    h1 {
      margin-bottom: 2rem;
    }
  }

  .history {
    .history__item {
      margin-bottom: 2rem;

      h2 {
        font-size: 1rem;
        font-weight: 400;
        margin-bottom: 1rem;
      }

      .item__list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        padding: 10px 20px;
        border-radius: 12px;
        background-color: white;
        box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.05);
      }

      .item__info {
        display: flex;
        align-items: center;
        gap: 1rem;

        .info__created-at {
          position: relative;
          padding-left: 1.5rem;
          font-size: 0.8rem;
          color: #c1c1c4;

          &::before {
            position: absolute;
            top: -15%;
            left: 0;
            content: url("../assets/icons/calendar.svg");
          }
        }

        .info__status {
          font-size: 0.8rem;
          padding: 7px;
          border-radius: 12px;
          height: min-content;
          border-width: 1px;
          border-style: solid;

          &[status="completed"] {
            border-color: #56ccf2;
            color: #56ccf2;
          }

          &[status="cancelled"] {
            border-color: #eb5757;
            color: #eb5757;
          }
        }
      }
    }
  }
}
</style>
