var fastn = require('^fastn')
var app = require('^app')

module.exports = function (fastn, app, selectedSite, deleteSite) {
  return fastn('base:swipeItem', {
    latitude: fastn.binding('gis_lat'),
    longitude: fastn.binding('gis_lng'),
    title: fastn.binding('rn'),
    type: fastn.binding('boreType'),
    _id: fastn.binding('_id'),
    status: fastn.binding('facility_status')
  })
  .on('click', function (event, scope) {
    app.search.toggleSearchControl()
    app.page.selectId(scope.get('_id'))
    app.search.selectSite(scope.get('.'))
    app.map.setMapCenter([scope.get('latitude'), scope.get('longitude')])
      // app.activityRouter.add('page', { _id: scope.get('_id') });
  })
  .binding('item')
}
