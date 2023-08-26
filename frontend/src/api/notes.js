import { HTTP } from '../utils/request';

export const Note = {
  create(config) {
    return HTTP.post('/notes/', config).then((response) => {
      return response.data;
    })
  },

  delete(note) {
    return HTTP.delete(`/notes/${note.id}/`);
  },

  list() {
    return HTTP.get('/notes/').then((response) => {
      console.log(response);
      return response.data;
    })
  }
}
