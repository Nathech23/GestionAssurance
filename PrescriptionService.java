package Securite_sociale.CSI.Services;

import org.springframework.stereotype.Service;
import Securite_sociale.CSI.Models.Prescription;

import java.util.ArrayList;
import java.util.List;

@Service
public class PrescriptionService {

    private List<Prescription> prescriptions = new ArrayList<>();

    public Prescription ajouterPrescription(Prescription prescription) {
        prescriptions.add(prescription);
        return prescription;
    }

    public List<Prescription> getAllPrescriptions() {
        return prescriptions;
    }
}
