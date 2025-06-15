package Securite_sociale.CSI.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import Securite_sociale.CSI.Models.Feuille_de_maladie;
import Securite_sociale.CSI.Services.Feuille_de_maladieService;

import java.util.List;

@RestController
@RequestMapping("/feuilles")
public class FeuilledeMaladieController {

    @Autowired
    private Feuille_de_maladieService feuilleService;

    @PostMapping("/ajouter")
    public Feuille_de_maladie ajouterFeuille(@RequestBody Feuille_de_maladie feuille) {
        return feuilleService.ajouterFeuille(feuille);
    }

    @GetMapping("/toutes")
    public List<Feuille_de_maladie> getAllFeuilles() {
        return feuilleService.getAllFeuilles();
    }
}
