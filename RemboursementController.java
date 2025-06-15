package Securite_sociale.CSI.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import Securite_sociale.CSI.Models.Remboursement;
import Securite_sociale.CSI.Services.RemboursementService;

import java.util.List;

@RestController
@RequestMapping("/remboursements")
public class RemboursementController {

    @Autowired
    private RemboursementService remboursementService;

    @PostMapping("/effectuer")
    public Remboursement effectuerRemboursement(@RequestBody Remboursement remboursement) {
        return remboursementService.effectuerRemboursement(remboursement);
    }

    @GetMapping("/tous")
    public List<Remboursement> getAllRemboursements() {
        return remboursementService.getAllRemboursements();
    }
}
