// import logo from './logo.svg';
import { lazy, Suspense } from 'react';
import './App.css';
// import AuthBatching from './components/AuthBatching';
import { Forward } from './components/Forward';

const AuthBatching=lazy(()=>import("./components/AuthBatching"))

function App() {
  return (
    <div className="App">
     {/* <Forward/> */}
     <Suspense fallback={<h1>Loading.......</h1>}>
     <AuthBatching/>
     </Suspense>

    </div>
  );
}

export default App;
