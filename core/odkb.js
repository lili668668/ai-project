const crawler = require('request-promise')
const rx = require('rxjs/Rx')

const url = 'http://data.coa.gov.tw/Service/OpenData/AnimalOpenData.aspx'

const all_od = () => {
  return new Promise((resolve, reject) => {
    return crawler(url)
      .then(html => {
        var origin = JSON.parse(html)
        var list = []
        return rx.Observable.from(origin)
        .forEach(item => {
          var entry = {
            id: item['animal_id'],
            name: item['animal_id'],
            type: item['animal_kind'],
            sex: item['animal_sex'],
            build: item['animal_bodytype'],
            age: item['animal_age'],
            chip_num: item['animal_id'],
            is_sterilization: item['animal_sterilization'],
            hair_type:item['animal_colour'],
            children_anlong: 'F',
            animal_anlong: 'F',
            resettlement: item['shelter_name'],
            note: item['animal_remark'],
            contact_phone: item['shelter_tel'],
            contact_email: ''
          }
          list.push(entry)
        }).then(() => resolve(list))
      }).catch(err => {
        reject(err)
      })
  }) 
}

exports.all_od = all_od
