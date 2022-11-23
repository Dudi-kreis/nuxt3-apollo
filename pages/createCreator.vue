<template>
  <div class="form flex flex-col gap-5">
    <div class="form-group flex flex-col gap-2">
      <label class="font-medium" for="createCreator">Add creator</label>
      <div class="flex flex-row flex-grow items-center gap-2 border rounded-2xl overflow-hidden">
        <input v-model="moshe" class="form-control flex-grow outline-none py-3 bg-white" id="createCreator"
               minlength="1"
               name="createCreator" placeholder="Add creator name" type="text">
      </div>
      <label for="cars">Choose language:</label>
      <select name="lang" id="language">
        <option value="hebrew">Hebrew</option>
        <option value="english">English</option>
        <option value="french">French</option>
        <option value="spanish">Spanish</option>
      </select>
      <label for="cars">Choose language:</label>
      <select name="lang" id="language">
        <option value="hebrew">Hebrew</option>
        <option value="english">English</option>
        <option value="french">French</option>
        <option value="spanish">Spanish</option>
      </select>
      <label for="cars">Choose language:</label>
      <select name="lang" id="language">
        <option value="hebrew">Hebrew</option>
        <option value="english">English</option>
        <option value="french">French</option>
        <option value="spanish">Spanish</option>
      </select>
    </div>
    <button @click="response" class="bg-green-500 rounded-full py-3">Submit</button>
  </div>
</template>

<script setup>
import gql from "graphql-tag";

const create_creator = gql`
  mutation addCreator($creator: CreatorInput!) {
    addCreator(creator: $creator) {
      userId
    _id
    languages
    }
  }
`

const apolloClient = this.$apollo.defaultClient;

const response = await apolloClient
    .mutate({
      mutation: create_creator,
      variables: {
        creator: {
          userId: "60f1b1b0b1b1b1b1b1b1b1b1",
          languages: ["hebrew", "english", "french", "spanish"],
        },
      },
    });

console.log(response);
</script>

<style scoped>

</style>
