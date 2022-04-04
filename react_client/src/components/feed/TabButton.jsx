import { useContext } from "react"
import UserContext from "../../context/userContext"

const TabButton = ({ group, otherStyles='' }) => {
    const { currentGroup, setCurrentGroup } = useContext(UserContext)

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      
    const currentGroupStyles = "bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-900"
	const tabStyles = 'inline-block relative py-4 px-4 w-full text-sm font-medium text-center hover:bg-gray-100 text-gray-900 focus:ring-4 focus:ring-blue-300 focus:z-20 active dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white dark:hover:text-gray-50'

    return (
        <button
            onClick={() => setCurrentGroup(group.toLowerCase())}
            className={`${
                currentGroup === group.toLowerCase()
                    && currentGroupStyles
            } ${tabStyles} ${otherStyles}`}
            aria-current='page'>
            {capitalizeFirstLetter(group)}
        </button>
        )	
}

export default TabButton