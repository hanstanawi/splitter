import styled from 'styled-components';
import CustomTip from './CustomTip';
import TipPercentageButton from './TipPercentageButton';

const StyledTipSelection = styled.div`
  .tip-label {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.darkGreyCyan};
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .tip-selection {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
  }
`;

const tips = [5, 10, 15, 25, 50];

function TipSelection() {
  return (
    <StyledTipSelection>
      <p className="tip-label">Select Tip %</p>
      <div className="tip-selection">
        {tips.map((val) => (
          <TipPercentageButton value={val} key={val} />
        ))}
        <CustomTip />
      </div>
    </StyledTipSelection>
  );
}

export default TipSelection;
