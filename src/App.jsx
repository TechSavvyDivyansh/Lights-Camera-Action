
import './App.css';
import Navbar from './Components/Navbar/Navbar';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import MovieMania from './Pages/MovieMania';
import TopPics from './Pages/TopPics';
import Gallery from './Pages/Gallery/Gallery';
import SignUp from './Pages/SignUp';
import Movie from './Pages/Movie';
import { useContext } from 'react';
import { movieContext } from './Context/MovieContext';
import Footer from './Components/Footer/Footer';

function App() {

  let {Mode}=useContext(movieContext)



  return (

    <div className={Mode?"App dark":"App"}>
        <BrowserRouter>
            <Navbar/>

            <Routes>
                <Route path='/' element={<MovieMania/>}/>
                <Route path='/Movie' element={<Movie/>}>
                    <Route path=':MovieId' element={<Movie/>}/>
                </Route>
                <Route path='/TopPics' element={<TopPics/>}/>
                <Route path='/Gallery' element={<Gallery/>}/>
                <Route path='/Signup' element={<SignUp/>}/>
                
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
