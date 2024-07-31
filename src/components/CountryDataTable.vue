<template>
  <v-data-table
    :header-props="{
      'sort-icon': 'mdi-swap-vertical',
    }"
    :headers="props.headers"
    :items="props.items"
    items-per-page="25"
    return-object
    @click:row="handleRowClick"
  >
    <template #item.flags="{ value }">
      <v-img class="rounded" cover height="40" :src="value.png" width="80" />
    </template>

    <template #item.altSpellings="{ value }">
      {{ value.join(', ') }}
    </template>
  </v-data-table>
</template>

<script lang="ts" setup>
  import { Country } from '@/types/Country'

  const props = defineProps<{
    headers: Array<{ title: string; value: string }>
    items: Country[]
  }>()

  const emit = defineEmits(['click:row'])

  function handleRowClick(event: PointerEvent) {
    emit('click:row', event)
  }
</script>
