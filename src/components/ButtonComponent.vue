<script setup lang="ts">
import { RouterLink } from "vue-router";

type ButtonProps = {
  text?: string;
  tooltip?: string;
  to?: string;
  iconSvg?: string;
  iconAlt?: string;
};

defineProps<ButtonProps>();
</script>
<template>
  <div class="btn__container">
    <button v-if="!to" class="btn__item btn__regular">
      <img :src="iconSvg" :alt="iconAlt" v-if="iconSvg" />
      <span class="btn__text" v-if="text">{{ text }}</span>
    </button>
    <RouterLink v-else :to="to" class="btn__item btn__router-link">
      <img :src="iconSvg" :alt="iconAlt" v-if="iconSvg" />
      <span class="btn__text" v-if="text">
        {{ text }}
      </span>
    </RouterLink>
    <span class="btn__tooltip" v-if="tooltip">{{ tooltip }}</span>
  </div>
</template>
<style scoped lang="scss">
img {
  width: 1.5rem;
  height: 1.5rem;
}

.btn__container {
  width: 100%;
  position: relative;

  .btn__item {
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn__tooltip {
    position: absolute;
    top: 50%;
    left: 90%;
    transform: translate(0, -50%);
    background-color: #454545;
    color: white;
    padding: 0.5rem;
    border-radius: 4px;
    display: none;

    &:before {
      content: "";
      position: absolute;
      top: 50%;
      right: 100%;
      transform: translate(0, -50%);
      border: 6px solid transparent;
      border-right-color: #454545;
    }
  }

  &:hover .btn__tooltip {
    display: block;
  }
}
</style>
