<template>
  <v-dialog v-model="showDialog" max-width="600">
    <v-card>
      <!-- <v-card dark class="d-flex" flat tile>
        <v-spacer />
        <v-btn flat icon class="mt-2 mr-2" @click="showDialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card> -->
      <v-img class="mt-6" height="150px" :src="country.flags.png" />
      <v-card-title class="text-center text-wrap">
        {{ country.name.official }}
      </v-card-title>
      <v-card-text class="pl-16">
        <v-row>
          <v-col cols="6">Population</v-col>
          <v-col cols="6">
            {{ country.population.toLocaleString() }}
          </v-col>

          <v-col cols="6">Capital</v-col>
          <v-col cols="6">
            <div v-for="item in country.capital" :key="item">
              {{ item }}
            </div>
          </v-col>

          <v-col cols="6">Region</v-col>
          <v-col cols="6">{{ country.region }}</v-col>

          <v-col cols="6">Continent</v-col>
          <v-col cols="6">
            <div v-for="item in country.continents" :key="item">
              {{ item }}
            </div>
          </v-col>

          <v-col cols="6">Timezone</v-col>
          <v-col cols="6">
            <div v-for="item in country.timezones" :key="item">
              {{ item }}
            </div>
          </v-col>

          <v-col cols="6"></v-col>
          <v-col cols="6"></v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
  import { Country } from '@/types/Country'

  const props = defineProps<{
    modelValue: boolean
    country: Country
  }>()

  const emit = defineEmits(['update:modelValue'])

  const showDialog = ref(props.modelValue as boolean)

  watch(showDialog, (newValue) => {
    emit('update:modelValue', newValue)
  })

  watch(
    () => props.modelValue,
    (newValue) => {
      showDialog.value = newValue
    }
  )
</script>
