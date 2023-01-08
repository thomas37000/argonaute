import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IArgo from './interface/IArgo';
import ISoftSkills from './interface/ISoftSkills';
import Card from './components/Card';

const Home: React.FC = () => {
  const [argos, setArgos] = useState<IArgo[]>([]);
  const [skills, setSkills] = useState<ISoftSkills[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadData = () => {
      setLoading(true);
      axios
        .get('http://localhost:8080/')
        .then((res) => {
          setError('');
          setArgos(res.data);
        })
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    };

    loadData();
  }, []);

  const fetchEquipage =
    argos &&
    argos.map((argo, i) => {
      return <Card key={i} argo={argo} />;
    });

  if (loading) return <p>"Loading ..."</p>;
  if (error !== '') return <p>{error}</p>;
  if (!argos) return <p>"Problème avec l' Api..."</p>;

  return (
    <div className='flex flex-wrap space-x-4 space-y-4'>{fetchEquipage}</div>
  );
};

export default Home;
