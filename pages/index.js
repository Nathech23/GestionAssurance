import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const [userType, setUserType] = useState('')
  const router = useRouter()

  const handleLogin = () => {
    if (userType) {
      router.push(`/${userType}`)
    }
  }

  return (
    <div className="container">
      <div className="card" style={{ maxWidth: '400px', margin: '100px auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
          Système de Gestion - Sécurité Sociale
        </h1>
        
        <div className="form-group">
          <label>Sélectionnez votre rôle :</label>
          <select 
            value={userType} 
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="">-- Choisir un rôle --</option>
            <option value="assureur">Agent Sécurité Sociale</option>
            <option value="medecin">Médecin</option>
            <option value="assure">Assuré</option>
          </select>
        </div>

        <button 
          className="btn" 
          onClick={handleLogin}
          style={{ width: '100%' }}
          disabled={!userType}
        >
          Se connecter
        </button>
      </div>
    </div>
  )
}