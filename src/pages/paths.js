import Courses from "./Courses";
import Dashboard from "./Dashboard";
import Students from "./Students";

const paths = [
    {
        path:'/dashboard',
        component:<Dashboard/>,
        name: 'Dashboard',
    },
    {
        path:'/courses',
        component:<Courses/>,
        name: 'Courses',
    },
    {
        path:'/students',
        component:<Students/>,
        name: 'Students',
    }
]

export default paths;