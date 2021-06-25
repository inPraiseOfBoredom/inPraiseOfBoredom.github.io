<template>
  <div class="px-6">
    <div>
      <h1 class="py-6">
        Here you can convert your measurements from cups to grams
      </h1>

      <h3></h3>
      <form class="">
        <input
          type="number"
          v-model="inputCup"
          name="cups"
          min="1"
          placeholder="1"
          class="p-1 text-xl text-gray-800 font-medium focus:outline-none appearance-none"
        />
        <label for="cups">Cup(s) of</label>

        <select
          v-model="selectedIngredient"
          class="p-1 text-xl  focus:outline-none appearance-none "
        >
          <option disabled value="">Select one</option>
          <option value="Milk">Milk</option>
          <option value="Sugar">Sugar</option>
          <option value="Oil">Oil</option>
          <option value="Flour">Flour</option>
        </select>
      </form>

      <button
        class="mt-4 p-2 ring-1 ring-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
        @click.prevent="convert"
      >
        Let's convert
      </button>
    </div>

    <div class="h-1/6 bg-red-500 border border-indigo-200  mt-10 p-10">
      <p v-if="result" class="text-black">
        {{ result }} grams of {{ selectedIngredient }}
      </p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  layout: "gradient",
  data() {
    return {
      inputCup: "",
      selectedIngredient: "",
      ingredients: ["Milk", "Oil", "Sugar", "Flour"],
      value: 1,
      result: ""
    };
  },
  methods: {
    convert() {
      switch (this.selectedIngredient) {
        case "Milk":
          this.result = this.value * 240 * this.inputCup;
          break;
        case "Oil":
          this.result = this.value * 225 * this.inputCup;
          break;
        case "Sugar":
          this.result = this.value * 200 * this.inputCup;
          break;
        case "Flour":
          this.result = this.value * 125 * this.inputCup;
          break;
      }
      console.log(this.result);
    }
  }
});
</script>

<style></style>
