import BasicLayout from '../layouts/BasicLayout';
import requests from '../api/request';
import Section from '../components/main/Section';

const MainPage = () => {
  return (
    <BasicLayout>
      <Section title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Section title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Section title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Section title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
    </BasicLayout>
  );
};

export default MainPage;
