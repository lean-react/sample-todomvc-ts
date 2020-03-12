import React, {useEffect, useRef} from 'react';

const TodosInput: React.FunctionComponent<{create: (title: string) => void}> = ({create}) => {

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, []);

  const handleKeyEnter = (ev: React.KeyboardEvent) => {
    const title = inputRef.current?.value.trim();
    if (title && ev.key === 'Enter') {
      create(title);
      inputRef.current && (inputRef.current.value = '');
    }
  };

  return (
    <input ref={inputRef} onKeyUp={handleKeyEnter} className="new-todo" placeholder="What needs to be done?" />
  );
};

export default React.memo(TodosInput);
