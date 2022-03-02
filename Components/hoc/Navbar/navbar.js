import Link from "next/link";

const Navbar =()=> {
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-light navbar-light shadow py-4">
                <div className="container">
                    <Link href="/" className="navbar-brand">Udemy Courses</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item px-3">
                                <Link href="/" className="nav-link">Home Page</Link>
                            </li>
                            <li className="nav-item px-3">
                                <Link href="/create" className="nav-link">Register Page</Link>
                            </li>
                            <li className="nav-item px-3">
                                <Link href="/login" className="nav-link">Login Page</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar