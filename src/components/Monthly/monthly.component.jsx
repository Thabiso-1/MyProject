import CSVUpload from "../CSV/csv.component"
import React, { useState } from 'react';
import axios from 'axios';

const Monthly =()=>{
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  const fetchData = async () => {
    try {
      setIsLoading(true);
      const result = await axios.get('http://localhost:5246/api/Person');
      setData(result.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    // Write data to fixed-width text file
    const text = data.map(item => {
      // Format data into fixed width
      return `${String(item.id).padEnd(10)}${item.name.padEnd(10)}${item.surname.padEnd(10)}${"12345"}\n`;
    }).join('');

       // Trigger download
       const element = document.createElement('a');
       const file = new Blob([text], {type: 'text/plain'});
       element.href = URL.createObjectURL(file);
       element.download = 'data.txt';
       document.body.appendChild(element);
       element.click();
     };

  return(
    <div className="">
        <div class="d-grid gap-5 d-md-block">
            <button onClick={fetchData} class="btn btn-danger mt-2 float-start " type="button">Execute</button>
            {isLoading ? (
            <p>Loading...</p>
              ) : data.length > 0 ? (
                <>
                  {/* Display your fetched data */}
                  <button onClick={handleDownload}  class="btn btn-danger mt-2 float-start " type="button">Download Data</button>
                </>
              ) : null}
        </div>
       

        <div className="float-end " >
          <p className="mt-2  ">
          <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            About Monthly
          </button>
          </p>
          <div class="collapse" id="collapseExample">
            <div class="card card-body">
              Monthly extract 
            </div>
          </div>
        </div>
    </div>
  )
}

export default Monthly


