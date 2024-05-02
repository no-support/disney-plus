import { useNavigate, useSearchParams } from 'react-router-dom';
import BasicLayout from '../layouts/BasicLayout';
import { useEffect, useState } from 'react';
import instance from '../api/movieAxios';
import requests from '../api/request';
import styled from 'styled-components';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const q = searchParams.get('q');
  const navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await instance.get(
          `${requests.fetchSearch}&query=${q}`
        );
        setData(data);
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
    }
    fetchData();
  }, [q]);

  return (
    <BasicLayout>
      <Container>
        {data?.results?.length > 0 ? (
          data.results.map(
            (item, _) =>
              item.backdrop_path && (
                <Img
                  key={item.id}
                  src={`${requests.fetchImg}/w300/${item.backdrop_path}`}
                  alt="포스터"
                  onClick={() => {
                    navigate(`/${item.id}`);
                  }}
                />
              )
          )
        ) : (
          <span>찾고자 하는 검색어 '{q}'에 맞는 영화가 없습니다.</span>
        )}
      </Container>
    </BasicLayout>
  );
};
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;
const Img = styled.img`
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
export default SearchPage;
