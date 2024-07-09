import { useEffect } from 'react';
import {useParams, useNavigate} from 'react-router-dom';

const Product = () => {
  const params = useParams(); // req.params.productId params.productId
  console.log(params);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/about'); // res.redirect('/about');
    }, 3000);
  }, []);

  // useEffect(() => {
  //   fetch(`/api/products/${params.productId}`)
  //     .then()
  // }, [params.productId])

  return (
    <div>
      <h2>Product Component for #{params.productId}</h2>
    </div>
  );
};

export default Product;
