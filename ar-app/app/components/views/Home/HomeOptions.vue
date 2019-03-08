<template>
  <GridLayout class="button-grid" columns="*,*,*" rows="*,*,*" backgroundColor="#000000">
    <Label class="one" text="0,0" row="0" col="0" backgroundColor="#43b883"/>
    <Label class="one" text="0,1" row="0" col="1" backgroundColor="#1c6b48"/>
    <Label class="one" text="0,2" row="0" col="2" backgroundColor="#43b883"/>
    <Label class="one" text="1,0" row="1" col="0" backgroundColor="#289062"/>
    <Label class="one" text="1,1" row="1" col="1" backgroundColor="#43b883"/>
    <Label class="one" text="1,2" row="1" col="2" backgroundColor="#289062"/>
  </GridLayout>
</template>

<script>
export default {
  name: "homeOptions"
};
</script>

<style>
.button-grid {
  padding: 0;
  margin: 0;
}
</style>
