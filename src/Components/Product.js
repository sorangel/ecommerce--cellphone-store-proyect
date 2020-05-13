import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card w-100 h-100">
          <div
            className="img-container"
            onClick={() => console.log("you clicked me on the image container")}
          >
            <Link to="/details">
              <div
                style={{ backgroundImage: `url("${img}")` }}
                className="card-img-top"
              />
            </Link>
            <button
              className="cart-btn  bg-primary  w-25 h-70"
              disabled={inCart ? true : false}
              onClick={() => {
                console.log("add to the cart");
              }}
            >
              {inCart ? (
                <p className="text-capitalize mb-0" disabled>
                  {" "}
                  in cart
                </p>
              ) : (
                <i className="fas fa-cart-plus" />
              )}
            </button>
          </div>
          {/*card footer*/}

          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">$</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

const ProductWrapper = styled.div`
  .card {
    background: rgb(235, 235, 235);
    border-color: transparent;
    transition: all 250ms linear;
    
    &:hover {
    transform: scale(1.1);
    }
  }
  .card-footer {
    border-top: transparent;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }

  .img-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 
      //  Foto
      minmax(210px, 1fr) 
      //  Boton
      30px;
      //  Separador
      grid-gap: 10px;
  }
  
  .img-container > a {
    grid-column: 1;
    grid-row: 1;
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
  
  .card-img-top {
    grid-column: 1;
    grid-row: 1;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    
  }
  
  .card-btn {
 
  position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    border: none;
    color: var(--lightBlue);
    font-size: 1.4rem;
    border-radius: 0.2rem 0 0 0;
    transform: translate(100%, 100%);
  }
  .img-container:hover .cart-btn {
    transform: translate(0%, 0%);
  }
`;
