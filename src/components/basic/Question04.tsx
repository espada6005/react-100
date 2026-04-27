const StyleBox = () => {
  const boxStyle = {
    backgroundColor: "#f0f0f0",
    padding: 20,
    border: "2px solid #333",
    borderRadius: 8
  };

  return (
    <div>
      <div style={boxStyle}>インラインスタイルのボックス</div>
      <div className='custom-box'>CSSクラスのボックス</div>
    </div>
  );
};

export default StyleBox;