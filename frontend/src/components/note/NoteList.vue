<template lang="pug">
  .content(v-if="notes.length")
    | {{ notes }}
    .card(v-for="note in notes")
      .card-header
        button.btn.btn-clear.float-right(@click="deleteNote(note)")
        .card-title {{ note.title }}
        .card-subtitle {{ note.created_at }}
      .card-body {{ note.body }}
</template>

<script>
export default {
  name: 'noteList',

  computed: {
    notes() {
      return this.$store.getters['notes/notes'];
    },
  },

  methods: {
    deleteNote(note) {
      this.$store.dispatch('notes/deleteNote', note);
    },
  },

  mounted() {
    this.$store.dispatch('notes/getNotes');
  },
};
</script>

<style>
header {
  margin-top: 50px;
}
</style>
