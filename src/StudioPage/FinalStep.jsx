import React, { useEffect } from "react";
import Banner from "../components/studio/Banner";
import Tag from "../components/studio/Tag";
import Navbar from "../components/layout/navbar/Navbar";
import Footer from "../components/layout/footer/Footer";
import FormStepper from "./FormStepper";
import "./FinalStep.css";
import { useDispatch, useSelector } from "react-redux";
// import { createCustomProduct } from "../actions/customProductActions";
import { addToCart } from "../actions/cartActions";
import { ADD_TO_CART_RESET } from "../constants/cartConstants";
import { productDetails } from "../actions/productActions";
// import { NEW_CUSTOM_PRODUCT_RESET } from "../constants/customProductConstants";

const FinalStep = () => {
  const { customProductData } = useSelector(
    (state) => state.collectCustomProductData
  );

  // const { customProductCreated } = useSelector((state) => state.customProduct);
  const { cartAdded } = useSelector((state) => state.cart);
  const { product } = useSelector((state) => state.productDetails);

  const dispatch = useDispatch();

  const storeData = () => {
    // dispatch(createCustomProduct(customProductData));
  };

  const addToCartFun = () => {
    dispatch(addToCart({ ...customProductData, customProduct: true }));
  };

  useEffect(() => {
    // if (customProductCreated) {
    //   alert("Custom Product Created");
    //   dispatch({ type: NEW_CUSTOM_PRODUCT_RESET });
    // }
    if (cartAdded) {
      alert("Product Added to cart");
      dispatch({ type: ADD_TO_CART_RESET });
    }
    dispatch(productDetails(customProductData.product));
  }, [cartAdded]);

  return (
    <div id="Step-All-StudioPage">
      <Navbar />
      <Banner />
      <Tag />
      <FormStepper active={4} />
      {customProductData && customProductData !== {} && (
        <div className="stylesPreview" id="Content">
          <h3 className="Content-h1">Preview your styles</h3>

          <div className="previewHead">
            <span> Shirt for Manju -1 </span>
            {product && <span>({product.name})</span>}
          </div>

          <div>
            <div className="fabricPreview">
              <h5 className="styleName">Fabric</h5>
              <div>
                <p> {customProductData.fabric}</p>
              </div>
            </div>

            <div className="patternPreview">
              <h5 className="styleName">Pattern</h5>
              <div>
                <p> {customProductData.pattern}</p>
              </div>
            </div>
          </div>

          <div>
            <div className="collarPreview">
              <h5 className="styleName">Collar style</h5>
              <div />
              <p>{customProductData.collarStyle}</p>
            </div>

            <div className="collarPreview">
              <h5 className="styleName">Buttons style</h5>
              <div />
              <p>{customProductData.buttonsStyle}</p>
            </div>

            <div className="colorPreview">
              <h5 className="styleName">Color</h5>
              <div style={{ background: `${customProductData.color}` }} />
            </div>

            <div className="sizePreview">
              <h5 className="styleName">Size</h5>
              <div></div>
              <p>{customProductData.sizeName}</p>
            </div>
          </div>

          <div>
            <button>PREVIOUS</button>

            <div>
              <button onClick={storeData}>SAVE</button>
              <button onClick={addToCartFun}>ADD TO CART</button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default FinalStep;
