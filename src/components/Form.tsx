import { useState } from 'react';
import axios from 'axios';
import IArgo from '../interface/IArgo';
import ISoftSkills from '../interface/ISoftSkills';
import '../App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ArgoForm: React.FC = () => {
  const [argos, setArgos] = useState<IArgo>({
    nom: '',
    age: 23,
  });

  const [skill, setSkills] = useState<ISoftSkills>({
    skill: '',
    skill_2: '',
    skill_3: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setArgos({
      ...argos,
      [event.target.name]: event.target.value,
    });
  };

  const addNew = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (argos.nom && argos.age) {
      axios
        .post('http://localhost:8080', {
          nom: argos.nom,
          age: argos.age,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log('error: ', err));
    }
  };

  const handleChangeSoftSkills = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSkills({
      ...skill,
      [event.target.name]: event.target.value,
    });
  };

  const addNewSoftSkills = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (skill.skill && skill.skill_2 && skill.skill_3) {
      axios
        .post('http://localhost:8080/skills', {
          skill: skill.skill,
          skill_2: skill.skill_2,
          skill_3: skill.skill_3,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log('error: ', err));
    }
  };

  return (
    <main>
      <h2>Ajouter un(e) Argonaute</h2>

      <form onSubmit={addNew}>
        <label htmlFor='nom'>
          Nom de l'Argonaute :
          <input
            id='nom'
            type='text'
            name='nom'
            placeholder='Charalampos'
            value={argos.nom}
            onChange={handleChange}
            className='ms-1'
            required
          />
        </label>

        <label className='ms-1'>
          âge :
          <input
            id='age'
            type='number'
            name='age'
            placeholder='23'
            value={argos.age}
            onChange={handleChange}
            className='ms-1'
          />
        </label>

        <Button variant='secondary' type='submit' className='ms-1'>
          Ajouter
        </Button>
      </form>

      <form onSubmit={addNewSoftSkills} className='new-member-form'>
        <label htmlFor='skill'>
          Softskill :
          <input
            id='skill'
            type='text'
            name='skill'
            placeholder='fort(e)'
            value={skill.skill}
            onChange={handleChangeSoftSkills}
            className='ms-1'
            required
          />
        </label>

        <label htmlFor='skill_2' className='ms-1'>
          Softskill 2 :
          <input
            id='skill_2'
            type='text'
            name='skill_2'
            placeholder='courageux(se)'
            value={skill.skill_2 as string}
            onChange={handleChangeSoftSkills}
            className='ms-1'
          />
        </label>

        <label htmlFor='skill_3'>
          Softskill 3 :
          <input
            id='skill_3'
            type='text'
            name='skill_3'
            placeholder='malin(e)'
            value={skill.skill_3 as string}
            onChange={handleChangeSoftSkills}
            className='ms-1'
          />
        </label>

        <Button
          style={{
            backgroundColor: 'tomato',
            border: 'none',
            marginLeft: '0.3rem',
          }}
          type='submit'
        >
          Ajouter
        </Button>
      </form>
    </main>
  );
};

export default ArgoForm;
