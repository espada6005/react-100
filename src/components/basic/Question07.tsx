import UserCard from '../UserCard';

const Question07 = () => {
  const users = [
    { name: '山田太郎', age: 30, isActive: true },
    { name: '鈴木一郎', age: 25, isActive: false }
  ];

  return (
    <div>
      {users.map((user, index) => (
        // <UserCard
        //   name={user.name}
        //   age={user.age}
        //   isActive={user.isActive}
        // />
        <UserCard key={index} { ...user } />
      ))}
    </div>
  );
}

export default Question07;