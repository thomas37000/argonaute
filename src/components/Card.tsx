import { Link } from 'react-router-dom';
import IArgo from '../interface/IArgo';
import Card from 'react-bootstrap/Card';
import './Card.css';

const CardEquipage = (props: { argo: IArgo }) => {
  const { argo } = props;

  return (
    <Card style={{ width: '18rem', marginBottom: '1rem' }}>
      <Link to={`/argonaute/${argo.idEquipage}`}>
        <Card.Body>
          <Card.Title className='card-nom'> {argo.nom}</Card.Title>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default CardEquipage;
