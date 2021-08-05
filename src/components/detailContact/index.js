import { Main,LineHr } from "../style";
import React,{useState} from "react";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

import HeaderDetail from './SubHeader'
import ContactDetaill from './Content'
function ContactDetail() {
  let { idContact } = useParams();
  const mockContact = useSelector((state) =>
  state.data.find((contact) => contact.id === parseInt(idContact))
);
const [contact] = useState(mockContact);
console.log(contact)
  return (
    <Main>
      <HeaderDetail data={contact}/>
      <LineHr/>
      <ContactDetaill data={contact}/>     
    </Main>
  );
}
export default ContactDetail;
