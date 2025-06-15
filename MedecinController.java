package Securite_sociale.CSI.Controller;

import Securite_sociale.CSI.Exceptions.MedecinNonExistantException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import Securite_sociale.CSI.Models.Medecin;
import Securite_sociale.CSI.Services.MedecinService;

import java.util.List;

@RestController
@RequestMapping("/medecins")
public class MedecinController {

    @Autowired
    private MedecinService medecinService;

    @PostMapping("/ajouter")
    public Medecin ajouterMedecin(@RequestBody Medecin medecin) throws MedecinNonExistantException {
        return medecinService.ajouterMedecin(medecin);
    }

    @GetMapping("/tous")
    public List<Medecin> getAllMedecins() {
        return medecinService.getAllMedecins();
    }

    @GetMapping("/{id}")
    public Medecin getMedecinById(@PathVariable Long id) throws MedecinNonExistantException {
        return medecinService.getMedecinById(id);
    }
}
