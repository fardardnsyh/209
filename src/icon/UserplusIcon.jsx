import { useContext } from "react";
import ThemeContext from "../contexts/themesContext";

function UserplusIcon() {

  return (
  <>
    <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round">{/*rgb(243 244 246) white mode à gerer after*/}
        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <path d="M20 8v6M23 11h-6" />
    </svg>
  </>
  )
}
  
  export default UserplusIcon
  