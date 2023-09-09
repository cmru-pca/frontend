<template>
  <VApp>
    <VAppBar color="primary">
      <VAppBarNavIcon variant="text" @click.stop="useDrawer = !useDrawer" class="text-center"></VAppBarNavIcon>
      <VAppBarTitle class="text-center">
        CMRU SCI-TECH AMBASSADOR
      </VAppBarTitle>
        <VBtn icon @click="toggleTheme">
        <template v-if="theme.global.name.value === 'light'">
          <v-icon style="color: rgb(20, 20, 20);">mdi-weather-night</v-icon>
        </template>
        <template v-else>
          <v-icon style="color: white;">mdi-white-balance-sunny</v-icon>
        </template>
      </VBtn>
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
import { useTheme } from 'vuetify';
const useDrawer = ref(false),
  theme = useTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

</script>

<style>
body {
  font-family: "Kanit", sans-serif;
}
</style>