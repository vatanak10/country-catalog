<template>
  <v-dialog v-model="showDialog" max-width="600">
    <v-card>
      <v-card-title> Country Detail </v-card-title>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
  import { Country } from '@/types/Country'

  const props = defineProps<{
    modelValue: Boolean
    country: Country
  }>()

  const emit = defineEmits(['update:modelValue'])

  const showDialog = ref(props.modelValue)

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
