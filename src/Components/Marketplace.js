

import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import DiamSdk from 'diamante-sdk-js';

function Marketplace() {
  
  
  const [publicKey, setPublicKey] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if a keypair exists in localStorage
    const storedKeyPair = localStorage.getItem('diamKeyPair');
    if (storedKeyPair) {
      setPublicKey(JSON.parse(storedKeyPair).publicKey);
    }
  }, []);

  const createAccount = async () => {
    setLoading(true);
    setError('');

    try {
      // Generate a new keypair
      const pair = DiamSdk.Keypair.random();
      localStorage.setItem('diamKeyPair', JSON.stringify(pair));

      // Request testnet tokens from Friendbot
      const response = await fetch(
        `https://friendbot.diamcircle.io?addr=${encodeURIComponent(pair.publicKey())}`
      );
      await response.json();

      setPublicKey(pair.publicKey());
    } catch (e) {
      setError('Error creating account or funding with testnet tokens.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
            <nav className="flex justify-between">
                <ul className="flex space-x-4">
                    <li>
                        <button className="nav-button hover:glow bg-blue-500 text-white font-bold py-2 px-4 rounded">Home</button>
                    </li>
                    <li>
                        <Link to="/event">
                        <button className="nav-button hover:glow bg-blue-500 text-white font-bold py-2 px-4 rounded">Events</button></Link>
                    </li>
                    <li>
                        <button className="nav-button hover:glow bg-blue-500 text-white font-bold py-2 px-4 rounded">Marketplace</button>
                    </li>
                    <li>
                        <button className="nav-button hover:glow bg-blue-500 text-white font-bold py-2 px-4 rounded">Discussions</button>
                    </li>
                </ul>
                <div className="logout-box">
                    <button className="logout-button hover:glow bg-red-500 text-white font-bold py-2 px-4 rounded">Logout</button>
                </div>
            </nav>
    <div>
      <h1 className="text-center font-bold py-5">Welcome to the Diamante Marketplace</h1>

      {publicKey ? (
        <div>
          <h2>Your Diamante Account:</h2>
          <p>{publicKey}</p>
        </div>
      ) : (
        <button onClick={createAccount} disabled={loading}>
          {loading ? 'Creating Account...' : 'Create Diamante Account'}
        </button>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div></div>
  );
}

export default Marketplace;

