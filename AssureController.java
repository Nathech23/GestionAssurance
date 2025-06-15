package Securite_sociale.CSI.Controller;

import Securite_sociale.CSI.Exceptions.AssureDejaExistantException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import Securite_sociale.CSI.Models.Assure;
import Securite_sociale.CSI.Services.AssureService;

import java.util.List;

@RestController
@RequestMapping("/assures")
public class AssureController {

    @Autowired
    private AssureService assureService;

    @PostMapping("/ajouter")
    public Assure ajouterAssure(@RequestBody Assure assure) throws AssureDejaExistantException {
        return assureService.ajouterAssure(assure);
    }

    @GetMapping("/tous")
    public List<Assure> getAllAssures() {
        return assureService.getAllAssures();
    }

    @GetMapping("/{id}")
    public Assure getAssureById(@PathVariable Long id) {
        return assureService.getAssureById();
    }
}
