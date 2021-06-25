<template>
  <div class="p-12 ">
    <h2 class="py-6 text-lg font-semibold">
      Here are some little projects I have been working on lately:
    </h2>
    <div class="flex content-center">
      <ul>
        <li class="transform  transition duration-300 hover:scale-110 ">
          <nuxt-link to="/romantic"
            >A map with romantic spots in Leipzig, Germany
          </nuxt-link>
        </li>
        <li
          class="transform  hover:bg-opacity-90 transition duration-300 hover:scale-110"
        >
          <nuxt-link to="/converter"
            >A cup-to-grams converter for all the bakers out there
          </nuxt-link>
        </li>
        <li
          class="transform  hover:bg-opacity-90 transition duration-300 hover:scale-110"
        >
          <nuxt-link to="/photomemories">
            <span>
              A little gallery with photos from winter Madrid
            </span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
