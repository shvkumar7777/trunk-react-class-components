import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "./redux/actions/productsActions";
import ProductComponent from "./ProductComponent";
import {Link} from  "react-router-dom";


const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  
  //to fetch the products data
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };
//to fetch the data when the page is loaded
  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", products);
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <div className="ui grid container">
        <ProductComponent />
      </div>
    </div>
  );
};

export default ProductPage;