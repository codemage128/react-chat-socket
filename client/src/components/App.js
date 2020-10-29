import React from 'react';
import { ContactProvider } from '../contexts/ContactsProvider';
import useLocalStorage from '../hooks/useLocalStorage';
import Dashboard from './Dashboard';
import Login from "./Login";

export default function App() {
  const [id, setId] = useLocalStorage('id');
  const dashboard = (
    <ContactProvider>
      <Dashboard id={id} />
    </ContactProvider>
  )
  return (
    id? dashboard : <Login onIdSubmit={setId} />
  )
};
