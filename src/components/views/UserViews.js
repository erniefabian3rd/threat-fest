/*
ALGORITHM:
    -Route to the paths created in the UserNav.js module, showing only
    to the users/bands, and call each function to display information on the new pages
*/

import { Outlet, Route, Routes } from "react-router-dom"
import { About } from "../about/About"
import { AlumniBandContainer, CurrentBandContainer } from "../bands/BandContainers"
import { SubmissionForm } from "../submissions/SubmissionForm"
import { UpdateList } from "../updates/UpdateList"

export const UserViews = () => {

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
                <Route path="application" element={ <SubmissionForm /> } />
                <Route path="updates" element={ <UpdateList/> } />

            </Route>
        </Routes>
    )
}