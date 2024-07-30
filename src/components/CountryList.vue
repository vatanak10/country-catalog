<template>
  <v-container class="fill-height flex-column">
    <div class="d-flex" style="width: 100%">
      <v-text-field
        v-model="search"
        class="px-3"
        density="comfortable"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
      />
      <v-btn icon rounded @click="toggleSort">
        <v-icon>
          {{
            sort === 'asc'
              ? 'mdi-sort-alphabetical-ascending'
              : 'mdi-sort-alphabetical-descending'
          }}
        </v-icon>
      </v-btn>
    </div>

    <v-row style="width: 100%">
      <v-col
        v-for="country in paginatedCountries"
        :key="country.ccn3"
        cols="12"
        lg="3"
        sm="4"
      >
        <CountryCard :value="country" />
      </v-col>
    </v-row>

    <v-spacer />
    <v-pagination
      :key="pageCount"
      v-model="currentPage"
      :length="pageCount"
      @input="onPageChange"
    />
  </v-container>
</template>

<script lang="ts" setup>
  import { Country } from '@/types/Country'

  const countries = await fetchCountries()

  const itemsPerPage = 25
  const currentPage = ref(1)
  const search = ref('')
  const sort = ref('asc')

  const sortedCountries = computed(() => {
    const sorted = countries.slice().sort((a: Country, b: Country) => {
      const nameA = a.name.common.toLowerCase()
      const nameB = b.name.common.toLowerCase()
      if (sort.value === 'asc') {
        return nameA.localeCompare(nameB)
      } else {
        return nameB.localeCompare(nameA)
      }
    })
    return sorted
  })

  const filteredCountries = computed(() => {
    return sortedCountries.value.filter((country: Country) =>
      JSON.stringify(country.name)
        .toLowerCase()
        .includes(search.value.toLowerCase().trim())
    )
  })

  const pageCount = computed(() => {
    return Math.ceil(filteredCountries.value.length / itemsPerPage)
  })

  const paginatedCountries = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage
    const end = start + itemsPerPage
    return filteredCountries.value.slice(start, end)
  })

  function onPageChange(page: number) {
    currentPage.value = page
  }

  function toggleSort() {
    sort.value = sort.value === 'asc' ? 'desc' : 'asc'
    currentPage.value = 1
  }

  async function fetchCountries() {
    const response = await fetch('https://restcountries.com/v3.1/all')
    const data = await response.json()
    console.log(data)
    return data
  }
</script>
