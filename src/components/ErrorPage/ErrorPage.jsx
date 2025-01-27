import { Link, useLocation } from "react-router-dom"

export const ErrorPage = () => {
    const location = useLocation()
    return <>
    <h1>Sorry!, the path &quot;{location.pathname}&quot; does not match any page
    </h1>
    <Link to="/">Go back</Link>
    </>
}