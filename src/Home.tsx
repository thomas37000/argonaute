import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IArgo from './interface/IArgo';
import ISoftSkills from './interface/ISoftSkills';
import CardEquipage from './components/Card';
import CardSkills from './components/CardSkills';

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
      return <CardEquipage key={i} argo={argo} />;
    });

  useEffect(() => {
    const loadData = () => {
      setLoading(true);
      axios
        .get('http://localhost:8080/skills')
        .then((res) => {
          setError('');
          setSkills(res.data);
        })
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    };

    loadData();
  }, []);

  const fetchSoftSkills =
    skills &&
    skills.map((skill, i) => {
      return <CardSkills key={i} skill={skill} />;
    });

  if (loading) return <p>"Loading ..."</p>;
  if (error !== '') return <p>{error}</p>;
  if (!argos) return <p>"Problème avec l' Api..."</p>;

  return (
    <div className='home'>
      <p className='argos-length'>
        Il y a {argos.length} argonautes dans l' équipage.
      </p>

      <div
        className='gridEquipage d-flex flex-wrap justify-content-around
      '
      >
        {fetchEquipage}
      </div>
      <div className='gridEquipage d-flex flex-wrap justify-content-around'>
        {fetchSoftSkills}
      </div>
    </div>
  );
};

export default Home;
