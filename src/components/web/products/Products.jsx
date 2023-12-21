import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4; // Number of products per page
  const [page, setpage] = useState(1);
  const getAllProduct = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/products?page=${currentPage}`);
    setProducts(data.products);
    setpage(data.page);
    return data;
  };

  const getProduct = async (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const { data, isLoading } = useQuery(['products', currentPage, page], getAllProduct);

  if (isLoading) {
    return <p>....Loading </p>;
  }

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='pro justify-content-between d-flex'>
            {products.map((product) => (
              <Card variant="outlined" sx={{ width: 320 }} key={product._id}>
                <img 
                  src={product.mainImage.secure_url}
                  loading="lazy"
                  alt=""
                />
                <CardContent>
                  <Typography level="title-md">{product.name}</Typography>
                  <Typography level="body-sm">California</Typography>
                </CardContent>
                <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
                  <Divider inset="context" />
                  <CardContent orientation="horizontal">
                    <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
                      price: {product.price} ش
                    </Typography>
                    <Divider orientation="vertical" />
                    <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
                      <Stack spacing={1}>
                        <Rating name="half-rating-read" defaultValue={product.avgRating} precision={0.5} readOnly />
                      </Stack>
                    </Typography>
                  </CardContent>
                </CardOverflow>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <nav aria-label="Page navigation example">
  <ul className="pagination justify-content-center">
    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
      <a className="page-link" href="#" onClick={() => getProduct(currentPage - 1)}>
        Previous
      </a>
    </li>

    <li className="page-item">
      <span className="page-link">{currentPage}</span>
    </li>

    <li className={`page-item ${currentPage === data.totalPages ? 'disabled' : ''}`}>
      <a className="page-link" href="#" onClick={() => getProduct(currentPage + 1)}>
        Next
      </a>
    </li>
  </ul>
</nav>

    </>
  );
}
