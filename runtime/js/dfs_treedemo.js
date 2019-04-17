
  var mode = "exploration";
  var isPlaying = false;

  var gtWidget = new GraphTraversal();
  var gw = gtWidget.getGraphWidget();
  var random_graphs = [SSSP_EXAMPLE_CP3_4_79,
                       SSSP_EXAMPLE_CP3_4_21, 
                       SSSP_EXAMPLE_CP3_4_24, 
                       SSSP_EXAMPLE_CP3_4_27, 
                      ];
  id = random_graphs[Math.floor(Math.random() * random_graphs.length)];
  gtWidget.examples(id);

  function updatesequence(u){
    //alert(u);
    var cur_seq = document.getElementById('sequence').innerHTML;
    if (cur_seq !='Sequence of Nodes:  ')
      document.getElementById('sequence').innerHTML = cur_seq + ', ' + u;
    else
      document.getElementById('sequence').innerHTML = cur_seq + ' ' + u;
  }

  function dfs() {
    document.getElementById('sequence').innerHTML = "";
    $('#dfs-err').html("");
    var sourceS = parseInt($('#dfs-v').val());
    var source = document.getElementById('dfs-v').value;
    if(isPlaying) {
      gw.stop();
      isPaused = false;
      isPlaying = false;
      }
    setTimeout( function() {
      if ((mode=="exploration")&&gtWidget.dfs(sourceS)) {
        isPlaying = true;
      }
    }, 500);
  }

function sample() {
  document.getElementById('sequence').innerHTML = "";
  $('#dfs-err').html("");
  document.location.reload(true);
  var random_graphs = [SSSP_EXAMPLE_CP3_4_79,
    SSSP_EXAMPLE_CP3_4_21,
    SSSP_EXAMPLE_CP3_4_24,
    SSSP_EXAMPLE_CP3_4_27,
  ];
  id = random_graphs[Math.floor(Math.random() * random_graphs.length)];  
  if (isPlaying) {
    gw.stop();
    isPaused = false;
    isPlaying = false;
  }
  setTimeout(function () {
    if ((mode == "exploration") && gtWidget.examples(id)) {
      isPlaying = false;
    }
  }, 500);
}
