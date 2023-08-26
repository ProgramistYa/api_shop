<template lang="pug">
  #app
    .card(v-for="note in notes")
      .card-header
        button.btn.btn-clear.float-right(@click="deleteNote(note)")
        .card-title {{ note.title }}
        .card-subtitle {{ note.created_at }}
      .card-body {{ note.body }}
</template>

<script>
import store from '../store';

export default {
  name: 'note-list',

  computed: {
    notes () {
      return store.state.notes;
    }
  },

  methods: {
    deleteNote(note) {
      // Вызываем действие `deleteNote` из нашего хранилища, которое
      // попытается удалить заметку из нашех базы данных, отправив запрос к API
      store.dispatch('deleteNote', note);
    },
  },

  beforeMount() {
    // Перед тем как загрузить страницу, нам нужно получить список всех
    // имеющихся заметок. Для этого мы вызываем действие `getNotes` из
    // нашего хранилища

    store.dispatch('getNotes');
  },
};
</script>

<style>
  header {
    margin-top: 50px;
  }
</style>
