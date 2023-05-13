import React from 'react';
import { Icon } from '@iconify/react';

const TextInput = ({
  type,
  label,
  placeholder,
  className,
  value,
  setValue,
}) => {
  //const [isOpenEye, setIsOpenEye] = useState('mdi:eye-outline');
  const toggleEye = (e) => {
    console.dir(e.target.parentElement.childNodes[1]);
    // e.target.parentElement.childNodes[1].type.toggle('text');
    // console.log(e.target.parentElement.childNodes[2]);
  };
  return (
    <div
      className={`textInputDiv relative flex flex-col space-y-2 ${className} `}
    >
      <label className="">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="p-2 border text-black border-solid border-gray-400 rounded-lg placeholder:gray-500"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {label === 'password' && (
        <Icon
          icon="mdi:eye-off-outline"
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
