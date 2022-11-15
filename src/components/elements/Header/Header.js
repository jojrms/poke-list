import './Header.scss';

export default function Header(){

    return(
        <header>
            <i>
                <img src="https://seeklogo.com/images/C/crosstower-nft-logo-E968840B89-seeklogo.com.png"/>     
                Pokenft
            </i>

            <ul>
                <li>Home</li>
                <li>Featured</li>
                <li>Pricing</li>
                <li>Contact</li>
            </ul>

            <div>
                <button id="btnLogin">Login</button>
                <button id='btnRegister'>Register</button>    
            </div>
            
        </header>
    )
}