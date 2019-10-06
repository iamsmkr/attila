var canvas = document.getElementById("word_cloud");
var baseFont = '30';
if(canvas){
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    // Get all tags data API
    wordCloudData = [];
    $.get('/ghost/api/canary/admin/tags/?limit=all&include=count.posts').done(function (data){
        for(var i=0 ;i<data.tags.length;i++){
            var temp = [];
            temp.push(data.tags[i].name);
            temp.push(data.tags[i].count.posts).toString();
            wordCloudData.push(temp);
        };
        var options = { 
            list : wordCloudData,      
            weightFactor: function (size) {
                return (size === 1) ? baseFont : 10 * size * 2;
            },
            fontFamily: 'Cardo',
            rotateRatio: 0,
            color: '#7e868e',
            click: function(item) {
                window.location.href = "/tag/" + item[0];
            }
        }
        WordCloud(document.getElementById('word_cloud'), options);
    }).fail(function (err){
        console.log(err);
    });
}