<template>
  <v-app-bar class="px-4" rounded>
    <span class="font-weight-bold">Country Catalog</span>
    <v-spacer />
    <v-btn icon @click="toggleTheme">
      <v-icon>{{
        theme.global.current.value.dark
          ? 'mdi-weather-sunny'
          : 'mdi-weather-night'
      }}</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts" setup>
  import { useTheme } from 'vuetify'

  const theme = useTheme()

  function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  }
</script>
