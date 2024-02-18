import { Link } from 'react-router-dom';
import logo from '../assests/botrace.png'

export const Topbar = () => {
    return (
        <div className="flex justify-between items-center  w-screen bg-gray-700">
            <div className='w-2/4 float-star '>
                <img src={logo} className='w-3/4' alt="Logo" />
            </div>
            {/* <div className="text-8xl text-white">
                Daily Code
            </div> */}
            <div className='w-3/4'>
                <NavBar />
            </div>
        </div>
    );
}


const topbarItems = [
    {
        title: "About",
        route: "/about"
    }, {
        title: "Acitivity",
        route: "/activity"
    }, {
        title: "Problems",
        route: "/problems"
    }, {
        title: "Leaderboard",
        route: "/leaderboard"  // Corrected route name
    }
];

function NavBar() {
    return <div className="flex mt-4">
        {topbarItems.map(item => <NavbarItem key={item.title} route={item.route} title={item.title} />)}
    </div>
}

function NavbarItem({ title, route }: {
    title: string;
    route: string;
}) {
    return <div className="mr-10 text-white text-lg cursor-pointer hover:text-teal-500 text-base font-light">
            {title}
            
        </div>

}
