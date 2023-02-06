<template>
  <div class="loading">
    <div>
      <p>M</p>
      <p>Y</p>
      <p>A</p>
      <p>B</p>
      <p>S</p>
      <p>E</p>
      <p>N</p>
      <p>S</p>
      <p>I</p>
    </div>
  </div>
</template>
<style  scoped>
.loading {
  display: flex;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10000;
}

div {
  text-align: center;
}

p {
  display: inline-block;
  text-transform: uppercase;
  text-align: center;
  font-size: 8em;
  font-weight: 600;
  transform: scale(0.5);
  color: #f7931e;
  @media screen and (max-width: 767px) {
    font-size: 5em;
  }
}

p:nth-child(1) {
  animation: hover 1.5s linear infinite;
}

p:nth-child(2) {
  animation: hover 1.5s linear infinite 0.125s;
}

p:nth-child(3) {
  animation: hover 1.5s linear infinite 0.25s;
}

p:nth-child(4) {
  animation: hover 1.5s linear infinite 0.375s;
}

p:nth-child(5) {
  animation: hover 1.5s linear infinite 0.5s;
}

p:nth-child(6) {
  animation: hover 1.5s linear infinite 0.675s;
}

p:nth-child(7) {
  animation: hover 1.5s linear infinite 0.75s;
}
p:nth-child(8) {
  animation: hover 1.5s linear infinite 0.875s;
}
p:nth-child(9) {
  animation: hover 1.5s linear infinite 1s;
}

@keyframes hover {
  0% {
    transform: scale(0.5);
    color: #fff;
  }
  20% {
    transform: scale(1);
    color: #fff;
  }
  50% {
    transform: scale(0.5);
    color: #f7931e;
  }
}
</style>
