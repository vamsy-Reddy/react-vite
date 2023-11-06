import Header from "./my components/Header.jsx";
import { Examples } from "./my components/Examples.jsx";
import { CoreComponents } from "./my components/CoreComponents.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreComponents />
        <Examples />
      </main>
    </div>
  );
}

export default App;
