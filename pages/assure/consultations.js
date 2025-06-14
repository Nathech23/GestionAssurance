import Navigation from '../../components/Navigation'

export default function ConsultationsAssure() {
  const consultations = [
    {
      id: 1,
      date: '2025-01-15',
      medecin: 'Dr. Nziéleu Nathan (Généraliste)',
      motif: 'Consultation de routine',
      diagnostic: 'RAS - Bon état général',
      prescription: 'Aucune'
    },
    {
      id: 2,
      date: '2024-09-05',
      medecin: 'Dr. François Charles (Cardiologue)',
      motif: 'Douleurs thoraciques',
      diagnostic: 'Stress - RAS cardiaque',
      prescription: 'Repos, exercices de relaxation'
    },
    {
      id: 3,
      date: '2024-05-20',
      medecin: 'Dr. Tchapda (Dentiste)',
      motif: 'Douleurs dentaires',
      diagnostic: 'Carie dentaire',
      prescription: 'Traitement de la carie'
    }
  ]

  return (
    <div>
      <Navigation userType="assure" />
      <div className="container">
        <h1>Mes Consultations</h1>

        <div className="card">
          <h3>Historique des Consultations</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Médecin</th>
                <th>Motif</th>
                <th>Diagnostic</th>
                <th>Prescription</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {consultations.map(consultation => (
                <tr key={consultation.id}>
                  <td>{consultation.date}</td>
                  <td>{consultation.medecin}</td>
                  <td>{consultation.motif}</td>
                  <td>{consultation.diagnostic}</td>
                  <td>{consultation.prescription}</td>
                  <td>
                    <button className="btn btn-secondary">Détails</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card">
          <h3>Prochaines Consultations</h3>
          <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
            Aucune consultation programmée
          </div>
        </div>
      </div>
    </div>
  )
}