<template>
    <div>
      <h1 v-if="error.statusCode === 404">Page not found</h1>
      <h1 v-else>An error occurred</h1>
      <NuxtLink to="/">Home page</NuxtLink>
    </div>
  </template>
  
  <script>
    export default {
      name: "NotFound",
      layout: 'error-layout', // you can set a custom layout for the error page
      props: ['error'],
    }
  </script>