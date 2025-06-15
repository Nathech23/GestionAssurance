package Securite_sociale.CSI.Services;

import org.springframework.stereotype.Service;
import Securite_sociale.CSI.Models.Feuille_de_maladie;

import java.util.ArrayList;
import java.util.List;

@Service
public class Feuille_de_maladieService {

    private List<Feuille_de_maladie> feuilles = new ArrayList<>();

    public Feuille_de_maladie ajouterFeuille(Feuille_de_maladie feuille) {
        feuilles.add(feuille);
        return feuille;
    }

    public List<Feuille_de_maladie> getAllFeuilles() {
        return feuilles;
    }
}
