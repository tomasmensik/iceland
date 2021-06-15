
  

$(function(){

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


    $("svg #ledovce").hide();

    $(".hlavniMestaInput").on('change', function(){
        $("svg ellipse").toggle(500);
    });

    $(".ledovceInput").on('change', function(){
        $("svg #ledovce").toggle(500);
    });

    $("svg path").on('click', function(){
        $("#ledovce path").css('fill','#fff');
        $("#regions path").css('fill','#A0A0A0');
        $(this).css('fill','#7c7c7c');
    })

    fetchFunkce("mesta", mestaKliknuti);

    function mestaKliknuti(udaje){
        $("ellipse").on('click',function(){

            $("ellipse").css('fill','#050');
            $(this).css('fill','#080');

            let index =  parseInt($(this).index());
            console.log(index);

            $(".informaceMapa").html(`
            <div class="secondRadek">
            <hr>
            <h2>${udaje[index].city}</h2>
            <h3>${udaje[index].peoples} people</h3>
            <hr>
            <p>${udaje[index].sign}</p>
            <h5>${udaje[index].text}</h5>
            <hr>
            <h3>${udaje[index].region}</h3>
            </div>
          `)
        })
    }
    
})


