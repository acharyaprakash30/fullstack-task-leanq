import React, { useEffect } from 'react';
// import ProductCard from './ProductCard'
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loader/Loading';
import Header from '../components/Header/Header';
import { userAll } from '../redux/features/user/userActions';
import UserCard from '../components/Card/UserCard';
// const ProductCard = React.lazy(() => import('./ProductCard'));

const User = () => {
  const dispatch = useDispatch();
  const { loading, users, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(userAll());
  }, [dispatch]);

  return (
    <section className="product mb-10">
      <Header
        head="Clients"
        title="ALL VALUABLE CLIENTS"
        description="all users data are extracted from fakestore api"
      />
      {error && (
        <span className="flex justify-center text-3xl text-pink text-center">Error: {error}</span>
      )}
      <div className="flex gap-2 justify-evenly flex-wrap">
        {loading ? (
          <Loading />
        ) : (
          users.map((item, i) => {
            return (
              <React.Suspense key={item.id} fallback={<Loading />}>
                <UserCard item={item} />
              </React.Suspense>
            );
          })
        )}
      </div>
    </section>
  );
};

export default User;
