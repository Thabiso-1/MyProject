import { Routes, Route } from "react-router-dom"
import Daily from "../Daily/daily.component"
import Monthly from "../Monthly/monthly.component"
import CSVUpload from "../CSV/csv.component"



const Container =()=>{
    return(
        <div className="container ">
            <Routes>
                <Route path='/daily' element={<Daily/>}></Route>
                <Route path='/monthly' element={<Monthly/>}></Route>
                <Route path='/upload' element={<CSVUpload/>}></Route>
            </Routes>
        </div>
    )
}

export default Container