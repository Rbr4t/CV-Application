import GeneralInfo from "./components/General";
import Skills from "./components/Skills";
import './index.css'

function App() {
  return (
    <main>
      <form className="edit">
        <GeneralInfo />
        <Skills />
      </form>

      <div className="cv">
        <h1>Data displayed here</h1>
      </div>
    </main>
    
  );
}

export default App;
