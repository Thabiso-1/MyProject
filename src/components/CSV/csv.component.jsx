import { useState } from "react"
import Papa from 'papaparse'
import { MDBDataTable } from 'mdbreact';


const CSVUpload =()=>{

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handleFileUpload = (e)=>{
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (results) =>{
        setData(results.data);
      }
    })
  };




  
  // Logic for displaying current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return(
    <div className="">
      <div className="mt-2 row w-70 mx-auto">

              <div className="col">
              <input type="file" accept=".CSV" onChange={handleFileUpload} class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"/>
                </div>
              
              <div className="col">
                <button class="btn btn-danger  " type="button" >Submit</button>
              </div>

              <div className="float-end col" >
                  <p >
                  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    About Input Data
                  </button>
                  </p>
                  <div class="collapse" id="collapseExample">
                    <div class="card card-body">
                      uploading data to database table
                    </div>
                  </div>
                </div>
      </div>
     
      <div className="mt-2 row">
        {data.length ? (
            <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Account</th>
                <th scope="col">ID Number</th>
              </tr>
            </thead>
              <tbody>

                {data.map((row, index) =>(
                  <tr key={index}>
                    <td>{row.Account}</td>
                    <td>{row.IDNumber}</td>
                  </tr>
                ))}


                
              </tbody>
              
            </table>

           

        ): null}
      
      </div>
    </div>
  )
}

export default CSVUpload