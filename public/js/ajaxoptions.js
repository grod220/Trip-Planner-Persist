$.ajax({
  method: 'GET',
  url: '/api/hotels'
}).then(function(result){
  for (var i=0; i<result.length; i++) {
    $('#hotel-choices').append('<option>'+ result[i].name +'</option>');
  }
}).catch(function(err) {
  console.error(err);
});

$.ajax({
  method: 'GET',
  url: '/api/restaurants'
}).then(function(result){
  for (var i=0; i<result.length; i++) {
    $('#restaurant-choices').append('<option>'+ result[i].name +'</option>');
  }
}).catch(function(err) {
  console.error(err);
});

$.ajax({
  method: 'GET',
  url: '/api/activities'
}).then(function(result){
  for (var i=0; i<result.length; i++) {
    $('#activity-choices').append('<option>'+ result[i].name +'</option>');
  }
}).catch(function(err) {
  console.error(err);
});
