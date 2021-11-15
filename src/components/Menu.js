import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { dishes } from '../shared/Dishes';
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap';


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: dishes,
            selectedDish: null

        };
    }
    onDishSelect(dish) {
        this.setState({ selectedDish: dish })
    }

    renderDish(dish) {
        console.log("dish==>", dish);
        if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    
                        <CardTitle>{dish.name}</CardTitle>
                    
                    <CardText>{dish.description}</CardText>

                </Card>

            )

            console.log("if block");
        } else {
            <div></div>
            console.log("else wala block");
        }

    }
    render() {
        const menu = this.state.dishes.map((dish) => {

            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle >{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>



            </div>

        );
    }
}

export default Menu;