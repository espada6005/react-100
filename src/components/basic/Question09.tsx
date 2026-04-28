import Card from '../Card';

const Question09 = () => {

  return (
    <>
      <Card title="カード1">
        <p>これは最初のカードです</p>
      </Card>

      <Card title="カード2">
        <ul>
          <li>リスト項目1</li>
          <li>リスト項目2</li>
        </ul>
      </Card>
      
      <Card title="カード3">
        <button>ボタンも入れられます</button>
      </Card>
    </>
  );
};

export default Question09;