import React from "react";

interface PasswordStrengthProps {
  password: string;
}

const PasswordStrength: React.FC<PasswordStrengthProps> = ({ password }) => {
  const getStrength = () => {
    if (password.length >= 12) return { level: "Strong", color: "green", width: "100%" };
    if (password.length >= 6) return { level: "Medium", color: "orange", width: "66%" };
    return { level: "Weak", color: "red", width: "33%" };
  };

  const { level, color, width } = getStrength();

  return (
    <div style={{ margin: "10px 0" }}>
      <p style={{ fontSize: "14px", marginBottom: "5px" }}>Password Strength: {level}</p>
      <div style={{ width: "100%", backgroundColor: "#eee", height: "8px", borderRadius: "4px" }}>
        <div
          style={{
            width,
            backgroundColor: color,
            height: "100%",
            borderRadius: "4px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default PasswordStrength;

