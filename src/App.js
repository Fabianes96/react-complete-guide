import { Header } from "./components/Header/Header";
import { Meals } from "./components/Meals/Meals";

function App() {
  return (
    <>
      <Header title="ReactMeals" />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
