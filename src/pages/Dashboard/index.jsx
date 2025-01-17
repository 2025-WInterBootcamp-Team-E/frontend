import React from 'react';
import styled from 'styled-components';
import Layout from '@/components/Layout';
import { pretendard_bold } from '@/GlobalStyle';

const DashboardPage = () => {
  return (
    <Layout>
      <PageContainer>
        <CardGrid> {/* CardGrid로 수정 */}
          <Card>
            <ProfileImage src="/UserImage.png" alt="Profile" />
            Nickname
            <p>Nick@gmail.com</p>
          </Card>
          <FeedbackCard>
            <CardTitle>My Feedbacks</CardTitle>
            <ContentBox bgColor="#f28b82" /> {/* 색깔 박스 */}
          </FeedbackCard>
          <HistoryCard>
            <CardTitle>My History</CardTitle>
            <ContentBox bgColor="#d3d3d3" /> {/* 색깔 박스 */}
          </HistoryCard>
        </CardGrid>
      </PageContainer>
    </Layout>
  );
};

export default DashboardPage;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(100vh - 5rem); /* 상단 여백 계산 */
  padding: 1rem;
  margin: 0;
  ${pretendard_bold} /* 글로벌 스타일 존재 확인 */
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr; /* 첫 번째 열은 1배 크기, 두 번째 열은 2배 크기 */
  grid-template-rows: repeat(2, 1fr); /* 2개의 행, 높이는 자동 */
  grid-template-areas: 
    "card1 card2"
    "card3 card3"; /* 아래 열을 병합 */
  width: 100%; /* 화면 너비 꽉 채우기 */
  height: 100%; /* 화면 높이 꽉 채우기 */
  gap: 2rem; /* 카드 간 간격 */
`;

const Card = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 1rem; /* 모서리 둥글게 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 카드 그림자 */
  background-color: #f8f9fa; /* 배경색 */
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  
  /* 특정 카드의 영역을 지정 */
  &:nth-child(1) {
    grid-area: card1;
  }
`;

const FeedbackCard = styled(Card)`
  grid-area: card2;
  align-items: flex-start; /* 텍스트 왼쪽 정렬 */
`;

const HistoryCard = styled(Card)`
  grid-area: card3;
  align-items: flex-start;
`;

const CardTitle = styled.h2`
  margin: 0 0 1rem 0; /* 아래 여백 추가 */
  font-size: 1.5rem;
  font-weight: bold;
  text-align: left; /* 왼쪽 정렬 */
`;

const ContentBox = styled.div`
  width: 100%;
  height: calc(100% - 4rem);
  background-color: ${(props) => props.bgColor || "#ffffff"};
  border-radius: 0.5rem;
`;

const ProfileImage = styled.img`
  width: 200px; /* 프로필 사진의 크기 */
  height: 200px;
  border-radius: 50%; /* 동그라미 모양 */
  object-fit: cover; /* 이미지를 박스에 맞게 조정 */
  margin-bottom: 1rem; /* 닉네임과의 간격 */
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3.0rem; /* 텍스트 크기 */
  font-weight: bold;
  text-align: center;
  border-radius: 1rem; /* 오버레이 둥글게 */
`;

const CategoryName = styled.div`
  z-index: 1;
`;