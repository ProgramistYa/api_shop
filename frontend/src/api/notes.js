import qs from 'qs';
import request from '@/utils/request';

export function createNote(data) {
  const options = qs.stringify(data);

  return request({
    url: '/notes/',
    method: 'post',
    data: options,
  });
}

export function deleteNote(data) {
  const options = qs.stringify(data);

  return request({
    url: `/notes/${data.id}/`,
    method: 'delete',
    data: options,
  });
}

export function getNotes(data) {
  const options = qs.stringify(data);

  return request({
    url: '/notes/',
    method: 'get',
    data: options,
  });
}
