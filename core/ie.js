const fact_model = require('../models/fact.js')
const rule_model = require('../models/rule.js')
const rx = require('rxjs/Rx')

const is_fact = (fact) => {
  if (typeof fact === 'string') {
    var left_bracket_index = fact.indexOf('(')
    var right_bracket_index = fact.indexOf(')')
    var describe = fact.substring(0, left_bracket_index)
    var relations = fact.substring(left_bracket_index + 1, right_bracket_index)
    if (describe === '' || relations === '') {
      return false
    } else {
      return true
    }
  } else {
    return false
  }
}

module.exports.is_fact = is_fact
