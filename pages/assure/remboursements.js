import Navigation from '../../components/Navigation'
//import { formatMontant } from '../../utils/currency'

export default function RemboursementsAssure() {
  const remboursements = [
    {
      id: 1,
      date: '2025-01-15',
      medecin: 'Dr. Nziéleu Nathan (Généraliste)',
      montant: 15000,
      remboursement: 15000,
      taux: '100%',
      statut: 'Remboursé',
      modePaiement: 'Virement'
    },
    {
      id: 2,
      date: '2025-01-05',
      medecin: 'Dr. François Charles (Cardiologue)',
      montant: 40000,
      remboursement: 32000,
      taux: '80%',
      statut: 'En cours',
      modePaiement: '-'
    },
    {
      id: 3,
      date: '2025-03-05',
      medecin: 'Dr. Tchapda (dentiste)',
      montant: 40000,
      remboursement: 32000,
      taux: '80%',
      statut: 'En cours',
      modePaiement: '-'
    }
  ]

  return (
    <div>
      <Navigation userType="assure" />
      <div className="container">
        <h1>Mes Remboursements</h1>

        <div className="card">
          <h3>Suivi des Remboursements</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Médecin</th>
                <th>Montant</th>
                <th>Taux</th>
                <th>Remboursement</th>
                <th>Statut</th>
                <th>Mode Paiement</th>
              </tr>
            </thead>
            <tbody>
              {remboursements.map(remb => (
                <tr key={remb.id}>
                  <td>{remb.date}</td>
                  <td>{remb.medecin}</td>
                  <td>{remb.montant} FCFA</td>
                  <td>{remb.taux}</td>
                  <td>{remb.remboursement} FCFA</td>
                  <td>
                    <span style={{
                      color: remb.statut === 'Remboursé' ? 'green' : 'orange',
                      fontWeight: 'bold'
                    }}>
                      {remb.statut}
                    </span>
                  </td>
                  <td>{remb.modePaiement}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card">
          <h3>Résumé</h3>
          <div className="grid">
            <div>
              <p><strong>Total remboursé en 2025 :</strong> 15000 FCFA</p>
              <p><strong>En attente :</strong> 64000 FCFA</p>
            </div>
            <div>
              <p><strong>Mode de paiement préféré :</strong> Virement bancaire</p>
              <button className="btn btn-secondary">Modifier</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}