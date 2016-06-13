const fastn = require('^fastn')


module.exports = function (selectedSite, deleteSite) {
  return fastn('base:marker', {
    latitude: fastn.binding('gis_lat'),
    longitude: fastn.binding('gis_lng'),
    title: fastn.binding('rn'),
    type: fastn.binding('boreType'),
    _id: fastn.binding('_id'),
    status: fastn.binding('facility_status')
  }).on('click', function (event, scope) {
    console.log('yo yo yo')
  }).binding('item')
}
