function saturdayFun(event = 'roller-skate'){
    return `This Saturday, I want to ${event}!`;
}

const mondayWork = function(action = 'go to the office'){
    return `This Monday, I will ${action}.`
}

function wrapAdjective(flair = '*'){
    return function (adjective = 'special'){
        return `You are ${flair}${adjective}${flair}!`
}
}