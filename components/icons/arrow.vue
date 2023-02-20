<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.25 20L1.25 11L10.25 2M2.5 11H20.75"
      stroke="#333333"
      stroke-width="2.25"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  name: 'ArrowIcon',
  props: {
        direction: {
            type: String,
            default: 'left'
        },
        size: {
            type: String,
            default: '22'
        }
    },
    methods: {
        rotate(direction) {
            if (direction == 'left') {
                return 'rotate(0deg)'
            } else if (direction == 'right') {
                return 'rotate(180deg)'
            } else if (direction == 'up') {
                return 'rotate(90deg)'
            } else if (direction == 'down') {
                return 'rotate(270deg)'
            }
        }
    }
};
</script>
