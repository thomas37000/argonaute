import ISoftSkills from '../interface/ISoftSkills';
import Card from 'react-bootstrap/Card';

const CardSkills = (props: { skill: ISoftSkills }) => {
  const { skill } = props;

  return (
    <Card style={{ width: '18rem', marginBottom: '1rem', color: 'tomato' }}>
      <Card.Body>
        <Card.Title>{skill.skill}</Card.Title>
        <Card.Text>{skill.skill_2}</Card.Text>
        <Card.Text>{skill.skill_3}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default CardSkills;
