import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const TextInput = ({
  type,
  label,
  placeholder,
  className,
  value,
  setValue,
}) => {
  const [isOpenEye, setIsOpenEye] = useState('mdi:eye-outline');
  const [passwordToText, setPasswordToText] = useState(type);

  const toggleEye = () => {
    if (isOpenEye === 'mdi:eye-outline') {
      setIsOpenEye('mdi:eye-off-outline');
      setPasswordToText('text');
    } else {
      setIsOpenEye('mdi:eye-outline');
      setPasswordToText('password');
    }
  };
  return (
    <div
      className={`textInputDiv relative flex flex-col space-y-2 ${className} `}
    >
      <label className="">{label}</label>
      <input
        type={passwordToText}
        placeholder={placeholder}
        className="p-2 border text-black border-solid border-gray-400 rounded-lg placeholder:gray-500"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {type === 'password' && (
        <Icon
          icon={isOpenEye}
          width="24"
          height="24"
          className="absolute top-8 right-4 "
          onClick={toggleEye}
        />
      )}
    </div>
  );
};

export default TextInput;
