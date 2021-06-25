<template>
  <div class="bg-gray-900 py-4 px-6">
    <nav class="flex flex-nowrap">
      <ul>
        <li>
          <nuxt-link to="/">
            <span
              class="uppercase tracking-widest text-sm font-semibold hover:underline"
            >
              Home</span
            ></nuxt-link
          >
        </li>

        <li>
          <nuxt-link to="/projects">
            <span
              class="uppercase tracking-widest text-sm font-semibold hover:underline"
            >
              Projects
            </span>
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  color: white;
}
a {
  color: white;
}
</style>
