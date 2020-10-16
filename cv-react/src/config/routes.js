import { Home, Education, Skill, Experience, ContactUs} from '../components/pages';

const routes = [
    {
        path : '/contact',
        component : ContactUs,
    },
    {
        path : '/experience',
        component : Experience,
    },
    {
        path : '/skill',
        component : Skill,
    },
    {
        path : '/education',
        component : Education,
    },
    {
        path : '/home',
        component : Home,
    },
]
export default routes;