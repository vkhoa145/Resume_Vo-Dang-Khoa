import NavBar from './App/Navigation'
import About from './App/About'
import PersonalInfor from './App/PersonalInfo'
import Skills from './App/Skills'
import Experiments from './App/Experiments'
import Contacts from './App/Contact'

function App() {
  return (
    <div className="App bg-dark container">
      <NavBar/>
      <About/>
      <PersonalInfor/>
      <Skills/>
      <Experiments/>
      <Contacts/>
    </div>
  );
}

export default App;
