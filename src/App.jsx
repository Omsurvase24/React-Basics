import Student from "./Student";

function App() {
  return (
    <>
      <Student name="Spongebob" age={30} isStudent={true}></Student>
      <Student name="Patrick" age={39} isStudent={true}></Student>
      <Student name="Squidward" age={50} isStudent={false}></Student>
      <Student></Student>
    </>
  );
}

export default App
