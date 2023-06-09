/*
ALGORITHM:
    -Route to the paths created in the UserNav.js module, showing only
    to the users/bands, and call each function to display information on the new pages
*/

import { Outlet, Route, Routes } from "react-router-dom"
import { About } from "../about/About"
import { AlumniDetails } from "../bands/AlumniDetails"
import { AlumniBandContainer, CurrentBandContainer } from "../bands/BandContainers"
import { CurrentLineupDetails } from "../bands/CurrentLineupDetails"
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

                    <Outlet />
                </>
            }>

                <Route path="lineup" element={ <CurrentBandContainer /> } />
                <Route path="lineup/:bandId" element={ <CurrentLineupDetails /> } />

				<Route path="alumni" element={ <AlumniBandContainer /> } />
                <Route path="alumni/:alumniBandId" element={ <AlumniDetails /> } />

                <Route path="application" element={ <SubmissionForm /> } />

                <Route path="updates" element={ <UpdateList/> } />

            </Route>
        </Routes>
    )
}