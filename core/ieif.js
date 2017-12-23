const ie = require('./ie.js')
const kb = require('./kb.js')

const sub_keep_talk = (facts, rules) => {
  return new Promise((resolve, reject) => {
    if (rules.length === 0) {
      var content = `很抱歉，無法找到適合您的浪浪，您可以再次輸入「我需要幫助」<br/>或是您也可以到上方的<a href="/animals">動物一覽</a>，認識更多浪浪`
      resolve({facts: facts, rules: rules, content: content})
    }
    var one_fact = ie.get_max_appear_right_fact(rules)
    if (facts.indexOf(one_fact) >= 0) {
      var best_rule = ie.get_best_result_by(rules, one_fact)
      var goal = best_rule.split(':-')[0]
      var result = ie.inference(facts, rules, goal)
      if (result) {
        return kb.all_animals()
          .then(animals => {
            var list = animals.list

            var key = goal.split('(')[1].split(')')[0]
            var val = goal.split('(')[0]

            for (var cnt = 0;cnt < list.length;cnt++) {
              if (list[cnt][key] === val) {
                var content = `我們推薦您可以認養這隻浪浪<br/><a href="/animals/${list[cnt]['id']}">${list[cnt]['name'] || '無名'}</a><br/>若您還想繼續查詢，可以再次輸入「我需要幫助」<br/>或是您也可以到上方的<a href="/animals">動物一覽</a>，認識更多浪浪`
                resolve({facts: facts, rules: rules, content: content})
              }
            }
            var content = `很抱歉，無法找到適合您的浪浪，您可以再次輸入「我需要幫助」<br/>或是您也可以到上方的<a href="/animals">動物一覽</a>，認識更多浪浪`
            resolve({facts: facts, rules: rules, content: content})
          })
      } else {
        var tmp1 = one_fact + ','
        var tmp2 = ',' + one_fact
        var new_best_rule = best_rule.replce(tmp1, '').replce(tmp2, '')
        var index = rules.indexOf(best_rule)
        if (!ie.is_rule(new_best_rule)) {
          rules.splice(index, 1)
        } else {
          rules.splice(index, 1, new_best_rule)
        }
        return sub_keep_talk(facts, rules).then(entry => resolve(entry))
      }
    } else {
      var describe = one_fact.split('(')[0]
      var relation = one_fact.split('(')[1].split(')')[0]
      var content = `${relation}是${describe}嗎？(是/否)`
      resolve({facts: facts, rules: rules, content: content})
    }
  })
}

const keep_talk = (facts, rules, content) => {
  return new Promise((resolve, reject) => {
    var trim_facts = []
    var trim_rules = []

    if (facts.length !== 0 && facts[0]['describe'] !== undefined) {
      for(var cnt = 0;cnt < facts.length;cnt++) {
        trim_facts.push(facts[cnt]['describe'])
      }
      facts = trim_facts
    }

    if (rules.length !== 0 && rules[0]['describe'] !== undefined) {
      for (var cnt = 0;cnt < rules.length;cnt++) {
        trim_rules.push(rules[cnt]['describe'])
      }
      rules = trim_rules
    }

    if (content === '我需要幫助') {
      return sub_keep_talk(facts, rules).then(entry => resolve(entry))
    } else if (content === '是') {
      var one_fact = ie.get_max_appear_right_fact(rules)
      facts.push(one_fact)
      return sub_keep_talk(facts, rules).then(entry => resolve(entry))
    } else if (content === '否') {
      var one_fact = ie.get_max_appear_right_fact(rules)
      var new_rules = []
      for (var cnt = 0;cnt < rules.length;cnt++) {
        var right_facts_str = rules[cnt].split(':-')[1]
        if (right_facts_str.indexOf(one_fact) < 0) {
          new_rules.push(rules[cnt])
        }
      }
      rules = new_rules
      return sub_keep_talk(facts, rules).then(entry => resolve(entry))
    } else {
      resolve({facts: facts, rules: rules, content: ''})
    }
  })
}

module.exports.keep_talk = keep_talk
