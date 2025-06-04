<template>
  <div class="options-container">
    <ul>
      <li>Pokemon 1</li>
      <li>Pokemon 2</li>
      <li>Pokemon 3</li>
      <li>Pokemon 4</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>
<style scoped > 
ul{
    list-style-type: none;
}
li {
    background: white;
    border: solid blanchedalmond;
    border-radius: 5px;
    margin-bottom: 10px;
    width: 200px;
}
.options-container {
    display: flex;
    justify-content: center;
} 
li:hover { 
    background: rgb(250, 250, 159);
}
</style>