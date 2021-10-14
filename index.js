
function superbowlWin(trophy) {
    let winningYear = trophy.find((trophy) =>
    trophy.result === 'W')
    if (winningYear) {
        return winningYear.year
    }

}