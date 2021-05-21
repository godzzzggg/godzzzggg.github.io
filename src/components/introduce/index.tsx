import { Fragment, ReactNode } from 'react';
import styled from '@emotion/styled';
import Project from './project';
import Stack from '@/components/tech_stack';

type ItemProps = {
  title: string;
  message?: string;
  contents?: {
    title: string;
    date?: string;
    message?: string;
    link?: string;
    stack?: string[];
    projects?: {
      title: string;
      date: string;
      stack: string[];
      achieve?: string[];
      message?: string;
    }[];
  }[];
  children: ReactNode;
};

const Item = ({ title, contents, children }: ItemProps) => {
  const Container = styled.div`
    margin-bottom: 50px;
  `;
  const Title = styled.div`
    margin-bottom: 20px;
    border-bottom: 1px solid ${(props) => props.theme.colors.fontColor};
    padding-bottom: 10px;
    font-size: 25px;
  `;
  const Link = styled.a`
    border-radius: 3px;
    padding: 0 3px;
    background-color: ${({ theme }) => theme.colors.fontColor}22;
    color: ${({ theme }) => theme.colors.fontColor};
    word-break: break-all;
  `;
  const Contents = styled.div``;
  const ContentsTitle = styled.div`
    font-size: 20px;
    &:not(:first-of-type) {
      padding-top: 20px;
    }
  `;
  const ContentsMessage = styled.div``;
  const Date = styled.span`
    margin-left: 14px;
    font-size: 14px;
    opacity: 0.7;
  `;
  const ProjectContainer = styled.ul`
    margin: 10px 0;
    list-style-type: none;
  `;
  return (
    <Container>
      <Title>{title}</Title>
      <Contents>
        {contents?.length &&
          contents.map((c, index) => (
            <Fragment key={`Contents-${index}`}>
              <ContentsTitle>
                {c.title}
                {c.date && <Date>{c.date}</Date>}
              </ContentsTitle>
              {c.message && <ContentsMessage>{c.message}</ContentsMessage>}

              {c.link && (
                <Link href={c.link} target="_blank" rel="noreferrer">
                  {c.link}
                </Link>
              )}

              {c.stack && <Stack stack={c.stack} />}

              {c.projects && (
                <ProjectContainer>
                  {c.projects.map((p, index) => (
                    <Project
                      key={`Project-${index}`}
                      title={p.title}
                      date={p.date}
                      stack={p.stack}
                      achieve={p.achieve}
                      message={p.message}
                    />
                  ))}
                </ProjectContainer>
              )}
            </Fragment>
          ))}
        {children}
      </Contents>
    </Container>
  );
};

export default Item;
