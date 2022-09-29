import './App.css';
import Aside from './components/Aside/Aside';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="row bg-warning bg-opacity-50 m-0">
      <Main></Main>
      <Aside></Aside>
    </div>
  );
}

export default App;
