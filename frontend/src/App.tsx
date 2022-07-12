import "./App.css";
import { MyForm } from "./MyForm";

const App = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <MyForm
        onSubmit={({ email, firstName, lastName }) => {
          console.log("Nome:", firstName);
          console.log("Sobrenome:", lastName);
          console.log("email", email);
        }}
      />
    </div>
  );
};

export default App;
