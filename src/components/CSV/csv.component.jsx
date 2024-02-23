


const CSVUpload =()=>{
  return(
    <div className="">
      <div className="mt-2 row w-70 mx-auto">

              <div className="col">
              <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"/>
                </div>
              
              <div className="col">
                <button class="btn btn-danger  " type="button">Execute</button>
              </div>

              <div className="float-end col" >
                  <p >
                  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    About Input Data
                  </button>
                  </p>
                  <div class="collapse" id="collapseExample">
                    <div class="card card-body">
                      Input Data
                    </div>
                  </div>
                </div>
      </div>
     
      <div className="mt-2 row">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Account</th>
            <th scope="col">ID Number</th>
          </tr>
        </thead>
          <tbody>
            <tr >
              ...
            </tr>
            <tr>
              ...
            </tr>
            <tr>
              ...
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CSVUpload