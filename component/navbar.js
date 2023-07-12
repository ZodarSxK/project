import Link from "next/link"
export default function Navbar(){
    return(
            <nav>
                <div className='logo'>
                    <Link href='/'>Logo</Link>
                </div>
                <div className='link'>
                    <Link href='/'>Home</Link>
                    <Link href='/info'>Info</Link>
                    <Link href='/about'>About</Link>
                    <Link href='/contract'>Contract</Link>
                </div>
                <div className='login'>
                    <Link href='/login'>Login</Link>
                </div>
            </nav>
    )
}