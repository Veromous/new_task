<script setup>
const posts = [
  {
    title: 'Getting Started with Vue',
    description: 'Learn the basics of Vue.js framework',
    date: '2024-01-15',
    image: '/images/vue.jpg',
    badge: { label: 'Vue' },
    authors: [{ name: 'John Doe', avatar: '/avatars/john.jpg' }],
    icons: [
      { name: 'i-heroicons-heart', label: '24 Likes' },
      { name: 'i-heroicons-chat-bubble-left', label: '8 Comments' },
      { name: 'i-heroicons-share', label: 'Share' },
      { name: 'i-heroicons-bookmark', label: 'Save' },
    ]
  },
  {
    title: 'Nuxt 3 Deep Dive',
    description: 'Exploring Nuxt 3 features and best practices',
    date: '2024-02-10',
    image: '/images/nuxt.jpg',
    badge: { label: 'Nuxt' },
    authors: [{ name: 'Jane Smith', avatar: '/avatars/jane.jpg' }],
    icons: [
      { name: 'i-heroicons-heart', label: '42 Likes' },
      { name: 'i-heroicons-chat-bubble-left', label: '15 Comments' },
      { name: 'i-heroicons-share', label: 'Share' },
      { name: 'i-heroicons-bookmark', label: 'Save' },
    ]
  },
  {
    title: 'Tailwind CSS Tips',
    description: 'Advanced Tailwind CSS techniques for modern UI',
    date: '2024-03-05',
    image: '/images/tailwind.jpg',
    badge: { label: 'CSS' },
    authors: [{ name: 'Bob Lee', avatar: '/avatars/bob.jpg' }],
    icons: [
      { name: 'i-heroicons-heart', label: '31 Likes' },
      { name: 'i-heroicons-chat-bubble-left', label: '10 Comments' },
      { name: 'i-heroicons-share', label: 'Share' },
      { name: 'i-heroicons-bookmark', label: 'Save' },
    ]
  },
]
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-19">
    <div
      v-for="post in posts"
      :key="post.title"
      class="flex flex-col rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700"
    >
      <!-- Blog Post Card -->
      <UBlogPost
        :title="post.title"
        :description="post.description"
        :date="post.date"
        :image="post.image"
        :badge="post.badge"
        :authors="post.authors"
        orientation="vertical"
        class="flex-1"
      />

      <!-- 4 Icons Below Each Card -->
      <div class="flex items-center justify-around px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
        <button
          v-for="icon in post.icons"
          :key="icon.name"
          class="flex flex-col items-center gap-1 text-gray-500 hover:text-primary-500 transition-colors"
        >
          <UIcon :name="icon.name" class="w-5 h-5" />
          <span class="text-xs">{{ icon.label }}</span>
        </button>
      </div>
    </div>
  </div>
</template>