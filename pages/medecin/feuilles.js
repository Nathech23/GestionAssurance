import { useState } from 'react'
import Navigation from '../../components/Navigation'

export default function FeuillesMaladie() {
  const [feuilles, setFeuilles] = useState([
    { 
      id: 1, 
      patient: 'Essono Flora', 
      date: '2025-01-15', 
      diagnostic: 'Grippe',
      prescription: 'Paracétamol 1g x3/jour'
    }
  ])

  const [nouvelleFeuille, setNouvelleFeuille] = useState({
    patient: '', date: '', diagnostic: '', prescription: ''
  })

  const [showForm, setShowForm] = useState(false)

  const ajouterFeuille = (e) => {
    e.preventDefault()
    const id = feuilles.length + 1
    setFeuilles([...feuilles, { id, ...nouvelleFeuille }])
    setNouvelleFeuille({ patient: '', date: '', diagnostic: '', prescription: '' })
    setShowForm(false)
  }

  return (
    <div>
      <Navigation userType="medecin" />
      <div className="container">
        <h1>Feuilles de Maladie</h1>

        <button 
          className="btn btn-success" 
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Annuler' : 'Nouvelle Feuille'}
        </button>

        {showForm && (
          <div className="card">
            <h3>Enregistrer une Feuille de Maladie</h3>
            <form onSubmit={ajouterFeuille}>
              <div className="form-group">
                <label>Patient :</label>
                <input
                  type="text"
                  value={nouvelleFeuille.patient}
                  onChange={(e) => setNouvelleFeuille({...nouvelleFeuille, patient: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Date de Consultation :</label>
                <input
                  type="date"
                  value={nouvelleFeuille.date}
                  onChange={(e) => setNouvelleFeuille({...nouvelleFeuille, date: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Diagnostic :</label>
                <textarea
                  value={nouvelleFeuille.diagnostic}
                  onChange={(e) => setNouvelleFeuille({...nouvelleFeuille, diagnostic: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Prescription :</label>
                <textarea
                  value={nouvelleFeuille.prescription}
                  onChange={(e) => setNouvelleFeuille({...nouvelleFeuille, prescription: e.target.value})}
                />
              </div>
              <button type="submit" className="btn">Enregistrer</button>
            </form>
          </div>
        )}

        <div className="card">
          <h3>Mes Feuilles de Maladie</h3>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Patient</th>
                <th>Date</th>
                <th>Diagnostic</th>
                <th>Prescription</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {feuilles.map(feuille => (
                <tr key={feuille.id}>
                  <td>{feuille.id}</td>
                  <td>{feuille.patient}</td>
                  <td>{feuille.date}</td>
                  <td>{feuille.diagnostic}</td>
                  <td>{feuille.prescription}</td>
                  <td>
                    <button className="btn btn-secondary">Modifier</button>
                    <button className="btn">Imprimer</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}