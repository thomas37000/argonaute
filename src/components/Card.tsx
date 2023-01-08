import IArgo from '../interface/IArgo';

const Card = (props: { argo: IArgo }) => {
  const { argo } = props;

  return (
    <div className='divCard'>
      <h3 className='cardName'>
        {argo.nom} - {argo.age} ans
      </h3>
    </div>
  );
};
export default Card;
