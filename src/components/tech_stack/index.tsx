import theme from '@/themes/styled';

type StackProps = {
  stack: string[];
};

const Stack = ({ stack }: StackProps) => {
  const { styled } = theme;
  const Stacks = styled.div`
    margin-top: 5px;
    display: flex;
    flex-wrap: wrap;
  `;
  const StackItem = styled.div`
    margin-bottom: 5px;
    margin-right: 5px;
    border-radius: 3px;
    padding: 0 5px;
    background-color: ${({ theme }) => theme.colors.fontColor}40;
    font-size: 13px;
  `;
  return (
    <Stacks>
      {stack.map((s, index) => (
        <StackItem key={`stack_item-${index}`}>{s}</StackItem>
      ))}
    </Stacks>
  );
};

export default Stack;
