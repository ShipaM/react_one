import React from 'react';

class Header extends React.Component {
    render() {
        return ( <
            header className = "top" >
            <
            div className = "wrap" >
            <
            div className = "header-content" >

            <
            div className = "header-rating" >
            <
            div className = "header-rating__tag" > Рейтинг: < /div>

            <
            div className = "header-rating__icon" > ++ + < /div> <
            /div> <
            /div>

            <
            div className = "header-divider" > < /div> <
            h1 className = "font-effect-fire-animation" > Hot Burgers < /h1> <
            h3 >
            <
            span >
            Быстрая доставка горячих <
            span className = "sub-header" > #бургеров < /span> <
            /span> <
            /h3> <
            /div> <
            /header>
        );
    }
}

export default Header;