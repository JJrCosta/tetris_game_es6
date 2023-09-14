import GameManager from "./game-manager.js";

export default class InputHandler {
    constructor() {
        document.addEventListener("keydown", this.onKeyDown);
    }
    onKeyDown(e) {
        switch (e.code) {
            case 'ArrowUp':
                GameManager.arena.currentPiece.tryRotateAntiClockwise();
                break;
            case 'ArrowLeft':
                GameManager.arena.currentPiece.tryMoveLeft();
                break;
            case 'ArrowDown':
                GameManager.arena.currentPiece.tryMoveDown();
                break;
            case 'ArrowRight':
                GameManager.arena.currentPiece.tryMoveRight();
                break;
            case 'Space':
                while (GameManager.arena.currentPiece.tryMoveDown());
            break;
        }
    }
}