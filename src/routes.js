
// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// @mui icons
import Icon from "@mui/material/Icon";
import Home from "layouts/home";
import Blogs from "layouts/blogs";
import Forums from "layouts/forums";
import { FreeResources } from "layouts/free-resources";
import { Resource } from "layouts/free-resources/resource";
import { OurCourses } from "layouts/our-courses";
import { CourseDetail } from "layouts/our-courses/courseDetails";
import Admin from "layouts/Admin";
import { AddCourse } from "layouts/Admin/Component/AllCourses/addCourse";
import { AllCourses } from "layouts/Admin/Component/AllCourses/Courses";
import { CourseContent } from "layouts/Admin/Component/AllCourses/courseContent";
// import { AddCourse } from "layouts/Admin/Component/addCourse";

const routes = [
  {
    type: "collapse",
    name: "Home",
    key: "home",
    icon: <Icon fontSize="small">home</Icon>,
    route: "/",
    component: <Home />,
  },
  {
    type: "collapse",
    name: "Admin",
    key: "admin",
    icon: <Icon fontSize="small">admin</Icon>,
    route: "/admin",
    component: <Admin />,
  },
  {
    type: "collapse",
    name: "All Course",
    key: "all-courses",
    icon: <Icon fontSize="small">all-courses</Icon>,
    route: "/admin/all-courses",
    component: <AllCourses />,
  },
  {
    type: "collapse",
    name: "Add Course",
    key: "add-course",
    icon: <Icon fontSize="small">add-course</Icon>,
    route: "/admin/add-course",
    component: <AddCourse />,
  },
  {
    type: "collapse",
    name: " Course-content",
    key: "course-content",
    icon: <Icon fontSize="small">course-content</Icon>,
    route: "/admin/course-content/:id",
    component: <CourseContent />,
  },
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Free Resources",
    key: "free-resources",
    icon: <Icon fontSize="small">free resources</Icon>,
    route: "/free-resources",
    component: <FreeResources />,
  },
  {
    type: "collapse",
    name: "resource",
    key: "resource",
    icon: <Icon fontSize="small">resource</Icon>,
    route: "/free-resources/:id",
    component: <Resource />,
  },
  {
    type: "collapse",
    name: "Blogs",
    key: "blogs",
    icon: <Icon fontSize="small">blogs</Icon>,
    route: "/blogs",
    component: <Blogs />,
  },
  {
    type: "collapse",
    name: "Forums",
    key: "forums",
    icon: <Icon fontSize="small">forums</Icon>,
    route: "/forums",
    component: <Forums />,
  },
  {
    type: "collapse",
    name: "Our Courses",
    key: "our-courses",
    icon: <Icon fontSize="small">courses</Icon>,
    route: "/our-courses",
    component: <OurCourses />,
  },
  {
    type: "collapse",
    name: "Course",
    key: "course",
    icon: <Icon fontSize="small">course</Icon>,
    route: "/our-courses/:id",
    component: <CourseDetail />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
];

export default routes;
