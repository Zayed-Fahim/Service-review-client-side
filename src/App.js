import './App.css';
import Routes from './Pages/Routes/Routes';
import "react-photo-view/dist/react-photo-view.css";
import  { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="">
      <Routes></Routes>
      <Toaster position="top-center" reverseOrder={true} />
    </div>
  );
}

export default App;
