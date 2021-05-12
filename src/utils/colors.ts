// 보색
const complementaryColor = (hex_code: string) => {
  const hex_to_int = parseInt(hex_code.replace('#', ''), 16);
  const r = (hex_to_int >> 16) & 0xFF;
  const g = (hex_to_int >> 8) & 0xFF;
  const b = hex_to_int & 0xFF;

  const getColor = (n: number) => {
    return (255 - n).toString(16).padStart(2, '0');
  };

  return `#${getColor(r)}${getColor(g)}${getColor(b)}`;
};

export {
  complementaryColor,
};