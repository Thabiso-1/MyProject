import { Fragment } from "react"
import { Link , Outlet} from "react-router-dom"


const Navigation =()=>{
  return(
    <Fragment>
    <div className="container">
      <div className="col ">
      <nav >
        <ol class="breadcrumb d-grid gap-2 col-6 mx-auto">
          <Link className="btn btn-primary" type="button" to='daily'>Daily</Link>
          <Link className="btn btn-primary" type="button" to='monthly'>Monthly</Link>
          <Link className="btn btn-primary" type="button" to='upload'>Input Data</Link>
        </ol>
      </nav>
      </div>
    </div>
    </Fragment>
  )
}

export default Navigation