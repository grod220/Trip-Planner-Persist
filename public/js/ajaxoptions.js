// var Hotel = require('../../models/hotel');

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

// ON PAGE LOAD, ADD TO DAYS
$.get('/api/days')
  .then(function(daysArr){
    $.get('api/hotels/' + daysArr[0].hotelId)
        .then(function(data) {
          $('#itinerary div:first-child ul').append('<div class="itinerary-item"> <span class="title">'+ data.name + '</span> <button class="btn btn-xs btn-danger remove btn-circle">x</button> </div>');
        });
    $.get('api/days/1/restaurants')
    .then(function(arrayOfObjs) {
      for (var i=0; i<arrayOfObjs.length; i++) {
        $.get('api/restaurants/' + arrayOfObjs[i].restaurantId)
        .then(function(data) {
          $('#itinerary>div:nth-child(2) ul').append('<div class="itinerary-item"> <span class="title">'+ data.name + '</span> <button class="btn btn-xs btn-danger remove btn-circle">x</button> </div>');
        });
      }
    $.get('api/days/1/activities')
    .then(function(arrayOfObjs) {
      for (var i=0; i<arrayOfObjs.length; i++) {
        $.get('api/activities/' + arrayOfObjs[i].activityId)
        .then(function(data) {
          $('#itinerary>div:nth-child(3) ul').append('<div class="itinerary-item"> <span class="title">'+ data.name + '</span> <button class="btn btn-xs btn-danger remove btn-circle">x</button> </div>');
        });
      }
    });
  });
});


