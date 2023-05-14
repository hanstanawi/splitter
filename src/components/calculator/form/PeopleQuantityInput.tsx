import cx from 'classnames';
import { ChangeEvent, useState } from 'react';
import { useAtom } from 'jotai';

import Input from 'components/ui/Input';
import { peopleQtyAtom } from 'store';
import { validateIsValidNumber } from 'helpers/string.helpers';

function PeopleQuantityInput() {
  const [error, setError] = useState<string | null>(null);
  const [peopleQty, setPeopleQty] = useAtom(peopleQtyAtom);

  const peopleQuantityChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const inputText = e.target.value;
    const isValidNumber = validateIsValidNumber(inputText);
    if (isValidNumber) {
      const numberInput = Number(e.target.value);
      if (numberInput > 0) {
        setPeopleQty(numberInput);
        setError(null);
      } else {
        setPeopleQty(numberInput);
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
        className={cx(!peopleQty && 'default-value')}
        value={peopleQty}
      />
    </div>
  );
}

export default PeopleQuantityInput;
