import Navigation from '../../components/Navigation'

export default function MesPatients() {
  const patients = [
    {
      id: 1,
      nom: 'Essono',
      prenom: 'Flora',
      age: 20,
      telephone: '6 55 44 33 22',
      derniereConsultation: '2025-01-15',
      nombreConsultations: 5
    },
    {
      id: 2,
      nom: 'Magne',
      prenom: 'Isabella',
      age: 20,
      telephone: '6 98 76 54 32',
      derniereConsultation: '2025-04-12',
      nombreConsultations: 3
    },
    {
      id: 3,
      nom: 'Tapamo',
      prenom: 'Stella',
      age: 21,
      telephone: '6 55 44 33 22',
      derniereConsultation: '2025-05-20',
      nombreConsultations: 8
    }
  ]

  return (
    <div>
      <Navigation userType="medecin" />
      <div className="container">
        <h1>Mes Patients</h1>

        <div className="card">
          <h3>Liste de mes Patients</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Âge</th>
                <th>Téléphone</th>
                <th>Dernière Consultation</th>
                <th>Nb Consultations</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {patients.map(patient => (
                <tr key={patient.id}>
                  <td>{patient.nom}</td>
                  <td>{patient.prenom}</td>
                  <td>{patient.age} ans</td>
                  <td>{patient.telephone}</td>
                  <td>{patient.derniereConsultation}</td>
                  <td>{patient.nombreConsultations}</td>
                  <td>
                    <button className="btn btn-secondary">Dossier</button>
                    <button className="btn">Consulter</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card">
          <h3>Rendez-vous du Jour</h3>
          <div style={{ padding: '20px' }}>
            <p><strong>9h00 :</strong> Essono Flora - Consultation de suivi</p>
            <p><strong>10h30 :</strong> Magne Isabella - Première consultation</p>
            <p><strong>14h00 :</strong> Tapamo Stella - Renouvellement ordonnance</p>
            <p><strong>15h30 :</strong> Bakotcha Loïc - Consultation de routine</p>
            <p><strong>16h45 :</strong> Fofack Henri - Consultation de contrôle</p>
          </div>
        </div>

        <div className="card">
          <h3>Actions Rapides</h3>
          <div className="grid">
            <button className="btn">Nouvelle Consultation</button>
            <button className="btn btn-secondary">Voir Planning</button>
            <button className="btn btn-secondary">Rechercher Patient</button>
            <button className="btn btn-secondary">Statistiques</button>
          </div>
        </div>
      </div>
    </div>
  )
}