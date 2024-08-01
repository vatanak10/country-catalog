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

    <CountryDataTable
      :headers="headers"
      :items="filteredCountries"
      @click:row="showCountry"
    />

    <CountryDetailDialog v-model="showDialog" :country="activeCountry" />
  </v-container>
</template>

<script lang="ts" setup>
  import { debounce } from 'lodash'
  import { Country } from '@/types/Country'

  // State variables
  const showDialog = ref(false)
  const activeCountry = ref<Country | null>(null)
  const search = ref('')
  const sort = ref('asc')
  const filteredCountries = ref<Country[]>([])

  // Table headers
  const headers = [
    { title: 'Flag', value: 'flags', align: 'center' },
    { title: 'Name', value: 'name' },
    { title: 'CCA2', value: 'cca2' },
    { title: 'CCA3', value: 'cca3' },
    { title: 'Native Name', value: 'nativeName' },
    { title: 'Alt Name', value: 'altSpellings' },
    { title: 'IDD', value: 'idd' },
  ]

  // Fetch countries data
  const countries = await fetchCountries()

  // Computed properties
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

  // Functions
  async function fetchCountries() {
    const response = await fetch(`https://restcountries.com/v3.1/all`)
    const data = await response.json()
    return data
  }

  const updateFilteredCountries = () => {
    filteredCountries.value = sortedCountries.value.filter((country: Country) =>
      JSON.stringify(country.name)
        .toLowerCase()
        .includes(search.value.toLowerCase().trim())
    )
  }

  function toggleSort() {
    sort.value = sort.value === 'asc' ? 'desc' : 'asc'
    updateFilteredCountries()
  }

  function showCountry(country: Country) {
    activeCountry.value = country
    showDialog.value = true
  }

  // Debounced function
  const debouncedUpdateFilteredCountries = debounce(
    updateFilteredCountries,
    300
  )

  watch(search, () => {
    debouncedUpdateFilteredCountries()
  })

  // Initialize the filtered countries
  updateFilteredCountries()
</script>
