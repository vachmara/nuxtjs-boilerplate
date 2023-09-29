<script setup lang="ts">
import useTheme from '@/composables/useTheme';

const { theme, toggleTheme } = useTheme();
</script>

<template>
  <div class="flex cursor-pointer" @click="toggleTheme">
    <Icon
      v-if="theme === 'dark'"
      name="grommet-icons:sun"
      size="1.5em"
      class="text-primary"
    />
    <Icon v-else name="ph:moon-stars-bold" size="1.5em" class="text-primary" />
  </div>
</template>