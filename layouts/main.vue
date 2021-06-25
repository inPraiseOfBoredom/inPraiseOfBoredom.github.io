<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 ">
    <Navbar />
    <h1 class="text-2xl font-extrabold"></h1>
    <Nuxt />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar
  }
};
</script>

<style>
html {
  font-family: "Mulish", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

h1 {
  background: linear-gradient(
    45deg,
    #eea4b8 16.666%,
    #e985a0 16.666%,
    #f3a16a 33.333%,
    #eea873 33.333%,
    #e2a170 50%,
    #d5e69f 50%,
    #b2be8a 66.666%,
    #8fabe9 66.666%,
    #7da1ee 83.333%,
    #f8a2ed 83.333%
  );
  background-repeat: repeat;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 100%;
  animation: liquid 0.7s ease forwards;
}

h1:hover {
  animation: liquidonhover 0.5s ease-in forwards;
  cursor: pointer;
}

@keyframes liquid {
  0% {
    background-size: 650%;
  }
  40% {
    background-size: 650%;
  }
  100% {
    background-size: 100%;
  }
}
@keyframes liquidonhover {
  0% {
    background-size: 100%;
  }
  80% {
    background-size: 650%;
  }
  100% {
    background-size: 650%;
  }
}
</style>
