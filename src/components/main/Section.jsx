import { useEffect, useState } from 'react';
import styled from 'styled-components';
import instance from '../../api/movieAxios';
import requests from '../../api/request';
import { Mousewheel, Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-flip';

const Section = ({ title = '', fetchUrl = '' }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const {
          data: { results },
        } = await instance.get(`${fetchUrl}`);
        setResults(results);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          console.error('데이터를 찾을 수 없습니다.');
        } else {
          console.error(
            '데이터를 불러오는 동안 오류가 발생했습니다.',
            error.message
          );
        }
      }
    };
    fetchMovies();
  }, [fetchUrl]);

  return (
    <>
      <SectionWrapper className={title}>
        <Title>{title}</Title>
        <Swiper
          modules={[Mousewheel, Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={6}
          slidesPerGroup={6}
          mousewheel
          navigation
          style={{
            '--swiper-theme-color': 'white',
            '--swiper-navigation-size': '20px',
            // '--swiper-pagination-bullet-inactive-color': 'green',
            // '--swiper-pagination-color': 'blue',
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
            renderBullet: (index, className) => {
              return '<span class="' + className + '"></span>';
            },
          }}
          // breakpoints={{
          //   320: {
          //     slidesPerView: 1,
          //   },
          //   768: {
          //     slidesPerView: 2,
          //   },
          //   1024: {
          //     slidesPerView: 6,
          //   },
          // }}
          onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
        >
          {results.map((result) => (
            <SwiperSlide key={result.id}>
              <Img
                src={`${requests.fetchImg}/w300${result.backdrop_path}`}
                alt="thumbnail"
                onClick={() => {
                  console.log('Section.jsx - : result.id', result.id);
                }}
              />
            </SwiperSlide>
          ))}
          <div
            className="swiper-pagination"
            style={{ textAlign: 'end', position: 'absolute' }}
          />
        </Swiper>
      </SectionWrapper>
    </>
  );
};

const SectionWrapper = styled.section`
  margin: 1rem 0;
`;
const Title = styled.div`
  color: white;
  margin: 1rem 0;
`;

const Img = styled.img`
  width: 200px;
  transition: transform 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
export default Section;
