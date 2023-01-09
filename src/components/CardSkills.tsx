import ISoftSkills from '../interface/ISoftSkills';

const CardSkills = (props: { skill: ISoftSkills }) => {
  const { skill } = props;

  return (
    <div className='divCard'>
      {' '}
      {skill.skill} - {skill.skill_2} - {skill.skill_3}
    </div>
  );
};
export default CardSkills;
