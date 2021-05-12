import React from "react";
import theme from "@/themes/styled";

type ToggleProps = {
  is_enabled: boolean
  left_text?: string
  right_text?: string
  onClick?: React.MouseEventHandler
}

const Toggle = (props: ToggleProps) => {
  const { styled } = theme;
  const ToggleBody = styled.div`
    position: relative;
    width: 30px;
    height: 14px;
    border-radius: 16px;
    background-color: #70b4ef;
    box-shadow: inset 0 0 4px #666;
    cursor: pointer;
  `;
  const Handle = styled.div`
    position: absolute;
    top: 0;
    ${props.is_enabled ? 'left: -1px;' : 'right: -1px;'}
    border-radius: 50%;
    width: 14px;
    height: 14px;
    background-color: #fff;
    box-shadow: 0px 0px 3px #888;
  `;
  const LeftText = styled.div`
    margin-right: 10px;
    color: ${props => props.theme.colors?.fontColor}
  `;
  const RightText = styled.div`
    margin-left: 10px;
    color: ${props => props.theme.colors?.fontColor}
  `;
  return (<>
    {props?.left_text ? <LeftText>{props?.left_text}</LeftText> : null}
    <ToggleBody onClick={props?.onClick}>
      <Handle onClick={props?.onClick} />
    </ToggleBody>
    {props?.right_text ? <RightText>{props?.right_text}</RightText> : null}
  </>);
};

export default Toggle;
