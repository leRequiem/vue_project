<template>
  <div class="footer">
      <p>Проект выполнен в образовательных целях. Все совпадения случайны</p>
      <p>Контактные данные: contancts@inbox.com</p>
  </div>
</template>

<script>
import '/src/assets/css/main.css'
export default {
  name: 'LayoutFooter'
}
</script>

<style lang="scss">
.footer {
  width: 100%;
  height: 50px;
  color: black;
  position: relative;
  max-height: 50px;
  justify-content: space-between;
  bottom: 0;
  display: flex;
  font-size: 18px;
  font-family: sans-serif;
  border-top: 1px solid black;
}

.footer p {
  margin-right: 30px;
  margin-left: 30px;
}
</style>
