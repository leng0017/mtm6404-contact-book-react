import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { doc, getDoc, deleteDoc } from 'firebase/firestore';
import db from '../db';

function ContactDetails() {
  const { id } = useParams();
  const [contact, setContact] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContact = async () => {
      const docRef = doc(db, 'contacts', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setContact(docSnap.data());
      }
    };

    fetchContact();
  }, [id]);

  const handleDelete = async () => {
    const docRef = doc(db, 'contacts', id);
    await deleteDoc(docRef);
    navigate('/');
  };

  if (!contact) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>{contact.firstName} {contact.lastName}</h1>
      <p><strong>Email:</strong> {contact.email}</p>
      <div>
        <Link to={`/edit/${id}`}>
          <button>Edit</button>
        </Link>
        <button onClick={handleDelete}>Delete</button>  
        <Link to="/">
          <button>Back to Home</button>
        </Link>
      </div>
    </div>
  );
}

export default ContactDetails;
