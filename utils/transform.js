const chalk = require('chalk')
const transform = quotes => {
    let text = ''
    if (!quotes.length) {
        return 'Oops, we did not find what you are looking for!'
    }

    quotes.forEach((quote, index) => {
        text += `\n ${index+1}. "${chalk.white.italic(quote.description)}" ${chalk.green.italic(`-${quote.author}`)}\n`
    })
    return text
}

module.exports = transform