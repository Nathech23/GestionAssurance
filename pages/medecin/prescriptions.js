import { useState } from 'react'
import Navigation from '../../components/Navigation'

export default function Prescriptions() {
  const [prescriptions, setPrescriptions] = useState([
    { 
      id: 1, 
      patient: 'Essono Flora', 
      date: '2025-01-15',
      medicaments: 'Paracétamol 1g - 3x/jour pendant 5 jours'
    }
  ])

  const [nouvellePrescription, setNouvellePrescription] = useState({
    patient: '', medicaments: ''
  })

  const [showForm, setShowForm] = useState(false)

  const ajouterPrescription = (e) => {
    e.preventDefault()
    const id = prescriptions.length + 1
    const date = new Date().toISOString().split('T')[0]
    setPrescriptions([...prescriptions, { 
      id, 
      date,
      ...nouvellePrescription 
    }])
    setNouvellePrescription({ patient: '', medicaments: '' })
    setShowForm(false)
  }

  return (
    <div>
      <Navigation userType="medecin" />
      <div className="container">
        <h1>Prescriptions de Médicaments</h1>

        <button 
          className="btn btn-success" 
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Annuler' : 'Nouvelle Prescription'}
        </button>

        {showForm && (
          <div className="card">
            <h3>Prescrire des Médicaments</h3>
            <form onSubmit={ajouterPrescription}>
              <div className="form-group">
                <label>Patient :</label>
                <input
                  type="text"
                  value={nouvellePrescription.patient}
                  onChange={(e) => setNouvellePrescription({...nouvellePrescription, patient: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Médicaments et Posologie :</label>
                <textarea
                  value={nouvellePrescription.medicaments}
                  onChange={(e) => setNouvellePrescription({...nouvellePrescription, medicaments: e.target.value})}
                  placeholder="Ex: Paracétamol 1g - 3 comprimés par jour pendant 5 jours"
                  rows="4"
                  required
                />
              </div>
              <button type="submit" className="btn">Prescrire</button>
            </form>
          </div>
        )}

        <div className="card">
          <h3>Mes Prescriptions</h3>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Patient</th>
                <th>Date</th>
                <th>Médicaments</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {prescriptions.map(prescription => (
                <tr key={prescription.id}>
                  <td>{prescription.id}</td>
                  <td>{prescription.patient}</td>
                  <td>{prescription.date}</td>
                  <td>{prescription.medicaments}</td>
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