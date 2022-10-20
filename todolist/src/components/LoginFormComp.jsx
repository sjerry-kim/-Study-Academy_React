const LoginFormComp = (props) => {
  const {setLogin, setName} = props;
  return (
    <form onSubmit={(e)=>{
      e.preventDefault();
      setLogin(true);}}>
      <input type="text" onChange={(e)=>{setName(e.target.value);}} />
      <input type="submit" value={"login"} />
    </form>
  );
}

export default LoginFormComp;