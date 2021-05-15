import React from 'react';
import restaurants from '../sample-restaurants';

class Landing extends React.Component {
    state = {
        display: false,
        title: '',
        url: ''
    };

    displayList = () => {
        console.log('click!!');
        console.log(this);
        //const { display } = this.state;
        const display = this.state.display
        this.setState({ display: !display });
    };

    getTitle = restaurant => {
        const { title, url } = restaurant;
        this.setState({ title, url, display: false });
    };

    goToRestaurant = () => {
        console.log('Go to restaurant')
    }

    render() {


        return (

            <
            div className = 'restaurant-select' >
            <
            div className = 'restaurant-select__top' >
            <
            div onClick = { this.displayList }
            className = 'restaurant-select__top-header font-effect-outline' > { this.state.title ? this.state.title : 'Выбери ресторан' } <
            /div>

            <
            div className = "arrow-picker" >
            <
            div className = "arrow-picker__up" >
            <
            /div>

            <
            div className = "arrow-picker__down" >
            <
            /div> <
            /div>

            <
            /div>	

            {
                this.state.display ? ( <
                    div className = "restaraunt-select__bottom" >

                    <
                    ul > {
                        restaurants.map(restaurant => {
                            return <li onClick = {
                                () => this.getTitle(restaurant) }
                            key = { restaurant.id } > { restaurant.title } < /li>

                        })
                    } <
                    /ul>

                    <
                    /div>

                ) : null
            }

            {
                this.state.title && !this.state.display ?
                    ( < button onClick = { this.goToRestaurant }
                        type = "button" > Перейти в ресторан < /button>
                    ) : null
            }



            <
            /div>



        );

    }
}

export default Landing;