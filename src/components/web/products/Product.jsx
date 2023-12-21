
import axios from 'axios';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import React, { useContext } from 'react';
import { CartContext } from '../context/Cart.jsx';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@emotion/styled';
import Typography from '@mui/material/Typography';
import '../products/product.css'
const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};
function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}
function Product() {

  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const { productId } = useParams();
  const { addToCartContext } = useContext(CartContext);
  const getProduct = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/products/${productId}`);
    return data.product;
  }

  const { data, isLoading } = useQuery('product', getProduct);
  console.log(data)
  if (isLoading) {
    return <p>Loading.....</p>
  }
  const addToCart = async (productId) => {
    const res = await addToCartContext(productId);
    console.log(res);
  }

  
  return (

    <div className='container mt-5 '>
      <div className='row'>
        <div className='col-lg-4'>
          {data.subImages.map((img) =>
            <><div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={img.secure_url} />
                </div>
              </div>
            </div></>
          )}
        </div>
        <div className='col-lg-8'>
          <h2>{data.name}</h2>
          <p>finalPrice:{data.price}</p>
          <>
            <Box
              sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Rating
                name="hover-feedback"
                value={data.ratingNumbers}
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
              />
              {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
              )}
            </Box></>
          <button className='btn btn-outline-secondary ' onClick={() => addToCart(data._id)}>Add to Cart</button>

          {data.reviews.map((reviews) =>
            <>
              <Box
                sx={{
                  '& > legend': { mt: 2 },
                }}
              >

                <Typography component="legend">{reviews.comment}</Typography>
                <Rating name="read-only" value={reviews.rating} readOnly />

              </Box></>

          )}

        </div>
      </div>

    </div>


  )
}
export default Product
