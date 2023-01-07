import { useState } from 'react';
import IArgo from '../interface/IArgo';
import '../App.css';

const Form: React.FC = () => {
  const [argos, setArgos] = useState<IArgo>({
    equipage: {
      nom: '',
      age: 23,
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

  const addNewequipage = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('new equipage', argos.equipage);
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
    </main>
  );
};

export default Form;
