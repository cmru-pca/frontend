<template>
  <VApp>
    <VAppBar color="primary">
      <VAppBarNavIcon variant="text" @click.stop="useDrawer = !useDrawer" class="text-center"></VAppBarNavIcon>
      <VAppBarTitle class="text-center">
        CMRU SCI-TECH AMBASSADOR
      </VAppBarTitle>
    </VAppBar>

    <VNavigationDrawer v-model="useDrawer" location="bottom" temporary>
      <VList class="text-uppercase">
        <VListItem prepend-icon="mdi-home" title="HOME" to="/" active-color="primary" />
        <VListItem prepend-icon="mdi-table-account" title="STATISTICS" to="/statistics" active-color="primary" />
        <VListItem prepend-icon="mdi-github" title="CONTRIBUTING TO PROJECTS" href="https://github.com/cmru-pca"
          target="_blank"></VListItem>
      </VList>
    </VNavigationDrawer>
    <VMain>
      <NuxtPage />
    </VMain>
  </VApp>
</template>

<script setup>
const useDrawer = ref(false)
</script>

<style>
body {
  font-family: "Kanit", sans-serif;
}
</style>