package Securite_sociale.CSI.Services;

import Securite_sociale.CSI.Exceptions.MedecinNonExistantException;
import Securite_sociale.CSI.Models.Medecin;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class MedecinService {

    private List<Medecin> medecinList = new ArrayList<>();

    public Medecin ajouterMedecin(Medecin medecin) throws MedecinNonExistantException {
        Optional<Medecin> medecinExistant = medecinList.stream()
                .filter(m -> Objects.equals(m.getIdMedecin(), medecin.getIdMedecin()))
                .findFirst();

        if (medecinExistant.isPresent()) {
            throw new MedecinNonExistantException("Le médecin existe déjà.");
        }

        medecinList.add(medecin);
        return medecin;
    }

    public void supprimerMedecin(int idMedecin) throws MedecinNonExistantException {
        Medecin medecin = getMedecinById((long) idMedecin);
        medecinList.remove(medecin);
    }

    public void modifierMedecin(int idMedecin, Medecin updatedMedecin) throws MedecinNonExistantException {
        Medecin medecin = getMedecinById((long) idMedecin);

        medecin.setNom(updatedMedecin.getNom());
        medecin.setPrenom(updatedMedecin.getPrenom());
        medecin.setDate_de_naissance(updatedMedecin.getDate_de_naissance());
        medecin.setAdresse(updatedMedecin.getAdresse());
        medecin.setDateInscription(updatedMedecin.getDateInscription());
        medecin.setNoOrdre(updatedMedecin.getNoOrdre());
    }

    public Medecin getMedecinById(Long id) throws MedecinNonExistantException {
        return medecinList.stream()
                .filter(m -> Objects.equals(m.getIdMedecin(), id))
                .findFirst()
                .orElseThrow(() -> new MedecinNonExistantException("Médecin avec l'ID " + id + " non trouvé."));
    }


    public List<Medecin> getAllMedecins() {
        return medecinList;
    }
}
