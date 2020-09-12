import styled from 'styled-components';
import { Progress, Row } from 'antd';
export const BorderStyled = styled.div`
  padding: 15px;
  border: 1px solid #d2d2d2;
  border-radius: 2px;
  background-color: #f2f2f2;
`;

export const ImageStyled = styled.img`
  height: 280px;
  width: 200px;
`;

export const ProgressStyled = styled(Progress)`
  .ant-progress-bg {
    height: 20px !important;
  }

  .ant-progress-success-bg,
  .ant-progress-bg {
    background-color: #f06218;
  }
  .ant-progress-inner {
    background-color: #d2d2d2;
  }
`;

export const RowDetail = styled(Row)`
  margin-top: 20px;
`;

export const HappinessImage = styled.img`
  height: 45px;
  width: 45px;
`;
