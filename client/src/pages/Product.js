import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productAll } from '../redux/features/product/productActions';
import Loading from '../components/Loader/Loading';
import Header from '../components/Header/Header';
const ProductCard = React.lazy(() => import('../components/Card/ProductCard'));

const Product = () => {
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(productAll());
  }, [dispatch]);

  return (
    <section className="product mb-10">
      <Header
        head="Products"
        title="Diffrent Type of Products"
        description="all the products are extracted from fakestore api"
      />
      {error && (
        <span className="flex justify-center text-3xl text-pink text-center">Error: {error}</span>
      )}
      <div className="flex gap-2 justify-evenly flex-wrap">
        {loading ? (
          <Loading />
        ) : (
          products.map((item, i) => {
            return (
              <React.Suspense key={item.id} fallback={<Loading />}>
                <ProductCard item={item} />
              </React.Suspense>
            );
          })
        )}
      </div>
    </section>
  );
};

export default Product;
