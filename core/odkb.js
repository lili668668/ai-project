require('rootpath')()
const crawler = require('request-promise')
const rx = require('rxjs/Rx')

const url = 'http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=f4a75ba9-7721-4363-884d-c3820b0b917c'

const all_od = () => {
  return new Promise((resolve, reject) => {
    return crawler(url)
      .then(html => {
        var origin = JSON.parse(html)
        var list = []
        rx.Observable.from(origin['result']['results'])
        .subscribe(item => {
          var entry = {
            id: item['_id'],
            name: item['Name'],
            type: item['Type'],
            sex: item['Sex']


          }
        })
        resolve()
      })
      .catch(err => {
        throw err
      })
  }) 
}

exports.all_od = all_od
