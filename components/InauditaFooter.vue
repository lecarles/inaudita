<template>
  <div class="inaudita-footer text-md p-(--sm)">
    <div><a href="mailto:info@inauditafilms.com">info@inauditafilms.com</a></div>
    <div class="ml-auto text-right flex gap-(--sm)">
        <a href="https://instagram.com/inauditafilms/" target="_blank" rel="noopener">Instagram</a>
        <a href="https://www.youtube.com/@inauditafilms/" target="_blank" rel="noopener">Youtube</a>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
.inaudita-footer {
  display: flex;
  width: 100%;
  text-transform: uppercase;
  line-height: .9;

  svg {
    height: 1.75em;
    width: auto;
  }
}
</style>