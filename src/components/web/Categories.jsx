import axios from 'axios'
import { useQuery } from 'react-query'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,Autoplay} from 'swiper/modules';

import 'swiper/css';
import './../web/Categories.css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './context/Cart';
import { OrderContext } from './context/Order';


export default function Categories() {

  const getCategories = async()=>{
    const {data} =await axios.get(`${import.meta.env.VITE_API_URL}/categories/active?limit=7`);
    return data;
  }
  const {data,isLoading} = useQuery('web_categories',getCategories);
   
   if(isLoading){
    return <p>....Loading </p>
   }
   const x =useContext(OrderContext);
   console.log(x);
  return (

    <div className='container'>
        <div className='swiper-custom-pagination'></div>

    <Swiper
      modules={[Navigation, Pagination,Autoplay]}
      spaceBetween={10}
      slidesPerView={6.3}
      navigation
      loop={true}
      autoplay={{
        delay:3000
      }}
      
      pagination={{ 
        clickable: true,
        el:'.swiper-custom-pagination'  
      }}
     // onSlideChange={() => console.log('slide change')}
     // onSwiper={(swiper) => console.log(swiper)}
      
    >
     {data ?.categories.length ? data ?.categories.map( (category)=>
     <SwiperSlide key={category._id}>
       
        <div className='category'>
        <Link to={`/products/category/${category._id}`}>
        <img src={category.image.secure_url} className='rounded-circle'/>
        </Link>
        </div>
      </SwiperSlide>
     ):'<h2> no category found </h2>'}
    </Swiper>

    </div>
  )
}
