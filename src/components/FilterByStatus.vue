<template>
  <div class="filter">
    <ul class="nav">
      <li class="nav-item">
        <a v-on:click="filter('')" class="nav-link text-light active" href="#">All</a>
      </li>
      <li class="nav-item">
        <a v-on:click="filter('Alive')" class="nav-link text-light" href="#">Alive</a>
      </li>
      <li class="nav-item">
        <a v-on:click="filter('Dead')" class="nav-link text-light" href="#">Dead</a>
      </li>
      <li class="nav-item">
        <a v-on:click="filter('unknown')" class="nav-link text-light" href="#">Unknown</a>
      </li>
    </ul>
  </div>
</template>

<script>
import {useStore} from "vuex";

export default {
  name: "FilterByStatus",

  setup() {
    const store = useStore();
    const filter = (status) => {
      store.dispatch("filterByStatus", status);
    };

    return {filter};
  },
}
</script>

<style >

</style>
