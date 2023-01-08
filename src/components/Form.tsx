import { useState } from 'react';
import axios from 'axios';
import IArgo from '../interface/IArgo';
import ISoftSkills from '../interface/ISoftSkills';
import '../App.css';

const Form: React.FC = () => {
  const [argos, setArgos] = useState<IArgo>({
    equipage: {
      nom: '',
      age: 23,
    },
  });

  const [skill, setSkills] = useState<ISoftSkills>({
    softSkills: {
      IdSoftSkills: 1,
      skill: '',
      skill_2: '',
      skill_3: '',
    },
  });

  const handleChangeEquipage = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setArgos({
      equipage: {
        ...argos.equipage,
        [event.target.name]: event.target.value,
      },
    });
  };

  const addNewequipage = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (argos.equipage.nom && argos.equipage.age) {
      axios
        .post('http://localhost:8080', {
          nom: argos.equipage.nom,
          age: argos.equipage.age,
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
      softSkills: {
        ...skill.softSkills,
        [event.target.name]: event.target.value,
      },
    });
  };

  const addNewSoftSkills = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (
      skill.softSkills.skill &&
      skill.softSkills.skill_2 &&
      skill.softSkills.skill_3
    ) {
      axios
        .post('http://localhost:8080/skills', {
          skill: skill.softSkills.skill,
          skill_2: skill.softSkills.skill_2,
          skill_3: skill.softSkills.skill_3,
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

      <form onSubmit={addNewequipage} className='new-member-form'>
        <label htmlFor='nom'>
          Nom de l'Argonaute :
          <input
            id='nom'
            type='text'
            name='nom'
            placeholder='Charalampos'
            value={argos.equipage.nom}
            onChange={handleChangeEquipage}
            required
          />
        </label>

        <label>
          âge :
          <input
            id='age'
            type='number'
            name='age'
            placeholder='23'
            value={argos.equipage.age}
            onChange={handleChangeEquipage}
          />
        </label>

        <input type='submit' value='Submit' />
      </form>

      <form onSubmit={addNewSoftSkills} className='new-member-form'>
        <label htmlFor='skill'>
          Softskill :
          <input
            id='skill'
            type='text'
            name='skill'
            placeholder='fort(e)'
            value={skill.softSkills.skill}
            onChange={handleChangeSoftSkills}
            required
          />
        </label>

        <label htmlFor='skill_2'>
          Softskill 2 :
          <input
            id='skill_2'
            type='text'
            name='skill_2'
            placeholder='courageux(se)'
            value={skill.softSkills.skill_2 as string}
            onChange={handleChangeSoftSkills}
          />
        </label>

        <label htmlFor='skill_3'>
          Softskill 3 :
          <input
            id='skill_3'
            type='text'
            name='skill_3'
            placeholder='malin(e)'
            value={skill.softSkills.skill_3 as string}
            onChange={handleChangeSoftSkills}
          />
        </label>

        <input type='submit' value='Submit' />
      </form>
    </main>
  );
};

export default Form;
