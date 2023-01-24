import Piece from './piece';
import Player from '../player';
import Square from '../square';
import King from './king';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {

        let location = board.findPiece(this)
        const moves = []

        if (this.player === Player.WHITE) {
            //Code to move Rook laterally i.e Horizontal or Vertical. Also, checking it cannot move through other pieces
            for (let i = location.col - 1; i >= 0; i--) {
                if (board.getPiece(Square.at(location.row, i)) === undefined) {
                    moves.push(Square.at(location.row, i))
                } else if ((board.getPiece(Square.at(location.row, i))).player === Player.BLACK
                    && !((board.getPiece(Square.at(location.row, i))) instanceof King)) {
                    moves.push(Square.at(location.row, i))
                    break
                } else {
                    break
                }
            }
            for (let i = location.col + 1; i < 8; i++) {
                if (board.getPiece(Square.at(location.row, i)) === undefined) {
                    moves.push(Square.at(location.row, i))
                } else if ((board.getPiece(Square.at(location.row, i))).player === Player.BLACK
                    && !((board.getPiece(Square.at(location.row, i))) instanceof King)) {
                    moves.push(Square.at(location.row, i))
                    break
                } else {
                    break
                }
            }
            for (let i = location.row - 1; i >= 0; i--) {
                if (board.getPiece(Square.at(i, location.col)) === undefined) {
                    moves.push(Square.at(i, location.col))
                } else if ((board.getPiece(Square.at(i, location.col))).player === Player.BLACK
                    && !((board.getPiece(Square.at(i, location.col))) instanceof King)) {
                    moves.push(Square.at(i, location.col))
                    break
                } else {
                    break
                }
            }
            for (let i = location.row + 1; i < 8; i++) {
                if (board.getPiece(Square.at(i, location.col)) === undefined) {
                    moves.push(Square.at(i, location.col))
                } else if ((board.getPiece(Square.at(i, location.col))).player === Player.BLACK
                    && !((board.getPiece(Square.at(i, location.col))) instanceof King)) {
                    moves.push(Square.at(i, location.col))
                    break
                } else {
                    break
                }
            }

            return moves
        }
    }
}
