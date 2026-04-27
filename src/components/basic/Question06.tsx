import Greeting from '../GreetingProps';

const Question06 = () => {
  const names = ['山田', '鈴木', '佐藤'];

  return (
    <div>
      {names.map((name, index) => (
        // keyにindexを使用するのは非推奨
        <Greeting key={index} name={name} />
      ))}
    </div>
  );
};

export default Question06;