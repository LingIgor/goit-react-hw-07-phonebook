import React, { useEffect } from 'react';
import { Item, List, Button } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/ContactSlice';
import { getContactsThunk } from 'redux/thunk/thunk';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
 console.log(contacts)
  const filterContact = useSelector(state => state.filter);
  console.log(filterContact)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);
  // const delContact = id => {
  //   dispatch(deleteContact(id));
  // };

  const getVisibleContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterContact.filter.toLowerCase())
    );
  };

  const visible = getVisibleContacts();

  return (
    <List>
      {visible.map(({ id, name, phone }) => {
        return (
          <Item key={id}>
            {name}: {phone}
            <Button type="button">delete</Button>
          </Item>
        );
      })}
    </List>
  );
};
