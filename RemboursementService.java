package Securite_sociale.CSI.Services;

import org.springframework.stereotype.Service;
import Securite_sociale.CSI.Models.Remboursement;

import java.util.ArrayList;
import java.util.List;

@Service
public class RemboursementService {

    private List<Remboursement> remboursements = new ArrayList<>();

    public Remboursement effectuerRemboursement(Remboursement remboursement) {
        remboursements.add(remboursement);
        return remboursement;
    }

    public List<Remboursement> getAllRemboursements() {
        return remboursements;
    }
}
