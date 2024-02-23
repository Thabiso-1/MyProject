import Navigation from "../Navigation/navigation.component";
import Monthly from "../Monthly/monthly.component";
import Daily from "../Daily/daily.component";
import Container from "../Container/container.component";


const Home =()=>{
  return(
    <div className="container mt-5">
      <div className="row">
          <div className="text-center bg-dark">
          <img src="./images/inspirit3.png" class="img-fluid " alt="..."/>
          </div>
          <div className="text-center">
          <h1>SABC UTILS</h1>
          </div>
          
      </div>
      <div className="row">
          <div className="col-3">
            <Navigation/>
          </div>
          
          <div className="col-9 border border-dark">
              <Container/>
          </div>
      </div>
      
      
    </div>
  )
}

export default Home;
