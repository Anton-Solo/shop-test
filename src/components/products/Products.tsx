import "./products.scss";
import { ReactElement, useEffect, useState } from "react";
import { ProductsItem } from "./ProductsItem";
import { useAppDispatch, useAppSelector } from "../../hooks/useStore";
import { fetchProducts } from "../../store/actions/productsActions";
import { ordersIndicator, productsList } from "../../store/selectors";
import { changeOrderIndicator } from "../../store/slices/ordersSlice";

export const Products = (): ReactElement => {
  const dispatch = useAppDispatch();
  const productList = useAppSelector(productsList);
  const indicator = useAppSelector(ordersIndicator);
  const [filteredProducts, setFilteredProducts] = useState(productList);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    setFilteredProducts(productList);
  }, [productList]);

  useEffect(() => {
    if (indicator) {
      const timerID = setTimeout(
        () => dispatch(changeOrderIndicator(false)),
        3000
      );

      return () => {
        clearInterval(timerID);
      };
    }
  }, [indicator]);

  const filterHandle = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "not") {
      setFilteredProducts(productList);
      return;
    }
    const filteredProducts = productList?.filter(
      (products) => products.type === e.target.value
    );
    setFilteredProducts(filteredProducts);
  };

  return (
    <div className="container">
      <div className="products">
        <div className="products-head">
          {indicator ? (
            <div className="products-indicator">Order added</div>
          ) : null}
          <h2 className="products-head__title">Products</h2>
          <label className="products-head__sort">
            <span className="products-head__sort--name">Тип</span>
            <select
              className="products-head__sort--select"
              onChange={(e) => filterHandle(e)}
            >
              <option value="not">Not filter</option>
              <option value="laptop">Laptop</option>
              <option value="monitor">Monitor</option>
              <option value="tv">TV</option>
            </select>
          </label>
        </div>
        <div className="products-wrapper">
          {filteredProducts.length > 0 ? (
            filteredProducts?.map((product) => (
              <ProductsItem key={product?.id} product={product} />
            ))
          ) : (
            <h2>Not found</h2>
          )}
        </div>
      </div>
    </div>
  );
};
