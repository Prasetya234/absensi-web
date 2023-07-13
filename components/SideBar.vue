<template>
  <div class="h-screen fixed w-screen transparent z-30" @click.self="$emit('on-close')" >
    <div class="absolute h-screen bg-white py-4 px-10 right-0 top-0" style="width: 30%;">
        <div class="flex justify-between">
            <p class="font-bold text-2xl">{{ content.title }}</p>
            <div  @click="$emit('on-close')">
                <icons-close />
            </div>
        </div>
        <div class="pt-10">
            <p>{{ content.content }}</p>
        </div>
        <div class="absolute bottom-5 right-10">
            <p class="text-lg font-bold">Test</p>
        </div>    
    </div>
  </div>
</template>

<script>
export default {
    name: "SideBar",
    props: {
        content: {
            type: Object,
            default: () => ({
                title: '',
                content: '',
                maker: ''
            }),
        },
    }
}
</script>
<style scoped>
.transparent {
  background-color: #0a060640!important;
  /* change numbers from 00 to 99 at last of hex code 
  for transpency you want. */
}
</style>
