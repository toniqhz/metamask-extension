import React, { useContext } from 'react';
import { SelectContext } from './select-wrapper';

type SelectOptionProps = {
  value: string;
};

export const SelectOption: React.FC<SelectOptionProps> = ({
  value,
  children,
}) => {
  const selectContext = useContext(SelectContext);

  if (!selectContext) {
    throw new Error('SelectOption must be used within a SelectWrapper.');
  }

  const { setSelectedValue } = selectContext;

  const handleClick = () => {
    setSelectedValue(value);
  };

  return <div onClick={handleClick}>{children}</div>;
};
