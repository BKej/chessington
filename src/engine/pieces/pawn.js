import Player from '../player';
import Square from '../square';
import Piece from './piece';
import Board from '../board';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    isSquareEmpty(board, row, col) {
        console.log("row: " + row + "col: " + col);
        if (board.getPiece(Square.at(row, col)) === undefined) {
            return true;
        }
        return false;
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        console.log("func- " + this.isSquareEmpty(board, location.row, location.col));

        const moves = []
        if (this.player === Player.WHITE) {

            if (location.row === 1) {
                if (this.isSquareEmpty(board, location.row + 2, location.col)) {
                    moves.push(Square.at(location.row + 2, location.col))
                }
                if (this.isSquareEmpty(board, location.row + 1, location.col)) {
                    moves.push(Square.at(location.row + 1, location.col))
                }

            } else {
                if (this.isSquareEmpty(board, location.row + 1, location.col)) {
                    moves.push(Square.at(location.row + 1, location.col))
                }
            }
        } else {

            if (location.row === 6) {
                if (this.isSquareEmpty(board, location.row - 2, location.col)) {
                    moves.push(Square.at(location.row - 2, location.col))
                }
                if (this.isSquareEmpty(board, location.row - 1, location.col)) {
                    moves.push(Square.at(location.row - 1, location.col))
                }

            } else {
                if (this.isSquareEmpty(board, location.row - 1, location.col)) {
                    moves.push(Square.at(location.row - 1, location.col))
                }
            }

        }
        return moves
    }
}
