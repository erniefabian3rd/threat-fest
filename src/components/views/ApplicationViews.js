/*
ALGORITHM:
	-Check whether the signed in user is admin or not. If so,
	display the AdminViews routes. If not, display the UserViews routes.
*/

import { AdminViews } from "./AdminViews"
import { UserViews } from "./UserViews"

export const ApplicationViews = () => {
	
	const localFestUser = localStorage.getItem(["fest_user"])
    const festUserObject = JSON.parse(localFestUser)

	if (festUserObject.admin) {
		return <AdminViews/>
	} else {
		return <UserViews/>
	}
	
}

