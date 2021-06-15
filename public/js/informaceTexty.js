

function fetchFunkce(slozka, funkce){
  fetch(`../data/${slozka}.json`)
     .then(response => {
        return response.json();
     })
     .then(json =>{
        funkce(json);
     })
     .catch(function(error){
        console.error('Chyba: \n', error);
     });
}

fetchFunkce("geographyEverything", geography);

function geography(everything){
    everything.forEach((event) => {
      $(".container-fluid .wrapper .textyJavascript").append(`
            <div>
            <hr>
            <div class="row">
            <div class="obsahSekce">
              <div class="firstRadek">
                <p>
                  <span><i class="ikonka fas fa-angle-double-right"></i></span>
                  <span class="nadpis text-success">${event.name}</span>
                </p>
              </div>
              <div class="secondRadek">
                <p>${event.text}</p>
                <p>${event.gif}</p>
                <p>${event.text2}</p>
                <p>${event.text3}</p>
              </div>
            </div>
            <hr>
            </div>
      `);

      $(".secondRadek").hide();
  });

  $(function () {

    $(".firstRadek").on('click', function () {
        $(this).next().toggle(1000);
    });
  });
}



//Dalsi



fetchFunkce("historyFirst", historyFirst);

function historyFirst(history){
  history.forEach((event) => {

    $("#historyHere").append(`
  
        <div class="col-xl-3 columns" id="itemFull">
        <div class="item">
          <a data-toggle="modal" data-target="#exampleModalLong">
              <div class="icon">
                ${event.icon}
              </div>
              <h5>${event.title}</h5>
              <p>${event.p}</p>
              <span id="learnMore">Learn More</span>
          </a>
        </div>
      </div>
    `)
  })
}



//Dalsi



fetchFunkce("historyModul", historyModul);

function historyModul(historyModul){
  $("#historyHere #itemFull").on("click", function() {

    let index =  parseInt($(this).index());
    console.log(index);
  
    $("#modulHere").html(`
  
    <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">${historyModul[index].title}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <h3>${historyModul[index].nadpis}</h3>
          <p>${historyModul[index].text}</p>
          <p>${historyModul[index].obrazek}</p>
          <h3>${historyModul[index].nadpis2}</h3>
          <p>${historyModul[index].text2}</p>
          <p>${historyModul[index].obrazek2}</p>
          <h3>${historyModul[index].nadpis3}</h3>
          <p>${historyModul[index].text3}</p>
          <p>${historyModul[index].obrazek3}</p>
          <h3>${historyModul[index].nadpis4}</h3>
          <p>${historyModul[index].text4}</p>
          <p>${historyModul[index].obrazek4}</p>
          <h3>${historyModul[index].nadpis5}</h3>
          <p>${historyModul[index].text5}</p>
          <p>${historyModul[index].obrazek5}</p>
          <h3>${historyModul[index].nadpis6}</h3>
          <p>${historyModul[index].text6}</p>
          <p>${historyModul[index].obrazek6}</p>
          <h3>${historyModul[index].nadpis7}</h3>
          <p>${historyModul[index].text7}</p>
          <p>${historyModul[index].obrazek7}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
    
    `)
  })
}

fetchFunkce("politics", politics);

function politics(udaje){
  $("#politicsHere img").on("click", function() {

    let index =  parseInt($(this).index());
    console.log(index);

    $(".politicsFullSekce .politicsHereUdaje").html(`
      <div class="secondRadek">
      <hr>
      <p>${udaje[index].text}</p>
      <p>${udaje[index].gif}</p>
      <p>${udaje[index].text2}</p>
      <p>${udaje[index].text3}</p>
      <hr>
      </div>
    `).hide().show(1000);
  
  })
}