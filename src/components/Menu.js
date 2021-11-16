import React, { Component } from "react";
import { Media } from "reactstrap";
import { dishes } from "../shared/Dishes";
import {
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,
} from "reactstrap";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: dishes,
      selectedDish: null,
    };
  }
  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  renderDish(dish) {
    console.log("dish==>", dish);
    if (dish != null) {
      return (
        <div className="row">
          <div className="col-md-5 col-12 m-1">
            <Card>
              <CardImg src={dish.image} alt={dish.name} />

              <CardTitle className="font-weight-bold">{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </Card>
          </div>
          <div className="col-md-5 m-1  mt-2">
            <CardTitle className=" font-weight-bold ">Comments</CardTitle>
            <CardText>Imagine all the eatables, living in confusion</CardText>
            <CardText>--John lemon , Oct17,2012</CardText>
            <CardText>
              Send anyone to heaven, I wish i could get my mother in law to eat
              it!
            </CardText>
            <CardText>--Paul McVites , Sep 06,2014</CardText>
            <CardText>Eat it, just eat it</CardText>
            <CardText>Michael Jaikhishan, Feb 14,2015 </CardText>
            <CardText>Ultimate reaching for the stars </CardText>
            <CardText>Ringo starry, Dec 03,2013 </CardText>
            <CardText>Its your birthday we are gonna party!</CardText>
          </div>
        </div>
      );

      console.log("if block");
    } else {
      <div></div>;
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
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{menu}</div>
        <div className="row">{this.renderDish(this.state.selectedDish)}</div>
      </div>
    );
  }
}

export default Menu;
