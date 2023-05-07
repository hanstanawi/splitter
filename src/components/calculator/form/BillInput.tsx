import cx from 'classnames';
import { ChangeEvent } from 'react';

import Input from 'components/ui/Input';
import { useBillValue, useContextDispatch } from 'hooks/calculator.hooks';
import { validateIsValidNumber } from 'helpers/string.helpers';

function BillInput() {
  const billValue = useBillValue();
  const dispatch = useContextDispatch();
  const billValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const inputText = e.target.value;
    const isValidNumber = validateIsValidNumber(inputText);

    if (isValidNumber) {
      console.log(inputText);
      dispatch({
        type: 'SET_BILL_VALUE',
        payload: parseFloat(inputText),
      });
    }
  };

  return (
    <div className="bill-input">
      <label htmlFor="bill">Bill</label>
      <Input
        type="text"
        name="bill"
        value={billValue}
        placeholder="0"
        className={cx(!billValue && 'default-value')}
        onChange={billValueChangeHandler}
      />
    </div>
  );
}

export default BillInput;
