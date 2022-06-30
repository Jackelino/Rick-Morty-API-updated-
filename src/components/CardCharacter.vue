<template>
  <div class="card bg-card-dark text-white">
    <img :src="character.image" class="card-img-top" :alt="character.name"/>
    <div class="card-body">
      <h4 class="card-title">{{ character.name }}</h4>
      <p class="">
        <span>
          <i
              v-if="character.status == 'Alive'"
              class="fs-6 fas fa-circle status-alive"
          ></i>
          <i
              v-if="character.status == 'Dead'"
              class="fas fa-circle text-danger"
          ></i>
          <i
              v-if="character.status == 'unknown'"
              class="fas fa-circle text-warning"
          ></i>
          {{ character.status }}
        </span>
      </p>
      <p>
        Origen:
        <strong> {{ character.origin.name }} </strong>
      </p>
      <p>
        Location:
        <strong> {{ character.location.name }} </strong>
      </p>
    </div>
    <div class="card-footer text-muted">
      <div class="text-center">
        <a
            class="link-info"
            data-bs-toggle="modal"
            :data-bs-target="'#characterInfo' + character.id"
            href="#"
        >More information</a
        >
      </div>
    </div>
  </div>
  <ModalCharacter :character="character"/>
</template>

<script>
import ModalCharacter from "./ModalCharacter.vue";

export default {
  name: "CardCharacter",
  components: {
    ModalCharacter
  },
  props: {
    character: Object
  },
}
</script>

<style>

</style>
