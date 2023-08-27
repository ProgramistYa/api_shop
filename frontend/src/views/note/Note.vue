<template lang="pug">
  div
    create-note
    note-list
</template>

<script>
import CreateNote from '@/components/note/CreateNote.vue';
import NoteList from '@/components/note/NoteList.vue';

export default {
  name: 'homeNote',
  components: { NoteList, CreateNote },
};
</script>
