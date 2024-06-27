<template>
  <v-container class="text-center">
    <v-row>
      <v-col>
        <h2 class="title">My Profile</h2>

        <v-img :src="user.avatar_url" class="avatar" />

        <p>Name : {{ user.name }}</p>
        <p>Location : {{ user.location }}</p>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="repo in repos" :key="repo.id" cols="12" md="4" class="my-4">
        <v-card>
          <v-card-title>
            <a :href="repo.html_url" target="_blank" rel="noopener noreferrer">
              {{ repo.name }}
            </a>
          </v-card-title>
          <v-card-subtitle> Star: {{ repo.stargazers_count }} </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  middleware: 'auth',
  async asyncData({ $axios }) {
    const [user, repos] = await Promise.all([
      $axios.$get('https://api.github.com/users/phonbopit'),
      $axios.$get(
        'https://api.github.com/users/phonbopit/repos?sort=pushed&per_page=100'
      ),
    ])

    return { user, repos }
  },
}
</script>

<style scoped>
.avatar {
  width: 80px;
  border-radius: 50%;
}
</style>
