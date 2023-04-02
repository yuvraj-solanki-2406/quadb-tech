import './App.css';
import { useEffect, useState } from 'react';
import ShowData from './components/ShowData';

function App() {

  const [show, setShow] = useState([])

  useEffect(() => {
    fetchData();

  }, [])

  async function fetchData() {
    let data = await fetch('https://api.tvmaze.com/search/shows?q=all');
    data = await data.json();
    console.log(data);
    if(data.length > 0){
      setShow(data)
    }
  }

  return (
    <>
      <div className="App">
        <div className="container my-3">
          <div class="jumbotron jumbotron-fluid mb-3">
            <div class="container p-3" style={{ backgroundColor: "#4a95aa" }} >
              <h1 class="display-4">Fetch Data</h1>
              <p class="lead">This API includes the details of various shows with their timing and other details</p>
            </div>
          </div>

          {/* Data from API */}

          <table className='table mt-5 table-striped'>
            <thead className='thead-dark'>
              <tr>
                <th>ID</th>
                <th>Show Name</th>
                <th>Language</th>
                <th>Geners</th>
                <th>Ratings</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              <ShowData show={show}></ShowData>
            </tbody>
          </table>

        </div>
      </div>
    </>
  );
}

export default App;
