import MenuLateral from '../components/MenuLateral/MenuLateral'
import img1 from '../img/1.jpeg'
import img2 from '../img/2.jpeg'
import img3 from '../img/3.jpg'
import img4 from '../img/4.jpg'
import img5 from '../img/5.jpeg'
import img6 from '../img/6.jpg'
import img7 from '../img/7.jpg'
import img8 from '../img/8.jpeg'
import img9 from '../img/9.jpg'
import Logo from '../img/ORV-H1.svg'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Pagination,Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../css/Dashbord.css'
import '../css/Logo.css'
import '../css/MenuLateal_css/MenuLateral.css'

export default function Dashbord() {
  
  return (
    <div className='cor-de-fundo'>
          <MenuLateral/>
          <div className='orv-logo-container'>
            <div className='logo-paragrafo'>
                <div className='conteudo-logo'>
                    <img src={Logo}/> 
                    <p>
                      Somos uma empresa de Consultoria, Arquitetura, Engenharia e Serviços Técnicos que desenvolve soluções pautadas às necessidades dos seus clientes, atuando nos mercados público e privado.</p>
                </div>
            </div>
            <div className='corte-inicial'>
            </div>
            <div className='swipper-orv'>
                    <Swiper
                slidesPerView={5}
                
                autoplay={{
                  delay: 2900,
                  disableOnInteraction: false,
                }}
                speed={2000}    
                slidesPerGroup={5}
                spaceBetween={1}
                pagination={false}
                navigation={false}
                modules={[Autoplay,Pagination,Navigation]}
                className="mySwiper">

            <SwiperSlide ><img src={img1} /></SwiperSlide>
            <SwiperSlide><img src={img2}/></SwiperSlide>
            <SwiperSlide><img src={img3}/></SwiperSlide>
            <SwiperSlide><img src={img4}/></SwiperSlide>
            <SwiperSlide><img src={img5}/></SwiperSlide>
            <SwiperSlide><img src={img6}/></SwiperSlide>
            <SwiperSlide><img src={img7}/></SwiperSlide>
            <SwiperSlide><img src={img8}/></SwiperSlide>
            <SwiperSlide><img src={img9}/></SwiperSlide>
            </Swiper>
            </div>
            <div className='corte-inicial1'>
            </div>
            <div className='footer-orv'>
              
            </div>
          </div> 
    </div>
  )

}


