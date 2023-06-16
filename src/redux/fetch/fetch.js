import axios from 'axios';

axios.defaults.baseURL = 'https://648af0c817f1536d65e9ff94.mockapi.io';

export const fetchContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const addContact = async contacts => {
  const { data } = await axios.post('/contacts', contacts);
  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
