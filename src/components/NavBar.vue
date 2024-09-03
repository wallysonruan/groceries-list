<script setup lang="ts">
import ButtonComponent from "./ButtonComponent.vue";
import BulletedList from "@/assets/icons/bulleted-list.svg";
import History from "@/assets/icons/history.svg";
import Chart from "@/assets/icons/chart.svg";
</script>
<template>
  <div class="navbar">
    <ButtonComponent text="User Profile" />
    <ul>
      <li>
        <ButtonComponent
          class="navbar__item"
          tooltip="Items"
          :iconSvg="BulletedList"
          to="/"
        />
      </li>
      <li>
        <ButtonComponent
          class="navbar__item"
          tooltip="History"
          :iconSvg="History"
          to="/history"
        />
      </li>
      <li>
        <ButtonComponent
          class="navbar__item"
          tooltip="Statistics"
          :iconSvg="Chart"
          to="/statistics"
        />
      </li>
    </ul>
    <ButtonComponent class="navbar__item" text="Cart" />
  </div>
</template>
<style scoped lang="scss">
.navbar {
  height: 100vh;
  width: 4rem;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
      width: 100%;

      &:not(:last-child) {
        margin-bottom: 3rem;
      }

      .navbar__item {
        width: 100%;
        position: relative;

        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background-color: transparent;
        }

        &:hover::before {
          border-left: 8px solid #f9a109;
          border-radius: 0 4px 4px 0;
        }
      }
    }
  }
}
</style>
