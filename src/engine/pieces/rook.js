import Piece from './piece';
import Player from '../player';
import Square from '../square';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {

        let location = board.findPiece(this)
        const moves = []

        if (this.player === Player.WHITE) {
            //Code to move Rook laterally i.e Horizontal or Vertical
            for (let i = 0; i < 8; i++) {
                if (i != location.col)
                    moves.push(Square.at(location.row, i))
                if (i != location.row)
                    moves.push(Square.at(i, location.col))
            }
            return moves
        }
    }
}
git