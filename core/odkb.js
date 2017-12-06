const crawler = require('request-promise')
const rx = require('rxjs/Rx')

const url = 'http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=f4a75ba9-7721-4363-884d-c3820b0b917c'

const all_od = () => {
  return new Promise((resolve, reject) => {
    return crawler(url)
      .then(html => {
        var origin = JSON.parse(html)
        var list = []
        return rx.Observable.from(origin['result']['results'])
        .forEach(item => {
          var entry = {
            id: item['_id'],
            name: item['Name'],
            type: item['Type'],
            sex: item['Sex'],
            build: item['Build'],
            age: item['Age'],
            chip_num: item['ChipNum'],
            is_sterilization: item['isSterilization'],
            hair_type:item['HairType'],
            children_anlong: item['ChildreAnlong'],
            animal_anlong: item['AnimalAnlong'],
            resettlement: item['Resettlement'],
            note: item['Note'],
            contact_phone: item['Phone'],
            contact_email: item['Email']
          }
          list.push(entry)
        }).then(() => resolve(list))
      })
  }) 
}

exports.all_od = all_od
