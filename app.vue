<script setup lang="ts">
enum Gender{
  GIRL = 'Girl',
  BOY = 'Boy',
  OTHER = 'Others',
}
enum Populartiy{
  UNIQUE = 'Unique',
  TRENDY = 'Trendy',
}
enum Lenght{
  LONG = 'Long',
  SHORT = 'Short',
  BOTH = 'Both',
}

interface OptionState {
  gender: Gender;
  popularity: Populartiy;
  length: string;
}

const Opt = reactive<OptionState>({
  gender: Gender.BOY,
  popularity: Populartiy.TRENDY,
  length: Lenght.BOTH,
});
</script>

<template>
  <div>
    <div class="page-head container">
      <h1>Nuxt - App</h1>
      <p>
        We Chose Nuxt as a view FrameWork and we Want "Single Page Application".
      </p>
    </div>
    <div class="page-content">
      <div class="container">
        <ul>
          <li>
            <h4>Select gender:</h4>
            <nuxt-link :class="Opt.gender === 'Boy' && 'active'">
              Boy
            </nuxt-link>
            <nuxt-link :class="Opt.gender === 'Girl' && 'active'"
              >Girl</nuxt-link
            >
            <nuxt-link :class="Opt.gender === 'Others' && 'active'"
              >Others</nuxt-link
            >
          </li>
          <li>
            <h4>Chose the names popularity:</h4>
            <nuxt-link :class="Opt.popularity === 'Trendy' && 'active'"
              >Trendy</nuxt-link
            >
            <nuxt-link :class="Opt.popularity === 'Unique' && 'active'"
              >Unique</nuxt-link
            >
          </li>
          <li>
            <h4>Chose the name Length</h4>
            <nuxt-link :class="Opt.length === 'Long' && 'active'"
              >Long</nuxt-link
            >
            <nuxt-link :class="Opt.length === 'Short' && 'active'"
              >Short</nuxt-link
            >
            <nuxt-link :class="Opt.length === 'Both' && 'active'"
              >Both</nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1,
p {
  text-align: center;
}
.page-content {
  max-width: 1200px;
  margin: 0 auto;
  background-color: var(--smokeGrey);
}
.page-content h4 {
  text-align: center;
}
.page-content li {
  text-align: center;
  padding: 20px 0;
}
.page-content ul {
  padding-bottom: 120px;
}
a.active {
  background: var(--Hashgreen);
  box-shadow: 0px 0px 5px 0 var(--Hashgreen);
}
</style>



