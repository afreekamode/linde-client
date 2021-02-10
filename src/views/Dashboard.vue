<template>
  <body
    class="bg-gradient-to-r from-teal-400 to-blue-500 focus:from-pink-500 focus:to-orange-500"
  >
    <div class="flex-center position-ref full-height flex" id="main">
      <div class="home text-center py-6 mt-6">
        <h4>
          Hi <em v-if="user">{{ user.user.first_name }}</em
          >!<br />
          Welcome
        </h4>
        <router-link class="nav-link" data-offset="90" :to="{ name: 'Landing' }"
          ><button class="start" id="signUp">Get Started</button></router-link
        >
      </div>
    </div>
  </body>
</template>
<script>
export default {
  data() {
    return {
      user: null
    };
  },
  mounted() {
    const loadingAnimationTime = 2000;
    const showMainAnimation = parent => {
      const boxContainer = document.createElement("div");
      boxContainer.style.overflow = "hidden";
      const box = document.createElement("div");
      box.classList.add("box", "flex");
      parent.appendChild(boxContainer);
      boxContainer.appendChild(box);
      const quote = [""];
      const quote2 = "LINDI";
      let delay = 0;
      // Add all the words
      for (let word in quote) {
        const text = document.createElement("p");
        text.textContent = quote[word];
        text.classList.add("animate-slideup");
        delay = delay + 22;
        text.style.animationDelay = delay + "ms";
        box.appendChild(text);
      }
      const textSecond = document.createElement("p");
      textSecond.textContent = quote2;
      textSecond.classList.add("animate-slideup");
      delay = delay + 32;
      textSecond.style.animationDelay = delay + "ms";
      box.appendChild(textSecond);

      const lastAnimationTime = 1000 + delay; // in ms
      // Add full stop
      let text = document.createElement("div");
      text.classList.add("fs", "flex");
      text.style.animationDelay = lastAnimationTime - 100 + "ms";
      box.appendChild(text);
    };

    const revealCurtain = parent => {
      const curtain = document.createElement("div");
      curtain.classList.add("flex", "curtain");
      parent.appendChild(curtain);
      const progressBar = document.createElement("div");
      progressBar.classList.add("progressBar");
      curtain.appendChild(progressBar);
      progressBar.classList.add("progressGrow-animation");
      return curtain;
    };

    const init = () => {
      const container = document.getElementById("main");
      const curtain = revealCurtain(container);
      setTimeout(() => {
        container.removeChild(curtain);
        showMainAnimation(container);
      }, loadingAnimationTime + 100);
    };

    init();
  }
};
</script>

<style>
body {
  font-family: "Nunito", sans-serif;
  font-weight: 200;
  height: 100vh;
  margin: 0;
}

.full-height {
  height: 100vh;
}

.flex-center {
  align-items: center;
  display: flex;
  justify-content: center;
}

.position-ref {
  position: relative;
}

.top-right {
  position: absolute;
  right: 10px;
  top: 18px;
  color: rgb(245, 245, 248);
}

.content {
  text-align: center;
}

.title {
  color: rgb(37, 24, 224);
  font: 2.5rem sans-serif;
}

.links > a {
  padding: 0 25px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.1rem;
  text-decoration: none;
  text-transform: uppercase;
}

.m-b-md {
  margin-bottom: 30px;
}
/* animate */
:root {
  --contrast: #112d4e;
  --bgColor: #f6f7fd;
  --progressBar: #e61a35;
  --fontColor: #e4980d;
}
#main {
  min-height: 100vh;
  background-color: var(--bgColor);
  border: 12px solid var(--contrast);
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  padding: 0px 10px;
  font-size: 60px;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  color: var(--fontColor);
}

.animate-slideup {
  margin-right: 16px;
  transform: translateY(200px) rotate(15deg);
  animation: slideup 1000ms cubic-bezier(0.65, 0, 0.35, 1) 1 forwards;
  transform-origin: top center;
}

@keyframes slideup {
  0% {
    transform: translateY(200px) rotate(20deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
}

.fs {
  height: 12px;
  width: 12px;
  background-color: #341ff3;
  margin-left: -16px;
  margin-top: 28px;
  opacity: 0;
  animation: rotate-fs 1800ms cubic-bezier(0.5, 1, 0.89, 1) forwards;
  transform-origin: center;
}

@keyframes rotate-fs {
  0% {
    transform: rotate(0deg) scale(0);
    opacity: 0;
  }
  30% {
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }
  100% {
    transform: rotate(720deg);
    opacity: 1;
  }
}

.curtain {
  position: fixed;
  background-color: var(--contrast);
  width: 100vw;
  min-height: 100vh;
  top: 0px;
  left: 0px;
}

.progressBar {
  height: 2px;
  width: 2px;
  background-color: var(--progressBar);
}

.progressGrow-animation {
  animation: grow 2000ms cubic-bezier(0.65, 0, 0.35, 1) 1 forwards;
}

@keyframes grow {
  0% {
    width: 0px;
  }
  50% {
    width: calc(100vw - 24px);
    height: 2px;
  }
  100% {
    width: calc(100vw - 24px);
    height: calc(100vh - 24px);
  }
}

@media (max-width: 800px) {
  .flex {
    flex-wrap: wrap;
  }
  .animate {
    margin-right: 4px;
  }
  .fs {
    height: 12px;
    width: 12px;
    margin-top: 30px;
  }
}

@media (max-width: 520px) {
  .box {
    font-size: 2rem;
  }
  .main {
    border: 5px solid #fc3c3c;
  }
  .animate-slideup {
    margin-right: 6px;
  }
  .fs {
    height: 10px;
    width: 10px;
    margin-left: -4px;
    margin-top: 13px;
  }
}
</style>
