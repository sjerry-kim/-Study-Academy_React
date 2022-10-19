const MemoComp = (props) => {
  const [state, dispatch] = props;
  return (
    <div>
      <input type="text" onChange={(e)=>{
        dispatch({e })}} />
    </div>
  );
}

export default MemoComp;