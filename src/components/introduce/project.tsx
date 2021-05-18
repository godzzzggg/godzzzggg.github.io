import theme from '@/themes/styled';
import Stack from '@/components/tech_stack';

type ProjectProps = {
  title: string;
  date: string;
  stack: string[];
  achieve?: string[];
  message?: string;
};

const Project = (props: ProjectProps) => {
  const { styled } = theme;
  const Container = styled.li`
    position: relative;
    margin-top: 10px;
    &:before {
      content: '•';
      position: absolute;
      left: -15px;
    }
  `;
  const TitleArea = styled.div`
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
  `;
  const Title = styled.span`
    margin-right: 10px;
  `;
  const Date = styled.span`
    font-size: 14px;
    opacity: 0.7;
  `;
  const Achieve = styled.ul`
    padding-inline-start: 25px;
    list-style-type: none;
  `;
  const AchieveItem = styled.li`
    position: relative;
    &:before {
      content: '·';
      position: absolute;
      left: -15px;
    }
  `;
  const Message = styled.div`
    margin: 5px 0;
  `;
  return (
    <Container>
      <TitleArea>
        <Title>{props.title}</Title>
        <Date>{props.date}</Date>
      </TitleArea>
      {props.message && <Message>{props.message}</Message>}
      <Stack stack={props.stack} />
      {props.achieve && (
        <Achieve>
          {props.achieve.map((item, index) => (
            <AchieveItem key={`achieve-${index}`}>{item}</AchieveItem>
          ))}
        </Achieve>
      )}
    </Container>
  );
};

export default Project;
