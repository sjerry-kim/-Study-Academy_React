const MemoComp = (props) => {
  const {dispatch} = props;
  return (
    <div>
      <input type="text" onChange={(e) => {
        // setState(e.target.value) -> dispatch에서 쓸 수 있도록
        dispatch({type: 'changeInput', payload: e.target.value})
      } } />
    </div>
  );
}

export default MemoComp;