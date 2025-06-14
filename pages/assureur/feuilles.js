import Navigation from '../../components/Navigation'

export default function FeuillesToutes() {
  const feuilles = [
    {
      id: 1,
      patient: 'Essono Flora',
      medecin: 'Dr. Nziéleu Nathan (Généraliste)',
      date: '2025-01-15',
      diagnostic: 'Grippe',
      prescription: 'Paracétamol 1g x3/jour',
      montant: 15000,
      statut: 'Traitée'
    },
    {
      id: 2,
      patient: 'Tapamo Stella',
      medecin: 'Dr. François Charles ()',
      date: '2025-03-10',
      diagnostic: 'Consultation cardiaque',
      prescription: 'Repos, exercices',
      montant: 40000,
      statut: 'En attente'
    },
    {
      id: 3,
      patient: 'Magne Isabella',
      medecin: 'Dr. Nziéleu Nathan (Généraliste)',
      date: '2025-04-12',
      diagnostic: 'Mal de dos',
      prescription: 'Anti-inflammatoires',
      montant: 15000,
      statut: 'En attente'
    }
  ]

  return (
    <div>
      <Navigation userType="assureur" />
      <div className="container">
        <h1>Feuilles de Maladie</h1>

        <div className="card">
          <h3>Toutes les Feuilles de Maladie</h3>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Patient</th>
                <th>Médecin</th>
                <th>Date</th>
                <th>Diagnostic</th>
                <th>Prescription</th>
                <th>Montant</th>
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
                  <td>{feuille.diagnostic}</td>
                  <td>{feuille.prescription}</td>
                  <td>{feuille.montant} FCFA</td>
                  <td>
                    <span style={{
                      color: feuille.statut === 'Traitée' ? 'green' : 'orange'
                    }}>
                      {feuille.statut}
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-secondary">Voir</button>
                    {feuille.statut === 'En attente' && (
                      <button className="btn">Traiter</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card">
          <h3>Statistiques</h3>
          <div className="grid">
            <div>
              <p><strong>Total feuilles :</strong> 3</p>
              <p><strong>En attente :</strong> 2</p>
              <p><strong>Traitées :</strong> 1</p>
            </div>
            <div>
              <p><strong>Montant total :</strong> 70000 FCFA</p>
              <p><strong>À rembourser :</strong> 55000 FCFA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}