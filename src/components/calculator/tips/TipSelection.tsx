import styled from 'styled-components';
import TipPercentageButton from './TipPercentageButton';

const StyledTipSelection = styled.div`
  .tip-label {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.greyCyan};
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .tip-selection {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
  }
`;

const tips = [5, 10, 15, 20, 25];

function TipSelection() {
  return (
    <StyledTipSelection>
      <p className="tip-label">Select Tip %</p>
      <div className="tip-selection">
        {tips.map((val) => (
          <TipPercentageButton value={val} key={val} />
        ))}
      </div>
    </StyledTipSelection>
  );
}

export default TipSelection;
