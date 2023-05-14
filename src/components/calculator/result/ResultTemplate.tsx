import styled from 'styled-components';

const StyledResultTemplate = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .label {
    p.title {
      font-weight: 600;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.white};
      margin-bottom: 0.25rem;
    }

    p.unit {
      font-size: 0.75rem;
      color: ${({ theme }) => theme.colors.greyCyan};
    }
  }

  .value {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 2.5rem;
    font-weight: 700;
  }
`;

type ResultTemplateProps = {
  value: number;
  label: string;
  unit: string;
};

function ResultTemplate({ value, label, unit }: ResultTemplateProps) {
  return (
    <StyledResultTemplate>
      <div className="label">
        <p className="title">{label}</p>
        <p className="unit">/ {unit}</p>
      </div>
      <div className="value">{`$${value.toFixed(2)}`}</div>
    </StyledResultTemplate>
  );
}

export default ResultTemplate;
