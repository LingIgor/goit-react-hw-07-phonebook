import axios from 'axios';

axios.defaults.baseURL = 'https://64878659beba62972790c571.mockapi.io';

export const fetchContacts = async () => {
  const { data } = await axios.get('/contacts');

  return data;
};
