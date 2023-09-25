<script setup lang="ts">
import data from '../data/data.json';
const threads = data.threads;
const posts = data.posts;
</script>

<template>
  <div>
    <h1>This is HomePage</h1>
    <div v-for="thread in threads" :key="thread.id">
      <div v-for="post in posts" :key="post.id">
        <p>{{ post }}</p>
      </div>
    </div>
  </div>
</template>
