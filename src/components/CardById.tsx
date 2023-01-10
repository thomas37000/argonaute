import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import IArgo from '../interface/IArgo';

const CardById = () => {
  const { idEquipage } = useParams();

  const navigate = useNavigate();

  const [argos, setArgos] = useState<IArgo>({
    idEquipage: 0,
    nom: '',
    age: 23,
  });

  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  // ---------------------------------------------------------------------------
  // UPDATE Argonaute
  // ---------------------------------------------------------------------------

  const updateArgonaute = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (argos.nom || argos.age) {
      axios
        .put(`http://localhost:8080/argonaute/${idEquipage}`, {
          nom: argos.nom,
          age: argos.age,
        })
        .then(() => alert('s2n Modifiée !'))
        .then((res) => {
          alert('Argonautre bien modifié, relancer le changement');
        })
        .catch((err) => console.log('error: ', err));
    }
    navigate('/');
  };

  // ---------------------------------------------------------------------------
  // DELETE Argonaute
  // ---------------------------------------------------------------------------

  //   const deleteS2N = () => {
  //     axios
  //       .delete(`${REACT_APP_SERVER}/s2n/${id}`)
  //       .then(() => alert("s2n Deleted"))
  //       .catch((error) => {
  //         console.error(error.message);
  //       });
  //     navigate("/");
  //   };

  useEffect(() => {
    const loadData = () => {
      setLoading(true);
      axios
        .get(`http://localhost:8080/argonaute/${idEquipage}`)
        .then((res) => {
          setError('');
          setArgos(res.data);
        })
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    };

    loadData();
  }, [idEquipage]);

  // ---------------------------------------------------------------------------
  // ---------------------------------------------------------------------------

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <Card style={{ width: '18rem', marginBottom: '1rem' }} className='cardById'>
      <Card.Body>
        <Card.Title> {argos.nom}</Card.Title>
        <Card.Text>{argos.age} ans</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardById;
