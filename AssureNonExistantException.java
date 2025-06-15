package Securite_sociale.CSI.Exceptions;

public class AssureNonExistantException extends Exception {
    public AssureNonExistantException() {
        super("L'assuré n'existe pas.");
    }

    public AssureNonExistantException(String message) {
        super(message);
    }
}