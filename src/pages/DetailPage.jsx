import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import requests from '../api/request';
import instance from '../api/movieAxios';
import BasicLayout from '../layouts/BasicLayout';
import styled from 'styled-components';

const DetailPage = () => {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const { data } = await instance.get(
          `${requests.fetchDetail}/${id}?language=ko-KR`
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
    };
    fetchDetail();
  }, [id]);

  return (
    <BasicLayout>
      <Wrapper>
        <Img
          src={data && `${requests.fetchImg}/original${data?.backdrop_path}`}
          alt={data?.title}
        />
      </Wrapper>
    </BasicLayout>
  );
};

const Wrapper = styled.div``;

const Img = styled.img`
  width: 100%;
`;

export default DetailPage;
