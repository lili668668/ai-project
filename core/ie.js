const fact_model = require('../models/fact.js')
const rule_model = require('../models/rule.js')
const rx = require('rxjs/Rx')

const is_fact = (fact) => {
  if (typeof fact === 'string') {
    fact = fact.trim()
    var left_bracket_index = fact.indexOf('(')
    var right_bracket_index = fact.indexOf(')')
    var describe = fact.substring(0, left_bracket_index).trim()
    var relations = fact.substring(left_bracket_index + 1, right_bracket_index).trim()
    if (describe === '' || relations === '') {
      return false
    } else {
      return true
    }
  } else {
    return false
  }
}

const is_rule = (rule) => {
  if (typeof rule === 'string') {
    var sign_index = rule.indexOf(':-')
    var left_fact = rule.substring(0, sign_index).trim()
    var right_facts = rule.substring(sign_index + 2).trim().split(',')

    for(var cnt = 0;cnt < right_facts.length;cnt++) {
      if (!is_fact(right_facts[cnt])) {
        return false
      }
    }

    if (!is_fact(left_fact)) {
      return false
    }

    return true
    
  } else {
    return false
  }
}

const inference = (facts, rules) => {
  for(var cnt = 0;cnt < facts.length;cnt++) {
    if (!is_fact(facts[cnt])) {
      throw 'One of the fact is not correct.'
    }
  }
}

module.exports.is_fact = is_fact
module.exports.is_rule = is_rule
module.exports.inference = inference
