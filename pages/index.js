import axios from "axios";
import Image from "next/image";
import { useContext } from "react";
import { toast } from "react-toastify";
import Layout from "../components/Layout";
import ProductItem from "../components/ProductItem";
import Product from "../models/Product";
import db from "../utils/db";
import { Store } from "../utils/Store";

const Home = ({ products }) => {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  //The addToCartHandler is an asynchronous function used to add a product to the shopping cart.
  //It is called when a user clicks the "Add to Cart" button on a product item.
  //The function first checks if the product is already in the cart and increments the quantity if it is.
  //Then, it sends an API request to fetch detailed product information and checks if the quantity in stock is sufficient.
  //If the product is successfully added to the cart, a success notification is displayed.

  const addToCartHandler = async (product) => {
    const existItem = cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      toast.error("Sorry!  Out of stock");
      return;
    }

    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });

    toast.success("Product added to cart");
  };

  return (
    <Layout title="Home Page">
      <div className="body-font sm: my-16 border-b border-gray-200">
        <h3 className="md:text4xl text-center font-semibold uppercase text-black sm:text-4xl lg:text-center lg:text-6xl">
          quality used cars
        </h3>
        <Image src="/images/hero.png" alt="" width="2200" height="600" />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductItem
            product={product}
            key={product.slug}
            addToCartHandler={addToCartHandler}
          ></ProductItem>
        ))}
      </div>
    </Layout>
  );
};

//This is an async function that runs on the server side during server rendering.
// It connects to a database, retrieves a list of products, and converts the documents
//to plain JavaScript objects. These products are then passed as props
//to the Home component where it's initially rendered.
export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find().lean();

  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
export default Home;
