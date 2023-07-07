import { GeneralCV, GeneralInfo } from "./components/General";
import Skills from "./components/Skills";
import { useState } from "react";
import './index.css'

function App() {
  const [data, setValue] = useState({"general": {
      name: '',
      email: '',
      phone: '',
      address: ''
  }});

  const myCallBack = (dataFromChild) => {
    setValue({"general": dataFromChild})
    console.log(data)
  } 

  return (
    <main>
      <form className="edit">
        <div>
          <h2>Personal information</h2>
          <GeneralInfo callBackState={myCallBack} />
        </div>

        
        <div>
          <h2>Skills</h2>
          <div className="skillcontainer">
            <Skills />
          </div>
          <button>+</button>

        </div>
      
      </form>

      <div className="cv">
        <GeneralCV props={data.general}/>
      </div>
    </main>
    
  );
}

export default App;
