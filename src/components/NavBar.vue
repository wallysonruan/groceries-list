<script setup lang="ts">
import { computed, ref } from "vue";
import ButtonComponent from "./ButtonComponent.vue";
import BulletedList from "@/assets/icons/bulleted-list.svg";
import History from "@/assets/icons/history.svg";
import Chart from "@/assets/icons/chart.svg";
import Cart from "@/assets/icons/cart.svg";
import router from "@/router";

const currentPage = computed(() => {
  return router.currentRoute.value.path.substring(1);
});
const totalCartItems = ref(0);
</script>
<template>
  <div class="navbar">
    <ButtonComponent text="User Profile" style="visibility: hidden" />
    <ul>
      <li :current-page="currentPage === ''">
        <ButtonComponent tooltip="Items" :iconSvg="BulletedList" to="/" />
      </li>
      <li :current-page="currentPage === 'history'">
        <ButtonComponent
          class="navbar__item"
          tooltip="History"
          :iconSvg="History"
          to="/history"
        />
      </li>
      <li :current-page="currentPage === 'statistics'">
        <ButtonComponent
          tooltip="Statistics"
          :iconSvg="Chart"
          to="/statistics"
        />
      </li>
    </ul>
    <div class="cart" style="visibility: hidden">
      <ButtonComponent tooltip="Cart" :iconSvg="Cart" />
      <span v-show="totalCartItems">{{ totalCartItems }}</span>
    </div>
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

      &[current-page="true"] {
        position: relative;

        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          border-left: 8px solid #f9a109;
          border-radius: 0 4px 4px 0;
        }
      }
    }
  }

  .cart {
    position: relative;
    width: 50px;
    border-radius: 50%;
    background-color: #f9a109;

    span {
      position: absolute;
      width: 20px;
      height: 20px;
      top: -7px;
      right: 0;
      border-radius: 4px;
      color: white;
      background-color: red;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
