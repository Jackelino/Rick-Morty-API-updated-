<template>
  <div class="input-group">
    <input
        type="seach"
        class="form-control text-white border-input-seach"
        id="inlineFormInputGroupUsername"
        placeholder="Search for characters"
        v-model="name"
        v-on:keyup="filter()"
        autofocus
    />
  </div>
  }
</template>

<script>
import { useStore } from "vuex";
import { ref } from "vue";
export default {
  name: "FilterByName",
  setup() {
    const store = useStore();
    const name = ref("");
    const filter = () => {
      store.dispatch("filterByName", name.value);
    };
    return { name, filter };
  },
}
</script>

<style >

</style>
