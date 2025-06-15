package Securite_sociale.CSI.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import Securite_sociale.CSI.Models.Prescription;
import Securite_sociale.CSI.Services.PrescriptionService;

import java.util.List;

@RestController
@RequestMapping("/prescriptions")
public class PrescriptionController {

    @Autowired
    private PrescriptionService prescriptionService;

    @PostMapping("/ajouter")
    public Prescription ajouterPrescription(@RequestBody Prescription prescription) {
        return prescriptionService.ajouterPrescription(prescription);
    }

    @GetMapping("/toutes")
    public List<Prescription> getAllPrescriptions() {
        return prescriptionService.getAllPrescriptions();
    }
}
