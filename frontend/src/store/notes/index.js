import { createNote, deleteNote, getNotes } from '@/api/notes';

export default {
  namespaced: true,

  state: {
    notes: [],
  },

  getters: {
    notes: (state) => state.notes,
  },

  mutations: {
    ADD_NOTE: (state, note) => {
      state.notes = [note, ...state.notes];
    },

    REMOVE_NOTE: (state, { id }) => {
      state.notes = state.notes.filter((note) => note.id !== id);
    },

    SET_NOTES: (state, note) => {
      state.notes = note;
    },
  },

  actions: {
    async createNote({ commit }, noteData) {
      try {
        const { data } = await createNote(noteData);

        commit('ADD_NOTE', data);
      } catch (e) {
        console.log('--- ', e);
      }
    },

    async deleteNote({ commit }, note) {
      try {
        await deleteNote(note);

        commit('REMOVE_NOTE', note);
      } catch (e) {
        console.log('--- ', e);
      }
    },

    async getNotes({ commit }) {
      try {
        const { data } = await getNotes();

        commit('SET_NOTES', data);
      } catch (e) {
        console.log('--- ', e);
      }
    },
  },
};
