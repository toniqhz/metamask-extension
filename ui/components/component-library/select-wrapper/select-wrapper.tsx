import React, { useState, ReactNode } from 'react';

type SelectWrapperProps = {
  triggerComponent: ReactNode;
};

type SelectContextType = {
  isOpen: boolean;
  toggleOpen: () => void;
  selectedValue: string | null;
  setSelectedValue: React.Dispatch<React.SetStateAction<string | null>>;
};

export const SelectContext = React.createContext<SelectContextType | undefined>(
  undefined,
);

export const SelectWrapper: React.FC<SelectWrapperProps> = ({
  triggerComponent,
  children,
}) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SelectContext.Provider
      value={{ isOpen, toggleOpen, selectedValue, setSelectedValue }}
    >
      {triggerComponent}
      {children}
      {isOpen && <div>Open!</div>}
    </SelectContext.Provider>
  );
};
