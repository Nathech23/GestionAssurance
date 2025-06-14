import { useState } from 'react'
import Navigation from '../../components/Navigation'

export default function ConsultationsSpecialistes() {
  const [consultations, setConsultations] = useState([
    { 
      id: 1, 
      patient: 'Magne Isabella', 
      specialiste: 'Dr. Pichelle (pédiatre)',
      date: '2024-05-20',
      motif: 'Douleurs thoraciques'
    }
  ])

  const [nouvelleConsultation, setNouvelleConsultation] = useState({
    patient: '', specialiste: '', motif: ''
  })

  const [showForm, setShowForm] = useState(false)

  const specialistes = [
    'Dr. Tchapda (Dentiste)',  
    'Dr. Pichelle (Pédiatre)',
    'Dr. François Charles (Cardiologue)'
  ]

  const ajouterConsultation = (e) => {
    e.preventDefault()
    const id = consultations.length + 1
    const date = new Date().toISOString().split('T')[0]
    setConsultations([...consultations, { 
      id, 
      date,
      ...nouvelleConsultation 
    }])
    setNouvelleConsultation({ patient: '', specialiste: '', motif: '' })
    setShowForm(false)
  }

  return (
    <div>
      <Navigation userType="medecin" />
      <div className="container">
        <h1>Consultations chez les Spécialistes</h1>

        <button 
          className="btn btn-success" 
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Annuler' : 'Prescrire Consultation'}
        </button>

        {showForm && (
          <div className="card">
            <h3>Prescrire une Consultation chez un Spécialiste</h3>
            <form onSubmit={ajouterConsultation}>
              <div className="form-group">
                <label>Patient :</label>
                <input
                  type="text"
                  value={nouvelleConsultation.patient}
                  onChange={(e) => setNouvelleConsultation({...nouvelleConsultation, patient: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Spécialiste :</label>
                <select
                  value={nouvelleConsultation.specialiste}
                  onChange={(e) => setNouvelleConsultation({...nouvelleConsultation, specialiste: e.target.value})}
                  required
                >
                  <option value="">-- Choisir un spécialiste --</option>
                  {specialistes.map((spec, index) => (
                    <option key={index} value={spec}>{spec}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Motif de la consultation :</label>
                <textarea
                  value={nouvelleConsultation.motif}
                  onChange={(e) => setNouvelleConsultation({...nouvelleConsultation, motif: e.target.value})}
                  placeholder="Décrivez le motif de la consultation..."
                  rows="3"
                  required
                />
              </div>
              <button type="submit" className="btn">Prescrire</button>
            </form>
          </div>
        )}

        <div className="card">
          <h3>Consultations Prescrites</h3>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Patient</th>
                <th>Spécialiste</th>
                <th>Date Prescription</th>
                <th>Motif</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {consultations.map(consultation => (
                <tr key={consultation.id}>
                  <td>{consultation.id}</td>
                  <td>{consultation.patient}</td>
                  <td>{consultation.specialiste}</td>
                  <td>{consultation.date}</td>
                  <td>{consultation.motif}</td>
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