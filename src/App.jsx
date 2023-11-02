import { Footer } from "./components";
import RoutesElement from "./router/RoutesElement";

function App() {
  return (
    <main>
      <div className=" bg-body-tertiary">
        <RoutesElement />
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  );
}

export default App;
