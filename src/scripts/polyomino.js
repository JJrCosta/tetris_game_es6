import GameManager from "./game-manager.js";
import Square from "./square.js";

export default class Polyomino {
    constructor(squaresCount, color, format) {
        this.color = color;
        this._squaresCount = squaresCount;

        this._initializeSquare(format);
    }
    
    _initializeSquare(format) {
        this._squares = [...Array(this._squaresCount)].map(()=>[...Array(this._squaresCount)]);
        for (let i = 0; i < this._squaresCount; i++) {
            for (let j = 0; j < this._squaresCount; j++) {
                if (format[i][j]) {
                    this._squares[i][j] = new Square(this.color);
                }
            }
        }
    }

    draw() {
        for (let i = 0; i < this._squaresCount; i++) {
            for (let j = 0; j < this._squaresCount; j++) {
                if (this._squares[j][i]) {
                    this._squares[j][i].draw(
                        GameManager.arena.position.left + (this.position.x + i) * GameManager.config.squareSize,
                        GameManager.arena.position.top + (this.position.y + j) * GameManager.config.squareSize
                    );
                }
            }
        }
    }

    setPosition(x, y) {
        this.position = {
            x: x,
            y: y
        }

        return this
    }

    clone() {
        return new Polyomino(
            this._squaresCount,
            this.color,
            this._squares.map(x => x.map(y => y ? 1 : 0))
        ).setPosition(this.position.x, this.position.y);
    }

    tryMoveDown() {
        let copy = this.clone();
        copy.position.y++;

        for (let i = 0; i < this._squaresCount; i++) {
            for (let j = 0; j < this._squaresCount; j++) {
                if (this._squares[j][i] && (copy.position.y + j) >= 20) {
                    return false;
                }
            }
        }

        this.position.y++;
        return true;
    }
}