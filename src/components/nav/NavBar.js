/*
ALGORITHM:
	-Check whether the signed in user is admin or not. If so,
	display the AdminNav. If not, display the UserNav.
*/

import { UserNav } from "./UserNav"
import { AdminNav } from "./AdminNav"
import "./NavBar.css"

export const NavBar = () => {
	
    const localFestUser = localStorage.getItem(["fest_user"])
    const festUserObject = JSON.parse(localFestUser)

	if (festUserObject.admin) {
		//Return employee navbar
		return <AdminNav/>
	} else {
		//Return customer navbar
		return <UserNav/>
	}
	
}
