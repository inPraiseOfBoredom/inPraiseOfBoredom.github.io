<template>
  <div class=" p-6">
    <section id="slider">
      <div class="slide">
        <h2 class="slideTitle">
          One winter day in Madrid
        </h2>
        <img
          class="slideImage"
          src="~/assets/photos/2.jpg"
          width="800"
          alt=""
        />
      </div>

      <div class="slide">
        <h2 class="slideTitle">
          A view to the Royal castle
        </h2>
        <img
          class="slideImage"
          src="~/assets/photos/1.jpg"
          alt=""
          width="800"
        />
      </div>
      <div class="slide">
        <h2 class="slideTitle">
          Some majestic arc
        </h2>
        <img
          class="slideImage"
          src="~/assets/photos/3.jpg"
          alt=""
          width="800"
        />
      </div>
      <div class="slide">
        <h2 class="slideTitle">
          Nice memories from Madrid
        </h2>
        <img
          class="slideImage"
          src="~/assets/photos/4.jpg"
          alt=""
          width="800"
        />
      </div>
      <div class="slide">
        <h2 class="slideTitle">
          Still winter day in Madrid
        </h2>
        <img
          class="slideImage"
          src="~/assets/photos/5.jpg"
          alt=""
          width="800"
        />
      </div>
      <div class="slide">
        <h2 class="slideTitle">
          Still winter day in Madrid
        </h2>
        <img
          class="slideImage"
          src="~/assets/photos/6.jpg"
          alt=""
          width="800"
        />
      </div>
      <div class="slide">
        <h2 class="slideTitle">
          Still winter day in Madrid
        </h2>
        <img
          class="slideImage"
          src="~/assets/photos/7.jpg"
          alt=""
          width="800"
        />
      </div>
      <div class="slide">
        <h2 class="slideTitle">
          Still winter day in Madrid
        </h2>
        <img
          class="slideImage"
          src="~/assets/photos/8.jpg"
          alt=""
          width="800"
        />
      </div>
      <div class="slide">
        <h2 class="slideTitle">
          Still winter day in Madrid
        </h2>
        <img
          class="slideImage"
          src="~/assets/photos/9.jpg"
          alt=""
          width="800"
        />
      </div>
      <div class="slide">
        <h2 class="slideTitle">
          Still winter day in Madrid
        </h2>
        <img
          class="slideImage"
          src="~/assets/photos/10.jpg"
          alt=""
          width="800"
        />
      </div>
      <div class="slide">
        <h2 class="slideTitle">
          Still winter day in Madrid
        </h2>
        <img
          class="slideImage"
          src="~/assets/photos/11.jpg"
          alt=""
          width="800"
        />
      </div>
      <div class="slide">
        <h2 class="slideTitle">
          Still winter day in Madrid
        </h2>
        <img
          class="slideImage"
          src="~/assets/photos/12.jpg"
          alt=""
          width="800"
        />
      </div>
      <div class="slide">
        <h2 class="slideTitle">
          Still winter day in Madrid
        </h2>
        <img
          class="slideImage"
          src="~/assets/photos/13.jpg"
          alt=""
          width="800"
        />
      </div>
      <div class="slide">
        <h2 class="slideTitle">
          Still winter day in Madrid
        </h2>
        <img
          class="slideImage"
          src="~/assets/photos/14.jpg"
          alt=""
          width="800"
        />
      </div>
    </section>

    <!-- <ul class="grid grid-cols-7  gap-4 p-10">
      <li v-for="n in 14" :key="n">
        <img
          class="w-4/12 transform cursor-pointer hover:bg-opacity-90 transition duration-300 hover:scale-150"
          @click="enlarge"
          :src="require(`~/assets/photos/${n}.jpg`)"
        />
      </li>
    </ul>
    <div id="frame">
      <img class="w-8/12 p-10" :src="this.enlarged" />
    </div> -->
  </div>
</template>

<script>
import Vue from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default Vue.extend({
  name: "Photomemories",
  layout: "default",

  mounted() {
    this.slideIt();
  },
  methods: {
    slideIt() {
      gsap.utils.toArray(".slideTitle").forEach(text => {
        gsap
          .timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              scroller: text.closest("#slider"),
              horizontal: true,
              trigger: text.closest(".slide"),
              start: "left right",
              end: "left left",
              scrub: true
            }
          })
          .fromTo(text, { x: 120 }, { x: -120 }, 0)
          .from(text.nextElementSibling, { scale: 0.7 }, 0);
      });
    }
  }
});
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

#slider {
  position: relative;
  white-space: nowrap;
  overflow: auto;
}
.slide {
  display: inline-block;
  position: relative;
}
.slideTitle {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  text-shadow: 1px 1px 3px black;
  z-index: 1;
  font-size: 3em;
  font-weight: 400;
}
.slideImage {
  transform-origin: bottom left;
}

::-webkit-scrollbar {
  width: 0.6rem;

  border-left: 0;
  background: #e4dadf;
}
::-webkit-scrollbar-track {
  background: none;
}

::-webkit-scrollbar-thumb {
  background: rgb(126, 133, 139);
}
</style>
