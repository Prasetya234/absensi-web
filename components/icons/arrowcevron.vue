<template>
  <!-- <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="`transform: ${rotate(direction)}`"
  > -->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    class="rounded-full"
    fill="inherit"
    viewBox="0 0 24 24"
    :style="`transform: ${rotate(
      direction
    )}`"
  >
    <path
      fill-rule="evenodd"
      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
    />
  </svg>
  <!-- <rect width="24" height="24" fill="#E5E5E5" />
    <rect
      width="42720"
      height="11287"
      transform="translate(-14681 -3085)"
      fill="#EDF8F7"
    />
    <rect
      width="1657"
      height="1045"
      transform="translate(-242 -204)"
      fill="#F5F5F5"
    />
    <rect
      x="-54.5"
      y="-63.5"
      width="1200"
      height="876"
      rx="7.5"
      fill="white"
      stroke="#DFE0EB"
    />
    <path
      d="M14.875 18.75L8.125 12L14.8741 5.25"
      stroke="#808080"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <rect
      x="-2.5"
      y="2.5"
      width="3938"
      height="1812"
      transform="matrix(-1 0 0 1 3613 -686)"
      stroke="#42AFF5"
      stroke-width="5"
      stroke-linejoin="round"
      stroke-dasharray="10 10"
    />
  </svg> -->
</template>

<script>
export default {
  name: 'ArrowChevronIcon',
  props: {
    direction: {
      type: String,
      default: 'right'
    },
    size: {
      type: Number,
      default: 24
    }
  },
  methods: {
    rotate(direction) {
      if (direction === 'left') {
        return 'rotate(0deg)';
      } else if (direction === 'right') {
        return 'rotate(180deg)';
      } else if (direction === 'up') {
        return 'rotate(90deg)';
      } else if (direction === 'down') {
        return 'rotate(270deg)';
      }
    }
  }
};
</script>
