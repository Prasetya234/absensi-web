<template>
  <div class="pt-20" style="height: 100vh"> 
    <p>home page</p>
       <button @click="$router.push('/student/absen')" class="px-3 py-2 bg-[#F7931E] rounded-lg text-white capitalize font-semibold">Absen Now</button>
  </div>
</template>

<script>
export default {
    name: "StudentPage",
}
</script>

<style>

</style>