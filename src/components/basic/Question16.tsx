import { useState } from 'react'

const ClickButtons = () => {
  const [lastClicked, setLastClicked] = useState('なし');

  const handleClick = (buttonNumber: number) => {
    alert(`ボタン${buttonNumber}がクリックされました`);
    setLastClicked(`ボタン${buttonNumber}`);
  }

  return (
    <div>
      <p>最後にクリックしたボタン: {lastClicked}</p>
      <button onClick={() => handleClick(1)}>ボタン1</button>
      <button onClick={() => handleClick(2)}>ボタン2</button>
      <button onClick={() => handleClick(3)}>ボタン3</button>
    </div>
  );
}

export default ClickButtons;
