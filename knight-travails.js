function knightMoves(start, to) {
    if (!Array.isArray(start) || !Array.isArray(to)) {
        throw new Error("Both function arguments need to be of type array")
    }
    if (start.length !== 2 || to.length !== 2) {
        throw new Error("Both function arguments needs to be arrays of size 2")
    }

    const VALID_MOVES = [
        [2, 1], [2, -1],
        [-2, 1], [-2, -1],
        [1, 2], [1, -2],
        [-1, 2], [-1, -2]
    ]

    //Determines all valid moves from a node
    function findValidMoves(move) {
        let valid_moves = []
        for (let valid_move of VALID_MOVES) {
            let new_move = [valid_move[0] + move[0], valid_move[1] + move[1]]

            if (new_move[0] >= 0 &&
                new_move[0] <= 7 &&
                new_move[1] >= 0 &&
                new_move[1] <= 7
            )valid_moves.push(new_move)
        }
        return valid_moves
    }

    const visited = new Set()
    let queue = [[start, [start]]]

    visited.add(queue[0])
    while (queue.length > 0) {
        const [currentMove,path] = queue.shift()

        //If destination is found print path
        if (currentMove[0] === to[0] && currentMove[1] === to[1]) {
            console.log(`You made it in ${path.length - 1} moves! Heres your path:`)
            for (let move of path) {
                console.log(move)
            }
            return
        }

        //If destination not found add all possible moves to queue to check
        for (let move of findValidMoves(currentMove)) {
            if (!visited.has(move.toString())) {
                visited.add(move)
                queue.push([move, [...path, move]])
            }
        }
    }
}

knightMoves([3,3], [4,3])
knightMoves([0,0], [7,7])