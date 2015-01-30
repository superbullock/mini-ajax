$(document).ready( function() {
    var myFirebaseRef = new Firebase("https://testUserApp.firebaseio.com/");
    $('#getUsers').on('click',function (){
        myFirebaseRef.once('value', function(snapshot) {
            insertData(snapshot.val());
            console.log(snapshot.val());
       });
        
    }); 
    
    var insertData = function(json) {
        
        for (key in json) {
            var obj = json[key];
            var i= 1;
            $('#userInfo' + i).append('<div>' +
                  'User Info:' +
                  '<li>' +
                  'Name: ' + obj.name +
                  '</li>' +
                  '<li>' +
                  'Job: ' + obj.job +
                  '</li>' +
                  '<hr>' +
                  '</div>'
                                   );
            i++;
        };
    };
    
    $('#addUser').on('click', function(e){
        e.preventDefault();
        var userName = $('#name').val();
        var userJob = $('#job').val();
        myFirebaseRef.push({
            job: userJob, 
            name: userName
        });
        $('#name').val('');
        $('#job').val('');
        $('#recentUser').html(
          '<li>' +
            'name: ' + userName +
          '</li>' +
          '<li>' +
            'job: ' + userJob +
          '</li>'
        )
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
});