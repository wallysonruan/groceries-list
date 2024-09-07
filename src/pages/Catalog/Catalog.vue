<script lang="ts" setup>
import { toCapitalCaseExceptAnd } from "@/utils/string.ts";
import CatalogModel from "./model";

type CatalogProp = {
  model: CatalogModel;
};

const { model } = defineProps<CatalogProp>();
</script>

<template>
  <div class="catalog-container">
    <div class="head">
      <h1>
        <span>Shoppingify</span> allows you to take your <br />
        shopping list wherever you go
      </h1>
      <label class="catalog__search" for="search-catalog-item">
        <input type="text" id="search-catalog-item" placeholder="search item" />
      </label>
    </div>
    <div class="catalog">
      <section
        v-for="(category, index) in model.categories"
        :key="index"
        style="margin-bottom: 2rem"
      >
        <h2>{{ toCapitalCaseExceptAnd(category.name) }}</h2>
        <div>
          <ul style="display: flex; flex-wrap: wrap; row-gap: 2rem">
            <li
              v-for="(item, index) in category.items"
              :key="index"
              class="catalog__item"
            >
              <label :for="`${category.name}-item-${index}`"
                >{{ item
                }}<input :id="`${category.name}-item-${index}`" type="checkbox"
              /></label>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
.catalog-container {
  background-color: #fafafe;
  height: 100vh;
  overflow-y: scroll;
  padding: 2rem 4rem;

  .head {
    display: grid;
    grid-template-columns: 2fr 1fr;
    margin-bottom: 3rem;

    span {
      color: #f9a109;
    }

    .catalog__search {
      position: relative;
      padding: 1rem 0 1rem 3rem;
      background-color: white;
      height: max-content;
      border-radius: 12px;
      cursor: pointer;

      &::before {
        position: absolute;
        content: url("@/assets/icons/magnifier.svg");
        top: 50%;
        left: 10px;
        transform: translate(0%, -50%);
      }

      input {
        border: none;

        &:focus {
          outline: none;
        }

        &::placeholder {
          color: #bdbdbd;
        }
      }
    }
  }

  .catalog {
    h2 {
      font-size: 1.5rem;
      font-weight: 500;
      margin-bottom: 1rem;
    }

    .catalog__item {
      width: 9rem;
      height: min-content;
      background-color: white;
      border-radius: 12px;
      box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.05);

      &:not(:last-of-type) {
        margin-right: 1rem;
      }

      label {
        width: 100%;
        height: 100%;
        padding: 1rem;
        word-wrap: break-word;
        display: flex;
        align-items: start;
        justify-content: space-between;

        &:hover {
          cursor: pointer;
        }
      }

      input[type="checkbox"] {
        position: relative;
        appearance: none;
        -webkit-appearance: none;
        width: 1rem;
        height: 1rem;

        &::before {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          content: url("@/assets/icons/plus.svg");
        }
        &:checked::before {
          content: url("@/assets/icons/remove-or-close.svg");
        }
      }
    }
  }
}
</style>
