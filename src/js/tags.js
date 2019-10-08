var $canvasContainer = $('#canvas-container');
var $canvas = document.getElementById("word_cloud");
var $box = $('<div id="box"/>');
var baseFont = '30';
$canvasContainer.append($box);

if($canvas){
    $canvas.width  = window.innerWidth;
    $canvas.height = window.innerHeight;
    document.body.scrollTop = 0;
    document.body.style.overflow = 'hidden'; 
    // Get all tags data API
    wordCloudData = [];
    $.get('/blogs/technology/ghost/api/v2/content/tags/?include=count.posts&key=25fdd232f863efe25e04441a19').done(function (data){
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
            fontWeight: 'bold',
            fontFamily: 'Cardo',
            rotateRatio: 0,
            color: '#7e868e',
            click: function(item) {
                window.location.href = "./../tag/" + item[0];
            },
            hover: function(item, dimension, event){
                if (!dimension) {
                    return;
                }
                $box.css({
                    left: dimension.x + 'px',
                    top: dimension.y + 'px',
                    width: dimension.w + 'px',
                    height: dimension.h + 'px'
                });
            }
        }
        WordCloud(document.getElementById('word_cloud'), options);
    }).fail(function (err){
        console.log(err);
    });
}