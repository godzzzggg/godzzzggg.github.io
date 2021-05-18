import React from 'react';
import { useHistory } from 'react-router-dom';
import theme from '@/themes/styled';
import Item from '@/components/introduce';
import CommonStyle from '@/style';
import { TechStack } from '@/constant/techStack';
import Button, { BackButton } from '@/components/button';
import { getAge } from '@/utils/date';

const Introduce: React.FC = () => {
  const { styled } = theme;
  const Container = styled.div`
    padding-top: ${CommonStyle.headerHeight};
    max-width: 768px;
    width: 100%;
    height: calc(100% - ${CommonStyle.headerHeight});
    @media (max-width: 768px) {
      max-width: 420px;
    }
  `;
  const ItemList = styled.div`
    padding: 16px 16px 50px 16px;
  `;

  const age = getAge('1992-12-06');

  const infos = [
    {
      title: '소개',
      message: `약 1년 6개월 경력의 프론트엔드 지향 개발자입니다.
        이전 회사에서 Vue2 를 1년 4개월 정도 사용했으며 React(Next.js)로 1개월간 파트너 어드민을 제작했고,
        퇴사 후 React, Typescript, emotion(v11) 를 공부하여 portfolio-page를 만들었습니다.
      `,
    },
    {
      title: '업무 경험',
      contents: [
        {
          title: '펫프렌즈',
          date: '2019.11.25 ~ 2021.03.12 (약 1년 4개월)',
          message: `퇴사 사유 : 개발 기간을 고려하지 않은 프로젝트 일정`,
          link: 'https://m.pet-friends.co.kr',
          projects: [
            {
              title: '파트너 어드민',
              date: '2020.10 ~ 2020.11',
              stack: [TechStack.Next, TechStack.SassSCSS],
              achieve: [
                '기존 Nuxt.js로 개발되어있던 파트너 어드민을 정리하려고 새로 제작한 파트너 어드민으로 규모가 크지 않아 상태 관리 라이브러리나 Context API를 사용하지 않음',
                '대시보드, 상품, 정산, 공지사항 4개의 탭으로 구성되어있고 정산을 제외한 3개의 탭을 개발',
                'mouse over시 해당 element 주위에서 나타나는 tooltip 컴포넌트 제작',
              ],
              message:
                '공통 컴포넌트를 만들던 중 약 1개월간의 짧은 개발 일정으로 인해 컴포넌트 개발이 중단되고 각자 개발하게 되어 일관성 없는 코드와 디자인이 된 안타까운 프로젝트였습니다.',
            },
            {
              title: '펫프렌즈 어드민 유지&보수 (main)',
              date: '2019.11 ~ 2021.03',
              stack: [TechStack.Vue, TechStack.SassSCSS],
              achieve: [
                '상품 파트에 소속되어 상품 관련 페이지 유지, 보수 및 추가',
                '업로드 된 excel 파일을 jexcel을 사용해 올바르지 않은 데이터를 시각적으로 보여주고 쉽게 편집할 수 있게 함',
                `import _ from 'lodash '; 로 되어있는 구문들을 destructuring해 해당 번들 사이즈 약 40%감소`,
                'summernote 기반 공통 Editor 컴포넌트 제작',
              ],
            },
            {
              title: '펫프렌즈 쇼핑몰 유지&보수 (sub)',
              date: '2019.12 ~ 2021.02',
              stack: [TechStack.Vue, TechStack.SassSCSS],
              achieve: [
                '2021.02 회원 등급 및 적립금 도입으로 My페이지 개편',
                '2020.05 후기 개편으로 사진/동영상 업로드 추가',
                '2020.01 반려동물 등록 추가',
                '무한 스크롤 공통 컴포넌트 추가',
              ],
            },
          ],
        },
        {
          title: '지오멕스소프트',
          date: '2017.01.01 ~ 2017.02.28 (2개월)',
          message: `교수님 추천으로 SI 기업의 인턴을 짧게 경험했습니다.`,
          projects: [
            {
              title: 'openlayers를 사용한 지도 서비스',
              date: '2017.01 ~ 2017.02',
              stack: [
                TechStack.Spring,
                TechStack.jQuery,
                TechStack.JSP,
                TechStack.MyBatis,
                TechStack.PostgreSQL,
                TechStack.OpenLayers,
              ],
              message: `전자정부 프레임워크를 사용해 지도 위에 레이어를 올려 도로, 물, 건물, 검색된 주소 등을 한 눈에 볼 수 있음`,
            },
          ],
        },
      ],
    },
    {
      title: '개인 프로젝트',
      contents: [
        {
          title: '포트폴리오 사이트',
          date: '2021.05 ~',
          message: `React 연습 겸 포트폴리오 사이트를 위해 만든 첫 개인 프로젝트입니다.
            React Context API를 사용해 상태 관리를 했습니다.
            emotion에서 제공하는 ThemeProvider를 사용해 여러 Theme로 변경할 수 있는 기능을 추가했습니다.
          `,
          link: 'https://godzzzggg.github.io/portfolio-page/',
          stack: [TechStack.React, TechStack.TypeScript, TechStack.Emotion],
        },
      ],
    },
    {
      title: '인적사항',
      contents: [
        {
          title: '이름',
          date: '정구일',
        },
        {
          title: '나이',
          date: `${age.age_ko}(만 ${age.age})`,
        },
        {
          title: 'MBTI',
          date: 'ISFJ',
        },
        {
          title: '메일',
          date: 'dev9days@gmail.com',
        },
        {
          title: '전화번호',
          date: '010-8748-7139',
          message: '전화보단 문자를 더 선호합니다.',
        },
      ],
    },
  ];
  const history = useHistory();
  const goToProject = () => history.push('/projects');
  return (
    <Container>
      <ItemList>
        {infos.map((item, index) => (
          <Item
            key={`introduce-${index}`}
            title={item.title}
            contents={item.contents}
          >
            {item.message}
          </Item>
        ))}
        <div style={{ display: 'flex' }}>
          <BackButton />
          <Button
            onClick={goToProject}
            style={{
              marginLeft: '10px',
              flexGrow: 1,
              height: '50px',
              fontSize: '18px',
            }}
          >
            프로젝트 보러가기
          </Button>
        </div>
      </ItemList>
    </Container>
  );
};

export default Introduce;
