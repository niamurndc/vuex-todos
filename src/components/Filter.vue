<template>
  <div class="header">
    <h2>All Games</h2>
    <select>
      <option>200</option>
      <option>100</option>
      <option>50</option>
      <option>10</option>
      <option>5</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Filter',
}
</script>

<style>
.header{
  display: flex;
  justify-content: space-between;
}
</style>
