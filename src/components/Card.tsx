type CardProps = {
  title: string;
  children: React.ReactNode;
}

// childrenはpropsの一部
// コンポーネントの開始タグと終了タグ間に挟まれた内容を表す
const Card = ({ title, children }: CardProps) => {
  return (
    <div className='card'>
      <h2>{title}</h2>
      <div className='card-content'>{children}</div>
    </div>
  );
};

export default Card;
