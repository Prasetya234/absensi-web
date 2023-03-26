<template>
  <div
    id="authentication-modal"
    @click.self="onclose"
    style=" background: rgba(0,0,0,0.5);"
    class="fixed top-0 left-0 flex font-isi items-center h-screen justify-center right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto lg:inset-0 h-modal lg:h-full "
  >
    <div class="relative w-full h-full lg:h-auto" :style="`max-width: ${width}`">
      <div class="relative rounded-lg shadow bg-white">
        <button
          v-if="iconClose"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
          type="button"
          @click="onclose"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <div class="py-6 px-8">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    onclose: {
      type: Function,
      required: false,
      default: () => {}
    },
    iconClose: {
      type: Boolean,
      required: false,
      default: true
    },
    width: {
        type: String,
        required: false,
        default: '600px'
    },
  }
};
</script>
