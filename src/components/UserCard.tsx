type UserCardProps = {
  name: string;
  age: number;
  isActive: boolean;
}

const UserCard = (props: UserCardProps) => {
  const status = props.isActive ? 'アクティブ' : '非アクティブ';

  return (
    <div className='user-card'>
      <h2>{props.name}</h2>
      <p>年齢: {props.age}</p>
      <p>ステータス: {status}</p>
    </div>
  );
};

export default UserCard;