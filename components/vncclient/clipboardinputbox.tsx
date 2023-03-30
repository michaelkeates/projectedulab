import React from "react";

type ClipboardInputBoxProps = {
    onInputChange?: (text: string) => void;
  };
  
  const ClipboardInputBox: React.FC<ClipboardInputBoxProps> = ({ onInputChange }) => {
    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
      const clipboardText = e.clipboardData.getData("text");
      onInputChange?.(clipboardText);
    };
  
  return <input type="text" onPaste={handlePaste} />;
};

export default ClipboardInputBox;
