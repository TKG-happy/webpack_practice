<template>
  <p>{{ message }}</p>
</template>

<script>
export default {
  data: () => {
    console.log('vuejs is installed!');
    return {
      message: 'Hey, this is Vue!',
    };
  }
};
</script>

<style scoped>
p {
  color: green;
}
</style>
