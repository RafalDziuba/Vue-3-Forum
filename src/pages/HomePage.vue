<script setup lang="ts">
import { ref } from 'vue';
import data from '../data/data.json';

const threads = ref(data.threads);

const posts = ref(data.posts);
const fullPostFromId = (postId: string) => {
  return posts.value.find((p) => p.id === postId);
};

const users = ref(data.users);
const fullUserFromPostId = (postId: string) => {
  return users.value.find((u) => u.id === fullPostFromId(postId)?.userId);
};
console.log(posts);
console.log(threads);
console.log(users);
</script>

<template>
  <div>
    <h1>This is HomePage</h1>
    <div v-for="thread in threads" :key="thread.id">
      <p>
        <b>{{ thread.title }}</b>
      </p>
      <div v-for="postId in thread.posts" :key="postId">
        <p>{{ fullUserFromPostId(postId)?.name }}</p>
        <p>{{ fullPostFromId(postId)?.text }}</p>
      </div>
    </div>
  </div>
</template>
