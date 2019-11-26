<template>
  <div class="blogpost" :class='post.heightligthed ? "heightligthed" : ""'>
    <h2>{{ post.title }}</h2>
    <p>{{post.body}}</p>
    <p class="meta">written by {{ post.author }} on {{ post.datePosted }}</p>
    <p>{{post.heighligthed}}This post is heighligthed!</p>
  </div>
</template>

<script lang='ts' >
  import { Component, Prop, Vue } from 'vue-property-decorator'
  export interface Post {
    title: string
    body: string
    author: string
    datePosted: Date,
    heighligthed?: boolean
  }

  @Component
  export default class BlogPost extends Vue {
    @Prop() private post!: Post

    get date() {
      return `${this.post.datePosted.getDate()}/${this.post.datePosted.getMonth()}/${this.post.datePosted.getFullYear()}`
    }
  }
</script>

<style lang="stylus">
.blogpost
  &.heightligthed
    border 1px solid #f4d942
    background: orange
  h2
    text-decoration underline
  .meta
    font-style italic
</style>
