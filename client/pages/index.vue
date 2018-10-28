<template>
  <div>
    <h1>Hello, this is a Server-Side-Rendered App...</h1>
    <h1>...without any server :)</h1>
    <h2>Components:</h2>
    <ul>
      <li>Nuxt.js</li>
      <li>Serverless Framework</li>
      <li>AWS (Lambda & API Gateway)</li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
  }
};
</script>