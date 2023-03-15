/*
ALGORITHM:
    -Route to the paths created in the AdminNav.js module, showing only
    to the admin team, and call each function to display information on the new pages
*/

import { Outlet, Route, Routes } from "react-router-dom"
import { About } from "../about/About"
import { AlumniBandContainer, CurrentBandContainer } from "../bands/BandContainers"
import { SubmissionList } from "../submissions/SubmissionList"
import { UpdateForm } from "../updates/UpdateForm"

export const AdminViews = () => {
    
    return(
    <Routes>
            <Route path ="/" element={
                   <About />
            }>
            </Route>
            
            <Route path="/" element={
                <>
                    <h1 className="header">Threat Fest</h1>
                    <div className="tagline">Nashville. Music. Community.</div>

                    <Outlet />
                </>
            }>

                <Route path="lineup" element={ <CurrentBandContainer /> } />
				<Route path="alumni" element={ <AlumniBandContainer /> } />
                <Route path="submissions" element={ <SubmissionList/> } />
                <Route path="updateform" element={ <UpdateForm /> } />

            </Route>
        </Routes>
    )
}