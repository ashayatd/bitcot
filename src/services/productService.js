import { setProducts } from "../reducers/productReducer";
import configureStore  from "../store/configureStore";

const ProductService = async () => {
  const API_URL = 'https://raw.githubusercontent.com/abdulbitcot/React-Coding-Challenge-Experience/main/sample.json';
  try {
    const response = await fetch(`${API_URL}`);
    if (!response.ok) {
      throw new Error("Problem in Network Response");
    }
    const data = await response.json();
    console.log("data from product service",data )
    configureStore.dispatch(setProducts(data));
  } catch (error) {
    throw new Error("Error fetching products:", error);
  }
};

export default ProductService;