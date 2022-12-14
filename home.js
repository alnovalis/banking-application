function Home(){

  const ctx = React.useContext(UserContext);

  const name = ctx.users[0].name;
  const email = ctx.users[0].email;

  const welcomeMessage = "Welcome to the bank!";
  const textMessage = "You can move around using the navigation bar."

  return (
    <Card
      txtcolor="black"
      bgcolor="red"
      header="Bad Bank Landing Module"
      title={welcomeMessage}
      text={textMessage}
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}
