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
    describes.push(facts[cnt].split('(')[0].trim())
  }
  return describes
}

// backward chaining
const inference = (facts, rules, goal) => {
  goal = goal.trim()
  facts.sort()
  rules.sort()
  for(var cnt = 0;cnt < facts.length;cnt++) {
    facts[cnt] = facts[cnt].trim()
    if (!is_fact(facts[cnt])) {
      throw 'One of the fact is not correct.'
    } else if(facts[cnt].split('(')[0].trim() === goal.split('(')[0].trim()) {
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
        var pop_rule = rules.splice(cnt, 1)
        if (!inference(facts, rules, goals[cnt2])) {
          flag = false
        }
        rules = rules.concat(pop_rule)
      }
      if (flag) {
        var describe = get_describes([rules[cnt].split(':-')[0]])[0]
        var fact = describe + '(' + goal.substring(goal.indexOf('(') + 1, goal.indexOf(')'))
        facts.push(fact)
      }
      rules.splice(cnt, 1)
      return inference(facts, rules, goal)
    }
  }

  return false

}

const get_max_appear_right_fact = (rules) => {
  for (var cnt = 0;cnt < rules.length;cnt++) {

  }
}

module.exports.is_fact = is_fact
module.exports.is_rule = is_rule
module.exports.get_describes = get_describes
module.exports.inference = inference
module.exports.get_max_appear_right_fact = get_max_appear_right_fact
