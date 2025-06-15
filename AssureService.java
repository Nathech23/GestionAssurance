package Securite_sociale.CSI.Services;
import Securite_sociale.CSI.Models.Assure;
import Securite_sociale.CSI.Models.Medecin;
import Securite_sociale.CSI.Exceptions.AssureDejaExistantException;
import Securite_sociale.CSI.Exceptions.AssureNonExistantException;
import Securite_sociale.CSI.Exceptions.MedecinNonExistantException;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

public class AssureService {

    private List<Assure> assures = new ArrayList<>();
    private List<Medecin> medecins = new ArrayList<>();

    public Assure ajouterAssure(Assure assure) throws AssureDejaExistantException {
        Optional<Assure> existant = assures.stream()
                .filter(a -> Objects.equals(a.getNoSecu(), assure.getNoSecu()))
                .findFirst();
        if (existant.isPresent()) {
            throw new AssureDejaExistantException("Un assuré avec ce numéro existe déjà.");
        }
        assures.add(assure);
        return assure;
    }

    public void modifierAssure(String numeroSecu, Assure updatedAssure) throws AssureNonExistantException {
        Assure assure = getAssureParNumero(numeroSecu);
        assure.setNom(updatedAssure.getNom());
        assure.setPrenom(updatedAssure.getPrenom());
        assure.setDate_de_naissance(updatedAssure.getDate_de_naissance());
        assure.setAdresse(updatedAssure.getAdresse());
        // Tu peux ajouter d'autres champs ici
    }

    public void supprimerAssure(String numeroSecu) throws AssureNonExistantException {
        Assure assure = getAssureParNumero(numeroSecu);
        assures.remove(assure);
    }

    public void attribuerMedecinTraitant(String numeroSecu, int idMedecin)
            throws AssureNonExistantException, MedecinNonExistantException {
        Assure assure = getAssureParNumero(numeroSecu);
        Medecin medecin = getMedecinParId(idMedecin);
        assure.setMedecinTraitant(medecin);
    }

    private Assure getAssureParNumero(String numeroSecu) throws AssureNonExistantException {
        return assures.stream()
                .filter(a -> Objects.equals(a.getNoSecu(), numeroSecu))
                .findFirst()
                .orElseThrow(() -> new AssureNonExistantException("Assuré introuvable."));
    }

    private Medecin getMedecinParId(int idMedecin) throws MedecinNonExistantException {
        return medecins.stream()
                .filter(m -> m.getIdMedecin() == idMedecin)
                .findFirst()
                .orElseThrow(() -> new MedecinNonExistantException("Médecin introuvable."));
    }

    // Méthodes d'initialisation (optionnelles pour tester)
    public void ajouterMedecin(Medecin m) {
        medecins.add(m);
    }

    public List<Assure> getTousLesAssures() {
        return assures;
    }

    public List<Medecin> getTousLesMedecins() {
        return medecins;
    }
    public List<Assure> getAllAssures() {

        return assures;
    }

    public Assure getAssureById(int id) throws AssureNonExistantException {
        for (Assure assure : assures) {

        }

        return assures.stream()
                .filter(a -> a.getNoSecu() == id)
                .findFirst()
                .orElseThrow(() -> new AssureNonExistantException("Assuré avec l'ID " + id + " non trouvé."));
    }

    public Assure getAssureById() {
        return getAssureById();
    }
}

