<template>
  <div
    id="authentication-modal"
    @click.self="onclose"
    style="background: rgba(0, 0, 0, 0.5)"
    class="fixed top-0 left-0 flex font-isi items-center h-screen justify-center right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto lg:inset-0 h-modal lg:h-full"
  >
    <div
      class="relative w-full h-full lg:h-auto"
      :style="`max-width: ${width}`"
    >
      <div class="relative rounded-lg shadow bg-white">
        <button
          v-if="iconClose"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
          type="button"
          @click="onclose"
        >
          <Close :size="24" />
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
import Close from './icons/close.vue';

export default {
  name: 'ModalComponent',
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
    }
  },
  components: { Close }
};
</script>
