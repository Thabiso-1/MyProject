


const Daily =()=>{
  return(
    <div className="">
       <button class="btn btn-danger mt-2 float-start " type="button">Execute</button>
      
      <div className="float-end " >
        <p className="mt-2  ">
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          About Daily
        </button>
        </p>
        <div class="collapse" id="collapseExample">
          <div class="card card-body">
            Daily extract 
          </div>
        </div>
        </div>
    </div>
  )
}

export default Daily