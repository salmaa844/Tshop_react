import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

export default function CategoriesDetails() {

  const { categoryId } = useParams();
  const getCategoruDetils = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/products/category/${categoryId}`);
    return data.products;
  }
  const { data, isLoading } = useQuery('category_details', getCategoruDetils);
  if (isLoading) {
    return <p>Loading.....</p>
  }


  return (
   <>

      <div className="row row-cols-2 row-cols-md-3 g-3">
        {data.length ? data.map((product) =>
          <div className="col d-flex justify-content-center bg-secondary-subtle">
            <div className="card m-5 p-5 ">
              <img  src={product.mainImage.secure_url} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text"> <Link className='text-decoration-none text-warning ' to={`/product/${product._id}`}>details</Link></p>

              </div>

            </div>
          </div>

        ) : <h2>no product </h2>}
</div>
      </>
      )
}
