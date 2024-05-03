import { useEffect, useState } from 'react';
import styled from 'styled-components';
import instance from '../../api/movieAxios';
import requests from '../../api/request';
import { Mousewheel, Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import useModal from '../../hooks/useModal';
import Modal from '../shared/Modal';

const Section = ({ title = '', fetchUrl = '' }) => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const { opened, openModal, closeModal } = useModal();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const {
          data: { results },
        } = await instance.get(`${fetchUrl}`);
        setMovies(results);
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
          // spaceBetween={50}
          slidesPerView={1}
          slidesPerGroup={1}
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
          breakpoints={{
            320: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            768: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
            1024: {
              slidesPerView: 6,
              slidesPerGroup: 6,
            },
          }}
          // onSwiper={(swiper) => {}}}
          // onSlideChange={() => {}}
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <Img
                src={`${requests.fetchImg}/w300${movie.backdrop_path}`}
                alt="thumbnail"
                onClick={() => {
                  setMovie(movie);
                  openModal();
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

      <Modal opened={opened} onClose={closeModal}>
        <ModalImg
          src={`${requests.fetchImg}/w500${movie.backdrop_path}`}
          alt="poster"
        />
        <ModalContent>
          <span>{movie.release_data}</span>
          <span className="title">{movie.title}</span>
          <span>평점: {movie.vote_average}</span>
          <span className="detail">{movie.overview}</span>
        </ModalContent>
      </Modal>
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
  width: 100%;
  transition: transform 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

const ModalImg = styled.img`
  width: 100%;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 20px;
  color: white;
  & > span:nth-child(1)::before {
    content: '100% for you';
  }
  & > .title {
    font-size: 1.5rem;
  }
  & > .detail {
    font-size: 0.8rem;
    line-height: 1.3;
    /* TODO: multiline ellipsis when overflow */
  }
`;
export default Section;
