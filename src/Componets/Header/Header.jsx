import profile from '../../../images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 mx-4 border-b-2 max-w-screen-xl mx-auto'>
            <h1 className='text-6xl'>Knowladge cafe</h1>
            <img src={profile } alt="" />
        </header>
    );
};

export default Header;