import { useState } from 'react'
import Navigation from '../../components/Navigation'

export default function GestionAssures() {
  const [assures, setAssures] = useState([
    { id: 1, nom: 'Essono', prenom: 'Flora', dateNaissance: '2005-05-15', numeroSecu: '1800515123456' },
    { id: 2, nom: 'Magne', prenom: 'Isabella', dateNaissance: '2005-06-13', numeroSecu: '2751203789012' },
    { id: 3, nom: 'Fofack', prenom: 'Henri', dateNaissance: '2005-07-20', numeroSecu: '1800515123456' },
    { id: 4, nom: 'Bakotcha', prenom: 'Loïc', dateNaissance: '2004-08-25', numeroSecu: '2751203789012' },
    { id: 5, nom: 'Tapamo', prenom: 'Stella', dateNaissance: '2004-09-30', numeroSecu: '1800515123456' }
  ])

  const [nouvelAssure, setNouvelAssure] = useState({
    nom: '', prenom: '', dateNaissance: '', numeroSecu: ''
  })

  const [showForm, setShowForm] = useState(false)

  const ajouterAssure = (e) => {
    e.preventDefault()
    const id = assures.length + 1
    setAssures([...assures, { id, ...nouvelAssure }])
    setNouvelAssure({ nom: '', prenom: '', dateNaissance: '', numeroSecu: '' })
    setShowForm(false)
  }

  return (
    <div>
      <Navigation userType="assureur" />
      <div className="container">
        <h1>Gestion des Assurés</h1>

        <button 
          className="btn btn-success" 
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Annuler' : 'Nouvel Assuré'}
        </button>

        {showForm && (
          <div className="card">
            <h3>Inscrire un Nouvel Assuré</h3>
            <form onSubmit={ajouterAssure}>
              <div className="form-group">
                <label>Nom :</label>
                <input
                  type="text"
                  value={nouvelAssure.nom}
                  onChange={(e) => setNouvelAssure({...nouvelAssure, nom: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Prénom :</label>
                <input
                  type="text"
                  value={nouvelAssure.prenom}
                  onChange={(e) => setNouvelAssure({...nouvelAssure, prenom: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Date de Naissance :</label>
                <input
                  type="date"
                  value={nouvelAssure.dateNaissance}
                  onChange={(e) => setNouvelAssure({...nouvelAssure, dateNaissance: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Numéro de Sécurité Sociale :</label>
                <input
                  type="text"
                  value={nouvelAssure.numeroSecu}
                  onChange={(e) => setNouvelAssure({...nouvelAssure, numeroSecu: e.target.value})}
                  required
                />
              </div>
              <button type="submit" className="btn">Inscrire</button>
            </form>
          </div>
        )}

        <div className="card">
          <h3>Liste des Assurés</h3>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Date de Naissance</th>
                <th>N° Sécurité Sociale</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {assures.map(assure => (
                <tr key={assure.id}>
                  <td>{assure.id}</td>
                  <td>{assure.nom}</td>
                  <td>{assure.prenom}</td>
                  <td>{assure.dateNaissance}</td>
                  <td>{assure.numeroSecu}</td>
                  <td>
                    <button className="btn btn-secondary">Modifier</button>
                    <button className="btn btn-danger">Supprimer</button>
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