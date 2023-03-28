import { useContext } from 'react';
import { MenuContext } from '../../context/menucontrol';
import { UserControl } from '../../context/usercontrol';
import { UserContext } from '../../context/userContext';
import { useNavigate } from 'react-router-dom';
import {
     Container, 
     LogoContainer,
     ButtonContainer,
     ButtonIcon,
     SearchContainer,
     SearchInputContainer,
     SearchInput,
     SearchButton,
     HeaderButton,
     SignInButton,
     ButtonIconUser,
     ButtonContainerDot,

} from "./styles";

import UserIcon from '../../assets/usericon.png';
import HamburgerIcon from '../../assets/hamburger.png';
import Logo from '../../assets/YouTube-Logo.png';
import SearchIcon from '../../assets/search.png';
import MicIcon from '../../assets/microphone.png';
import VideoIcon from '../../assets/video.png';
import BellIcon from '../../assets/bell.png';
import DotmenuIcon from '../../assets/dotmenu.png';




function Header(){
    const navigate = useNavigate();
    const { login, user } = useContext(UserContext);

    const { setOpenMenu, openMenu } = useContext(MenuContext);
    const handleMenuClick = () => {
        setOpenMenu(!openMenu);
    };

    const { setOpenUser, openUser } = useContext(UserControl);
    const handleUserClick = () => {
        setOpenUser(!openUser);
    };


    return (
        <Container>
            <LogoContainer>
                <ButtonContainer 
                    onClick={handleMenuClick}
                    margin='0 10px 0 0' 
                    >
                    <ButtonIcon alt="" src={HamburgerIcon}/>
                </ButtonContainer>
                <img
                    style={{ cursor: 'pointer', width: '100px'}}
                    alt=''
                    src={Logo}
                />
            </LogoContainer>

            <SearchContainer>
                <SearchInputContainer>
                    <SearchInput placeholder="Search" />
                </SearchInputContainer>
                <SearchButton>
                    <ButtonIcon alt="" src={SearchIcon} />
                </SearchButton>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={MicIcon} />
                </ButtonContainer>
            </SearchContainer>

            <HeaderButton>
                {login?
                    <>
                        <ButtonContainer margin='0 0 0 10px'>
                            <ButtonIcon alt="" src={VideoIcon} />
                        </ButtonContainer>
                        <ButtonContainer margin='0 0 0 10px'>
                            <ButtonIcon alt="" src={BellIcon} />
                        </ButtonContainer>

                        <ButtonContainer 
                            onClick={handleUserClick}
                            margin='0 0 0 10px'
                        >
                            {user?.name?.charAt(0) ?? ''}
                        </ButtonContainer>
                        {/* <button onClick={() => logOut()}>Logout</button> */}
                    </>
                :
                    <>
                        <ButtonContainerDot margin='0 0 0 10px'>
                            <ButtonIcon alt="" src={DotmenuIcon} />
                        </ButtonContainerDot>

                        <SignInButton onClick={() => navigate('/login')}>
                            <ButtonIconUser alt="" src={UserIcon} />
                            <span> Sign in </span>
                        </SignInButton>
                    </>
                    
                }
            </HeaderButton>


        </Container>
    )
}

export default Header;