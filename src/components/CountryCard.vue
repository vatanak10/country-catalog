<template>
  <v-dialog max-width="340">
    <template #activator="{ props: activatorProps }">
      <v-card v-bind="activatorProps">
        <v-img cover height="150px" :src="props.value.flags.png" />
        <v-card-title>
          {{ props.value.name.common }}
        </v-card-title>
        <v-card-text> </v-card-text>
      </v-card>
    </template>

    <template #default>
      <v-card
        prepend-icon="mdi-package"
        text="When using the activator slot, you must bind the slot props to the activator element."
        title="Slot Activator"
      />
    </template>
  </v-dialog>
</template>

<script lang="ts" setup>
  const props = defineProps<{ value: any }>()
</script>
