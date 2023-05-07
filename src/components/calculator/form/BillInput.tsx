import cx from 'classnames';
import { ChangeEvent } from 'react';
import { useAtom } from 'jotai';

import Input from 'components/ui/Input';
import { billAtom } from 'store';
import { validateIsValidNumber } from 'helpers/string.helpers';

function BillInput() {
  const [billValue, setBillValue] = useAtom(billAtom);

  const billValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const inputText = e.target.value;
    const isValidNumber = validateIsValidNumber(inputText);

    if (isValidNumber) {
      setBillValue(parseFloat(inputText));
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
