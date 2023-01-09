import IArgo from '../interface/IArgo';
import Card from 'react-bootstrap/Card';

const CardEquipage = (props: { argo: IArgo }) => {
  const { argo } = props;

  return (
    <Card style={{ width: '18rem', marginBottom: '1rem' }}>
      <Card.Body>
        <Card.Title> {argo.nom}</Card.Title>
        <Card.Text>{argo.age} ans</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default CardEquipage;
