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

const get_describes = (facts) => {
  var describes = []
  for(var cnt = 0;cnt < facts.length;cnt++) {
    facts[cnt] = facts[cnt].trim()
    if (!is_fact(facts[cnt])) {
      throw 'One of the fact is not correct.'
    }
    var left_bracket_index = facts[cnt].indexOf('(')
    var describe = facts[cnt].substring(0, left_bracket_index).trim()
    describes.push(describe)
  }
  return describes
}

// backward chaining
const inference = (facts, rules, goal) => {
  goal = goal.trim()
  for(var cnt = 0;cnt < facts.length;cnt++) {
    facts[cnt] = facts[cnt].trim()
    if (!is_fact(facts[cnt])) {
      throw 'One of the fact is not correct.'
    } else if(facts[cnt] === goal) {
      return true
    }
  }

  for(var cnt = 0;cnt < rules.length;cnt++) {
    rules[cnt] = rules[cnt].trim()
    if (!is_rule(rules[cnt])) {
      throw 'One of the rule is not correct.'
    } else if (get_describes([rules[cnt].split(':-')[0]])[0] === get_describes([goal])[0]) {
      var goals = rules[cnt].split(':-')[1].split(',')
      var flag = true
      for(var cnt2 = 0;cnt2 < goals.length;cnt2++) {
        goals[cnt2] = goals[cnt2].trim()
        if (!inference(facts, rules, goals[cnt2])) {
          flag = false
        }
      }
      if (flag) {
        facts.push(rules[cnt].split(':-')[0])
      }
      return inference(facts, rules, goal)
    }
  }

  return false

}

module.exports.is_fact = is_fact
module.exports.is_rule = is_rule
module.exports.get_describes = get_describes
module.exports.inference = inference
