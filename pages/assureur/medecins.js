import { useState } from 'react'
import Navigation from '../../components/Navigation'

export default function GestionMedecins() {
  const [medecins, setMedecins] = useState([
    { 
      id: 1, 
      nom: 'Nziéleu', 
      prenom: 'Nathan', 
      specialite: 'Généraliste',
      telephone: '6 77 77 77 77',
      adresse: 'Melen, Yaoundé'
    },
    { 
      id: 2, 
      nom: 'François', 
      prenom: 'Charles', 
      specialite: 'Cardiologue',
      telephone: '6 99 99 99 99',
      adresse: 'Mvog ada, Yaoundé'
    },
    { 
      id: 3, 
      nom: 'Tchapda', 
      prenom: 'Gauss', 
      specialite: 'Dentiste',
      telephone: '6 88 88 88 88',
      adresse: 'Biyem Assi, Yaoundé'
    },
    { 
      id: 4, 
      nom: 'Pichelle', 
      prenom: 'Stévenie', 
      specialite: 'Pédiatre',
      telephone: '6 55 55 55 55',
      adresse: 'Akwa, Douala'
    }
  ])

  const [nouveauMedecin, setNouveauMedecin] = useState({
    nom: '', prenom: '', specialite: '', telephone: '', adresse: ''
  })

  const [showForm, setShowForm] = useState(false)

  const ajouterMedecin = (e) => {
    e.preventDefault()
    const id = medecins.length + 1
    setMedecins([...medecins, { id, ...nouveauMedecin }])
    setNouveauMedecin({ nom: '', prenom: '', specialite: '', telephone: '', adresse: '' })
    setShowForm(false)
  }

  return (
    <div>
      <Navigation userType="assureur" />
      <div className="container">
        <h1>Gestion des Médecins</h1>

        <button 
          className="btn btn-success" 
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Annuler' : 'Nouveau Médecin'}
        </button>

        {showForm && (
          <div className="card">
            <h3>Enregistrer un Nouveau Médecin</h3>
            <form onSubmit={ajouterMedecin}>
              <div className="form-group">
                <label>Nom :</label>
                <input
                  type="text"
                  value={nouveauMedecin.nom}
                  onChange={(e) => setNouveauMedecin({...nouveauMedecin, nom: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Prénom :</label>
                <input
                  type="text"
                  value={nouveauMedecin.prenom}
                  onChange={(e) => setNouveauMedecin({...nouveauMedecin, prenom: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Spécialité :</label>
                <select
                  value={nouveauMedecin.specialite}
                  onChange={(e) => setNouveauMedecin({...nouveauMedecin, specialite: e.target.value})}
                  required
                >
                  <option value="">-- Choisir une spécialité --</option>
                  <option value="Généraliste">Généraliste</option>
                  <option value="Cardiologue">Cardiologue</option>
                  <option value="Dermatologue">Dermatologue</option>
                  <option value="Ophtalmologue">Ophtalmologue</option>
                  <option value="Pneumologue">Pneumologue</option>
                  <option value="Rhumatologue">Rhumatologue</option>
                  <option value="Dentiste">Dentiste</option>
                  <option value="Pédiatre">Pédiatre</option>
                </select>
              </div>
              <div className="form-group">
                <label>Téléphone :</label>
                <input
                  type="tel"
                  value={nouveauMedecin.telephone}
                  onChange={(e) => setNouveauMedecin({...nouveauMedecin, telephone: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Adresse :</label>
                <textarea
                  value={nouveauMedecin.adresse}
                  onChange={(e) => setNouveauMedecin({...nouveauMedecin, adresse: e.target.value})}
                  required
                />
              </div>
              <button type="submit" className="btn">Enregistrer</button>
            </form>
          </div>
        )}

        <div className="card">
          <h3>Liste des Médecins</h3>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Spécialité</th>
                <th>Téléphone</th>
                <th>Adresse</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {medecins.map(medecin => (
                <tr key={medecin.id}>
                  <td>{medecin.id}</td>
                  <td>{medecin.nom}</td>
                  <td>{medecin.prenom}</td>
                  <td>{medecin.specialite}</td>
                  <td>{medecin.telephone}</td>
                  <td>{medecin.adresse}</td>
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