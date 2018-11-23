<template>
  <section>
    <div id="app" v-bind:style="styleObject">
      <router-view class="view three" name="snow"></router-view>
      <router-view class="view two" name="dedede"></router-view>
      <div class="inner">
        <div class="in1">
          <div class="myname-outer">
            <p class="myname" v-bind:style="styleObject">Hello,I'm Kazuki!</p>
          </div>
        </div>
        <div class="in2">
          <div class="icon-space">
          </div>
          <div class="icon-wrapper">
            <div class="icon-git">
              <a href="https://github.com/kazukinakamuraKN">
                <svg id="icon" v-bind:style="styleObject" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100%" height="100%">
                  <path id="icon" d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z "/>
                </svg>
              </a>
            </div>
          </div>
          <div class="icon-wrapper">
            <div class="icon-devto">
              <a href="https://dev.to/kazukinakamurakn">
                <svg id="icon" v-bind:style="styleObject" xmlns="http://www.w3.org/2000/svg" viewBox="-45 -15 550 550" width="100%" height="100%">
                  <path id="icon" d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="icon-wrapper">
            <div class="icon-twitter">
              <a href="https://twitter.com/kazukkinakamura">
                <svg id="icon" v-bind:style="styleObject" xmlns="http://www.w3.org/2000/svg" viewBox="20 30 320 320" width="100%" height="100%">
                  <path id="icon" d="M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"/>
                </svg>
              </a>
            </div>
          </div>
          <div class="icon-wrapper">
            <div class="icon-linkedin">
              <a href="https://www.linkedin.com/in/%E4%B8%80%E8%B2%B4-%E4%B8%AD%E6%9D%91-992a04172/">
                <svg id="icon" v-bind:style="styleObject" xmlns="http://www.w3.org/2000/svg" viewBox="-40 -30 500 500" width="100%" height="100%">
                  <path id="icon" d="M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707 c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21 v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824 C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463 c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z M5.477,420.56h92.184v-277.32H5.477V420.56z"/>
                </svg>
              </a>
            </div>
          </div>
          <div class="icon-space">
          </div>
        </div>
        <div class="in3">
          <button class="changemeButton" v-bind:style="styleObject" v-on:click="change">touch me!!</button>
          <p class="viewColor" v-bind:style="styleObject">{{ color2 }} {{ styleObject.color }}</p>
        </div>
      </div>
      <Snow class="snow" :sendColor="styleObject.color"></Snow>
    </div>
  </section>
</template>

<script>

import Snow from './components/Snow.vue'

export default {
  name: 'App',
  components: {
    Snow
  },
  data() {
    return {
      styleObject: {
        color: '',
        fill: '#ffffff',
        backgroundColor: 'transparent'
      },
      color2: ''
    }
  },
  methods: {
    change() {
      this.color = Math.floor(Math.random() * 16777216).toString(16)
      this.color2 = this.color
      if(Math.floor(Math.random()*2)){
        this.color2 = '#000000'
      }else{
        this.color2 = '#ffffff'
      }
      this.color = '#000000'.slice(0, -this.color.length) + this.color
      if(Math.floor(Math.random()*2)){
        [this.color, this.color2] = [this.color2, this.color]
      }
      this.styleObject.color = this.color
      this.styleObject.fill = this.color
      this.nowColor = this.color
      this.styleObject.backgroundColor = this.color2

    }
  }
}
</script>

<style>

svg {
  background-color: transparent !important;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  width: 100vw;
  height: 100vh;
}

.icon-wrapper {
  height: 100%;
  width: 16.6%;
  background-color: transparent !important;
}

.icon-space {
  height: 100%;
  width: 16.6%;
  background-color: transparent !important;
}

.icon-git,
.icon-twitter,
.icon-devto,
.icon-linkedin
{
  position: relative;
  flex: 1;
  height: 100%;
  width: 100%;
  display: inline-block;
  background-color: transparent !important;
}

#icon {
  position: relative;
  z-index: 1;
  width: 100%;
}

.inner {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 100vw;
  height: 40vh;
}

.myname {
  font-size: calc(4vw + 1.5rem);
  font-weight: 700;
  vertical-align: middle;
  display: table-cell;
  color: white;
}

.myname-outer {
  display: table;
  width: 100%;
  height: 100%;
}

.in1 {
  height: 50%;
  width: 100%;
}

.in2 {
  width: 100%;
  height: 8vh;
  display: flex;
  display: -moz-flex;
  display: -o-flex;
  display: -webkit-flex;
  display: -ms-flex;
  flex-direction: row;
  -moz-flex-direction: row;
  -o-flex-direction: row;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  justify-content: space-around;
}

.in3 {
  position: relative;
  height: 35%;
  z-index: 2;
}

.changemeButton {
  background-color: transparent !important;
  border-color: transparent !important;
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  border: dashed 4px transparent;
  border-radius: 6px;
  color: #2679ff;
  font-weight: 900;
  font-size: 16px;
  background-image: none;
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  animation: changemeButtonAcrion 3s ease infinite;
}

@keyframes changemeButtonAcrion {
  0% { transform:translateY(0) }
  5% { transform:translateY(-5px) }
  10% { transform:translateY(0) }
  20% { transform:translateY(-5px) }
  25% { transform:translateY(0) }
  30% { transform:translateY(0) }
  50% { transform:translateY(0) }
  100% { transform:translateY(0) }
}

.viewColor {
  font-size: 12px;
  background-color: transparent !important;
}
</style>
