import { useState } from 'react'
import Navigation from '../../components/Navigation'

export default function Remboursements() {
  const [feuilles, setFeuilles] = useState([
    { 
      id: 1, 
      patient: 'Essono Flora', 
      medecin: 'Dr. Nziéleu (Généraliste)',
      date: '2025-01-15', 
      montant: 15000,
      statut: 'En attente',
      typeConsultation: 'Généraliste'
    },
    { 
      id: 2, 
      patient: 'Tapamo Stella', 
      medecin: 'Dr. François Charles (Cardiologue)',
      date: '2025-04-10', 
      montant: 40000,
      statut: 'En attente',
      typeConsultation: 'Spécialiste'
    }
  ])

  const calculerRemboursement = (feuille) => {
    const taux = feuille.typeConsultation === 'Généraliste' ? 1.0 : 0.8
    return feuille.montant * taux
  }

  const effectuerRemboursement = (id, modePaiement) => {
    setFeuilles(feuilles.map(f => 
      f.id === id 
        ? { ...f, statut: 'Remboursé', modePaiement } 
        : f
    ))
  }

  return (
    <div>
      <Navigation userType="assureur" />
      <div className="container">
        <h1>Gestion des Remboursements</h1>

        <div className="card">
          <h3>Feuilles en Attente de Remboursement</h3>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Patient</th>
                <th>Médecin</th>
                <th>Date</th>
                <th>Montant</th>
                <th>Type</th>
                <th>Remboursement</th>
                <th>Statut</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {feuilles.map(feuille => (
                <tr key={feuille.id}>
                  <td>{feuille.id}</td>
                  <td>{feuille.patient}</td>
                  <td>{feuille.medecin}</td>
                  <td>{feuille.date}</td>
                  <td>{feuille.montant} FCFA</td>
                  <td>{feuille.typeConsultation}</td>
                  <td>
                    {calculerRemboursement(feuille)} FCFA 
                    ({feuille.typeConsultation === 'Généraliste' ? '100%' : '80%'})
                  </td>
                  <td>
                    <span style={{
                      color: feuille.statut === 'Remboursé' ? 'green' : 'orange'
                    }}>
                      {feuille.statut}
                    </span>
                  </td>
                  <td>
                    {feuille.statut === 'En attente' && (
                      <div>
                        <button 
                          className="btn btn-success"
                          onClick={() => effectuerRemboursement(feuille.id, 'Virement')}
                          style={{ fontSize: '12px', padding: '5px 10px' }}
                        >
                          Virement
                        </button>
                        <button 
                          className="btn"
                          onClick={() => effectuerRemboursement(feuille.id, 'Cash')}
                          style={{ fontSize: '12px', padding: '5px 10px' }}
                        >
                          Cash
                        </button>
                      </div>
                    )}
                    {feuille.statut === 'Remboursé' && (
                      <span style={{ fontSize: '12px' }}>
                        {feuille.modePaiement}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card">
          <h3>Règles de Remboursement</h3>
          <p><strong>Généralistes :</strong> 100% du montant de la consultation</p>
          <p><strong>Spécialistes :</strong> 80% du montant de la consultation</p>
          <p><strong>Modes de paiement :</strong> Virement bancaire ou Cash</p>
        </div>
      </div>
    </div>
  )
}
