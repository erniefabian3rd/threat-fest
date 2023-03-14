/*
ALGORITHM:
    -Route to the paths created in the AdminNav.js module, showing only
    to the admin team, and call each function to display information on the new pages
*/

import { Outlet, Route, Routes } from "react-router-dom"
import { AlumniLineupList } from "../bands/AlumniLineupList"
import { CurrentLineupList } from "../bands/CurrentLineupList"
import "./Views.css"

export const AdminViews = () => {
    
    return(
    <Routes>
            <Route path="/" element={
                <>
                    <h1 className="header">Threat Fest</h1>
                    <div className="tagline">Nashville. Music. Community.</div>

                    <Outlet />
                </>
            }>

                <Route path="lineup" element={ <CurrentLineupList /> } />
				<Route path="alumni" element={ <AlumniLineupList /> } />
                <Route path="submissions" element={ <></> } />
                <Route path="updateform" element={ <></> } />

            </Route>
        </Routes>
    )
}