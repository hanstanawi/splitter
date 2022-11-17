import cx from 'classnames';
import { ChangeEvent, useState } from 'react';

import Input from 'components/ui/Input';
import { validateIsValidNumber } from 'helpers/string.helpers';
import { useContextDispatch, usePeopleQuantity } from 'hooks/calculator.hooks';

function PeopleQuantityInput() {
  const [error, setError] = useState<string | null>(null);
  const dispatch = useContextDispatch();
  const peopleQuantity = usePeopleQuantity();

  const peopleQuantityChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const inputText = e.target.value;
    const isValidNumber = validateIsValidNumber(inputText);
    if (isValidNumber) {
      const numberInput = Number(e.target.value);
      if (numberInput > 0) {
        dispatch({
          type: 'SET_PEOPLE_QUANTITY',
          payload: numberInput,
        });
        setError(null);
      } else {
        dispatch({
          type: 'SET_PEOPLE_QUANTITY',
          payload: numberInput,
        });
        setError(`Can't be zero`);
      }
    }
  };

  return (
    <div className="bill-input">
      <label htmlFor="bill">Number of People</label>
      {error && <p>{error}</p>}
      <Input
        type="text"
        name="people"
        onChange={peopleQuantityChangeHandler}
        className={cx(!peopleQuantity && 'default-value')}
        value={peopleQuantity}
      />
    </div>
  );
}

export default PeopleQuantityInput;
