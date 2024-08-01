<template>
  <v-data-table
    :header-props="{
      'sort-icon': 'mdi-swap-vertical',
    }"
    :headers="props.headers"
    :items="props.items"
    items-per-page="25"
    return-object
  >
    <template #item="{ item }">
      <tr @click="handleRowClick(item)">
        <td v-for="header in props.headers" :key="header.value">
          <template v-if="header.value === 'flags'">
            <v-img
              class="rounded"
              cover
              height="40"
              :src="item.flags.png"
              width="80"
            />
          </template>
          <template v-else-if="header.value === 'name'">
            {{ item.name.official }}
          </template>
          <template v-else-if="header.value === 'nativeName'">
            <div v-for="(name, lang) in item.name.nativeName" :key="lang">
              <span class="font-decoration-italic">{{ lang }} </span>:
              {{ name.official }}
            </div>
          </template>
          <template v-else-if="header.value === 'altSpellings'">
            {{ item.altSpellings.join(', ') }}
          </template>
          <template v-else-if="header.value === 'idd'">
            {{ item.idd.root }}
          </template>
          <template v-else>
            {{ item[header.value] }}
          </template>
        </td>
      </tr>
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

  function handleRowClick(item: Country) {
    emit('click:row', item)
  }
</script>
