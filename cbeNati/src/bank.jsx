import React, { useState } from "react";
import { Link } from "react-router-dom";

function Bank() {
  const [account, setAccount] = useState(""); // For account
  const [transaction, setTransaction] = useState(""); // For transaction

  const handleSaveAccount = () => {
    if (account.trim() === "") {
      alert("Please enter an account number.");
      return;
    }
    alert(`Account saved: ${account}`);
  };

  const handleOpenTransaction = () => {
    if (account.trim() === "" || transaction.trim() === "") {
      alert("Please enter both account and transaction.");
      return;
    }

    const url = `https://apps.cbe.com.et:100/BranchReceipt/${transaction}&${account}`;

    window.location.href = url; // 👈 opens in same tab
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f5f5f5",
    padding: "20px",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "400px",
    boxSizing: "border-box",
  };

  const inputStyle = {
    padding: "8px 12px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px",
    flex: 1,
    minWidth: "0",
  };

  const buttonStyle = {
    padding: "8px 15px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "14px",
    transition: "0.2s",
    marginTop: "10px",
    width: "100%",
  };

  const saveButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#4caf50",
    color: "#fff",
  };

  const openButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#2196f3",
    color: "#fff",
  };

  const rowStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "10px",
    flexWrap: "wrap",
  };

  const labelStyle = {
    fontWeight: "bold",
    minWidth: "80px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ marginBottom: "30px", color: "#333", textAlign: "center" }}>
        Natnael Bank Receipt App
      </h1>
      <div style={cardStyle}>
        {/* Account Section */}
        <div style={{ marginBottom: "20px" }}>
          <div style={rowStyle}>
            <label style={labelStyle}>Account:</label>
            <input
              type="text"
              value={account}
              onChange={(e) => setAccount(e.target.value)}
              placeholder="Enter account number"
              style={inputStyle}
            />
          </div>
          <button
            onClick={handleSaveAccount}
            style={saveButtonStyle}
            onMouseOver={(e) => (e.target.style.opacity = 0.8)}
            onMouseOut={(e) => (e.target.style.opacity = 1)}
          >
            Save Account
          </button>
        </div>

        {/* Transaction Section */}
        <div>
          <div style={rowStyle}>
            <label style={labelStyle}>Transaction:</label>
            <input
              type="text"
              value={transaction}
              onChange={(e) => setTransaction(e.target.value)}
              placeholder="Enter transaction ID"
              style={inputStyle}
            />
          </div>
          <button
            onClick={handleOpenTransaction}
            style={openButtonStyle}
            onMouseOver={(e) => (e.target.style.opacity = 0.8)}
            onMouseOut={(e) => (e.target.style.opacity = 1)}
          >
            Open Transaction
          </button>
          <Link to="/about">About</Link>
        </div>
      </div>
    </div>
  );
}

export default Bank;
