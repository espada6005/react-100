type GreetingProps = {
  name: string;
}

const Greeting = (props: GreetingProps) => {
  return (
    <div>
      こんにちは、{props.name}さん！
    </div>
  );
};

export default Greeting;