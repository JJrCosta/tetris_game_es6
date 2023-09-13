import Tetromino from './tetromino.js';

export default class TetrominoFactory {
    constructor() {
        this._collection = [
            () => new Tetromino(
                "#00ff0080",
                [
                    [0, 0, 1, 0],
                    [0, 0, 1, 0],
                    [0, 0, 1, 0],
                    [0, 0, 1, 0]
                ]
            ),
            () => new Tetromino(
                "#ff000080",
                [
                    [0, 0, 0, 0],
                    [0, 0, 1, 0],
                    [1, 1, 1, 0],
                    [0, 0, 0, 0]
                ]
            ),
            () => new Tetromino(
                "#dd00dd80",
                [
                    [0, 0, 0, 0],
                    [0, 1, 0, 0],
                    [0, 1, 1, 1],
                    [0, 0, 0, 0]
                ]
            ),
            () => new Tetromino(
                "#eedd0080",
                [
                    [0, 0, 0, 0],
                    [0, 1, 1, 0],
                    [1, 1, 0, 0],
                    [0, 0, 0, 0]
                ]
            ),
            () => new Tetromino(
                "#00ddee80",
                [
                    [0, 0, 0, 0],
                    [1, 1, 0, 0],
                    [0, 1, 1, 0],
                    [0, 0, 0, 0]
                ]
            ),
            () => new Tetromino(
                "#ff990080",
                [
                    [0, 0, 0, 0],
                    [0, 1, 0, 0],
                    [1, 1, 1, 0],
                    [0, 0, 0, 0]
                ]
            ),
            () => new Tetromino(
                "#0000ff80",
                [
                    [0, 0, 0, 0],
                    [0, 1, 1, 0],
                    [0, 1, 1, 0],
                    [0, 0, 0, 0]
                ]
            )
        ];
    }

    getTetromino() {
        const randomIndex = Math.floor(Math.random() * this._collection.length);
        return this._collection[randomIndex]();
    }
}