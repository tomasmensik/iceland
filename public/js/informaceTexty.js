
const everything = [
    {
        "header": "Geography",
        "headerText": `Iceland is closer to continental Europe than to mainland North America, although it is closest to Greenland
        (290 km, 180 mi), an island of North America. Iceland is generally included in Europe for geographical,
        historical, political, cultural, linguistic and practical reasons. Geologically, the island includes parts of
        both continental plates. Iceland is the world's 18th-largest island, and Europe's second-largest island after
        Great Britain. The island's interior is a cold and uninhabitable combination of sand, mountains, and lava
        fields. The major towns are the capital city of Reykjavík, along with its outlying towns of Kópavogur,
        Hafnarfjörður, and Garðabær, nearby Reykjanesbær where the international airport is located, and the town of
        Akureyri in northern Iceland.`,

        "firstName": "Geology",
        "firstText": "A geologically young land, Iceland is the surface expression of the Iceland Plateau, a large igneous province forming as a result of volcanism from the Iceland hotspot and along the Mid-Atlantic Ridge, the latter of which runs right through it. This means that the island is highly geologically active with many volcanoes including Hekla, Eldgjá, Herðubreið, and Eldfell.",
        "firstText2": "Iceland has many geysers, including Geysir, from which the English word is derived, and the famous Strokkur, which erupts every 8–10 minutes. After a phase of inactivity, Geysir started erupting again after a series of earthquakes in 2000. Geysir has since grown quieter and does not erupt often.",
        "firstText3": "With the widespread availability of geothermal power, and the harnessing of many rivers and waterfalls for hydroelectricity, most residents have access to inexpensive hot water, heating, and electricity. The island is composed primarily of basalt, a low-silica lava associated with effusive volcanism as has occurred also in Hawaii. Iceland, however, has a variety of volcanic types (composite and fissure), many producing more evolved lavas such as rhyolite and andesite. Iceland has hundreds of volcanoes with about 30 active volcanic systems.",

        "secondName": "Climate",
        "secondText": "The climate of Iceland's coast is subarctic. The warm North Atlantic Current ensures generally higher annual temperatures than in most places of similar latitude in the world. Regions in the world with similar climates include the Aleutian Islands, the Alaska Peninsula, and Tierra del Fuego, although these regions are closer to the equator. Despite its proximity to the Arctic, the island's coasts remain ice-free through the winter. Ice incursions are rare, the last having occurred on the north coast in 1969",
        "secondText2": "The climate varies between different parts of the island. Generally speaking, the south coast is warmer, wetter, and windier than the north. The Central Highlands are the coldest part of the country. Low-lying inland areas in the north are the most arid. Snowfall in winter is more common in the north than the south.",
        "secondText3": "The highest air temperature recorded was 30.5 °C (86.9 °F) on 22 June 1939 at Teigarhorn on the southeastern coast. The lowest was −38 °C (−36.4 °F) on 22 January 1918 at Grímsstaðir and Möðrudalur in the northeastern hinterland. The temperature records for Reykjavík are 26.2 °C (79.2 °F) on 30 July 2008, and −24.5 °C (−12.1 °F) on 21 January 1918.",

        "thirdName": "Plants",
        "thirdText": "Phytogeographically, Iceland belongs to the Arctic province of the Circumboreal Region within the Boreal Kingdom. Around three-quarters of the island is barren of vegetation; plant life consists mainly of grassland, which is regularly grazed by livestock. The most common tree native to Iceland is the northern birch (Betula pubescens), which formerly formed forests over much of Iceland, along with aspens (Populus tremula), rowans (Sorbus aucuparia), common junipers (Juniperus communis), and other smaller trees, mainly willows.",
        "thirdText2": `When the island was first settled, it was extensively forested, with around 30% of the land covered in trees. In the late 12th century, Ari the Wise described it in the Íslendingabók as "forested from mountain to sea shore".Permanent human settlement greatly disturbed the isolated ecosystem of thin, volcanic soils and limited species diversity. The forests were heavily exploited over the centuries for firewood and timber.Deforestation, climatic deterioration during the Little Ice Age, and overgrazing by sheep imported by settlers caused a loss of critical topsoil due to erosion.`,
        "thirdText3": "Today, many farms have been abandoned. Three-quarters of Iceland's 100,000 square kilometres is affected by soil erosion, 18,000 km2 (6,900 sq mi) serious enough to make the land useless. Only a few small birch stands now exist in isolated reserves. The planting of new forests has increased the number of trees, but the result does not compare to the original forests. Some of the planted forests include introduced species. The tallest tree in Iceland is a sitka spruce planted in 1949 in Kirkjubæjarklaustur; it was measured at 25.2 m (83 ft) in 2013.",

        "fourthName": "Animals",
        "fourthText": "The only native land mammal when humans arrived was the Arctic fox, which came to the island at the end of the ice age, walking over the frozen sea. On rare occasions, bats have been carried to the island with the winds, but they are not able to breed there. No native or free-living reptiles or amphibians are on the island.",
        "fourthText2": "The animals of Iceland include the Icelandic sheep, cattle, chickens, goats, the sturdy Icelandic horse, and the Icelandic Sheepdog, all descendants of animals imported by Europeans. Wild mammals include the Arctic fox, mink, mice, rats, rabbits, and reindeer. Polar bears occasionally visit the island, travelling from Greenland on icebergs, but no Icelandic populations exist. In June 2008, two polar bears arrived in the same month. Marine mammals include the grey seal (Halichoerus grypus) and harbour seal (Phoca vitulina).",
        "fourthText3": "Many species of fish live in the ocean waters surrounding Iceland, and the fishing industry is a major part of Iceland's economy, accounting for roughly half of the country's total exports. Birds, especially seabirds, are an important part of Iceland's animal life. Atlantic puffins, skuas, and black-legged kittiwakes nest on its sea cliffs. On the other hand, Around 1,300 species of insects are known in Iceland. This is low compared with other countries (over one million species have been described worldwide). Iceland is essentially free of mosquitoes.",

        "icon":`<i class="fas fa-chart-area fa-4x"></i>`,
        "dataTarget":102775,
        "dataName":"Area in km<sup>2</sup>", 

        "icon2":`<i class="fas fa-users fa-4x"></i>`,
        "dataTarget2":2109,
        "dataName2":"Density per km<sup>2</sup>", 

        "icon3":`<i class="fas fa-paw fa-4x"></i>`,
        "dataTarget3":26511,
        "dataName3":"Reservation in km<sup>2</sup>", 

    }

/*     {
        "header":"History",
        "headerText":"The recorded history of Iceland began with the settlement by Viking explorers and the people they enslaved from the east, particularly Norway and the British Isles, in the late ninth century. Iceland was still uninhabited long after the rest of Western Europe had been settled. Recorded settlement has conventionally been dated back to 874, although archaeological evidence indicates Gaelic monks from Ireland, known as papar according to sagas, had settled Iceland before that date.",

        "firstName":"Settlement and Commonwealth",
        "firstText":"According to both Landnámabók and Íslendingabók, monks known as the Papar lived in Iceland before Scandinavian settlers arrived, possibly members of a Hiberno-Scottish mission. Recent archaeological excavations have revealed the ruins of a cabin in Hafnir on the Reykjanes peninsula. Carbon dating indicates that it was abandoned sometime between 770 and 880.[21] In 2016, archaeologists uncovered a longhouse in Stöðvarfjörður that has been dated to as early as 800.",
        "firstText2":"Swedish Viking explorer Garðar Svavarsson was the first to circumnavigate Iceland in 870 and establish that it was an island.[23] He stayed during the winter and built a house in Húsavík. Garðar departed the following summer but one of his men, Náttfari, decided to stay behind with two slaves. Náttfari settled in what is now known as Náttfaravík and he and his slaves became the first permanent residents of Iceland",
        "firstText3":"The Norwegian-Norse chieftain Ingólfr Arnarson built his homestead in present-day Reykjavík in 874. Ingólfr was followed by many other emigrant settlers, largely Scandinavians and their thralls, many of whom were Irish or Scottish.[26] By 930, most arable land on the island had been claimed; the Althing, a legislative and judicial assembly, was initiated to regulate the Icelandic Commonwealth. Lack of arable land also served as an impetus to the settlement of Greenland starting in 986.",

        "secondName":"The Middle Ages",
        "secondText":"The Icelandic Commonwealth lasted until the 13th century, when the political system devised by the original settlers proved unable to cope with the increasing power of Icelandic chieftains.[31] The internal struggles and civil strife of the Age of the Sturlungs led to the signing of the Old Covenant in 1262, which ended the Commonwealth and brought Iceland under the Norwegian crown. Possession of Iceland passed from the Kingdom of Norway (872–1397) to the Kalmar Union in 1415, when the kingdoms of Norway, Denmark and Sweden were united.",
        "secondText2":"Around the middle of the 16th century, as part of the Protestant Reformation, King Christian III of Denmark began to impose Lutheranism on all his subjects. Jón Arason, the last Catholic bishop of Hólar, was beheaded in 1550 along with two of his sons. The country subsequently became officially Lutheran and Lutheranism has since remained the dominant religion. In the 17th and 18th centuries, Denmark imposed harsh trade restrictions on Iceland. Natural disasters, including volcanic eruption and disease, contributed to a decreasing population.",
        "secondText3":"In the summer of 1627, Barbary Pirates committed the events known locally as the Turkish Abductions, in which hundreds of residents were taken into slavery in North Africa and dozens killed; this was the only invasion in Icelandic history to have casualties.",

        "thirdName":"Independence movement",
        "thirdText":"In 1814, following the Napoleonic Wars, Denmark-Norway was broken up into two separate kingdoms via the Treaty of Kiel but Iceland remained a Danish dependency. Throughout the 19th century, the country's climate continued to grow colder, resulting in mass emigration to the New World, particularly to the region of Gimli, Manitoba in Canada, which was sometimes referred to as New Iceland. About 15,000 people emigrated, out of a total population of 70,000.",
        "thirdText2":"A national consciousness arose in the first half of the 19th century, inspired by romantic and nationalist ideas from mainland Europe. An Icelandic independence movement took shape in the 1850s under the leadership of Jón Sigurðsson, based on the burgeoning Icelandic nationalism inspired by the Fjölnismenn and other Danish-educated Icelandic intellectuals.",
        "thirdText3":"In 1874, Denmark granted Iceland a constitution and limited home rule. This was expanded in 1904, and Hannes Hafstein served as the first Minister for Iceland in the Danish cabinet.",

        "fourthName":"Independence and the Kingdom of Iceland",
        "fourthText":"The Danish–Icelandic Act of Union, an agreement with Denmark signed on 1 December 1918 and valid for 25 years, recognised Iceland as a fully sovereign and independent state in a personal union with Denmark. The Government of Iceland established an embassy in Copenhagen and requested that Denmark carry out on its behalf certain defence and foreign affairs matters, subject to consultation with the Althing. Danish embassies around the world displayed two coats of arms and two flags: those of the Kingdom of Denmark and those of the Kingdom of Iceland.",
        "fourthText2":"uring World War II, Iceland joined Denmark in asserting neutrality. After the German occupation of Denmark on 9 April 1940, the Althing replaced the King with a regent and declared that the Icelandic government would take control of its own defence and foreign affairs.[41] A month later, British armed forces conducted Operation Fork, the invasion and occupation of the country, violating Icelandic neutrality.[42] In 1941, the Government of Iceland, friendly to Britain, invited the then-neutral United States to take over its defence so that Britain could use its troops elsewhere.",
        "fourthText3":"On 31 December 1943, the Danish–Icelandic Act of Union expired after 25 years. Beginning on 20 May 1944, Icelanders voted in a four-day plebiscite on whether to terminate the personal union with Denmark, abolish the monarchy, and establish a republic. The vote was 97% to end the union, and 95% in favour of the new republican constitution.[43] Iceland formally became a republic on 17 June 1944, with Sveinn Björnsson as its first president.",

        "icon":`<i class="fas fa-child fa-4x"></i>`,
        "dataTarget":75,
        "dataName":"% Christianity", 

        "icon2":`<i class="fas fa-flask fa-4x"></i>`,
        "dataTarget2":22,
        "dataName2":"% No religion", 

        "icon3":`<i class="fas fa-neuter fa-4x"></i></i>`,
        "dataTarget3":3,
        "dataName3":"% Other", 

    } */
]

everything.forEach((event) => {
    $(".container-fluid .wrapper").append(`

    <div class="row onlyProCisla">
    <div class="col-lg-2"></div>
    <div class="col-lg-8">
      <div class="nadpisyJavascript">
        <h1>${event.header}</h1>
        <p>${event.headerText}</p>
      </div>
        <div class="textyJavascript">
          <hr>
          <div class="row">
          <div class="obsahSekce">
            <div class="firstRadek">
              <p>
                <span><i class="ikonka fas fa-angle-double-right"></i></span>
                <span class="nadpis text-success">${event.firstName}</span>
              </p>
            </div>
            <div class="secondRadek">
              <p>${event.firstText}</p>
              <p>${event.firstText2}</p>
              <p>${event.firstText3}</p>
            </div>
          </div>
        </div>
          <hr>
        </div>
        <div class="textyJavascript">
          <hr>
          <div class="row">
          <div class="obsahSekce">
            <div class="firstRadek">
              <p>
                <span><i class="ikonka fas fa-angle-double-right"></i></span>
                <span class="nadpis text-success">${event.secondName}</span>
              </p>
            </div>
            <div class="secondRadek">
              <p>${event.secondText}</p>
              <p>${event.secondText2}</p>
              <p>${event.secondText3}</p>
            </div>
          </div>
        </div>
          <hr>
        </div>
        <div class="textyJavascript">
          <hr>
          <div class="row">
          <div class="obsahSekce">
            <div class="firstRadek">
              <p>
                <span><i class="ikonka fas fa-angle-double-right"></i></span>
                <span class="nadpis text-success">${event.thirdName}</span>
              </p>
            </div>
            <div class="secondRadek">
              <p>${event.thirdText}</p>
              <p>${event.thirdText2}</p>
              <p>${event.thirdText3}</p>
            </div>
          </div>
        </div>
          <hr>
        </div>
        <div class="textyJavascript">
          <hr>
          <div class="row">
          <div class="obsahSekce">
            <div class="firstRadek">
              <p>
                <span><i class="ikonka fas fa-angle-double-right"></i></span>
                <span class="nadpis text-success">${event.fourthName}</span>
              </p>
            </div>
            <div class="secondRadek">
              <p>${event.fourthText}</p>
              <p>${event.fourthText2}</p>
              <p>${event.fourthText3}</p>
            </div>
          </div>
        </div>
          <hr>
        </div>
    </div>
    <div class="col-lg-2"></div>
  </div>
  
  <div class="row text-center my-5 counterCisla">
  <div class="col-lg-3"></div>
  <div class="col-lg-2">
            <div>
                <span class="counterHover">
        ${event.icon}
      </span>
                <div class="counter" data-target="${event.dataTarget}">0</div>
                <h3>${event.dataName}</h3>
            </div>
  </div>
  <div class="col-lg-2">
            <div>
                <span class="counterHover">
                ${event.icon2}
      </span>
                <div class="counter" data-target="${event.dataTarget2}">0</div>
                <h3>${event.dataName2}</h3>
            </div>
  </div>
  <div class="col-lg-2">
            <div>
                <span class="counterHover">
                ${event.icon3}
      </span>
                <div class="counter" data-target="${event.dataTarget3}">0</div>
                <h3>${event.dataName3}</h3>
            </div>
  </div>
  <div class="col-lg-3"></div>
</div>

    `);

    $(".secondRadek").hide();
});


$(function () {

    $(".firstRadek").on('click', function () {
        $(this).next().toggle(1000);
    });
});

const history = [
  {
    "title":"Settlement and Commonwealth",
    "icon":`<i class="far fa-address-book fa-3x"></i>`,
    "p":"was the state existing in Iceland between the establishment of the Alþingi  in 930 and the pledge of fealty to the Norwegian king with the Old Covenant in 1262. "
  },
  {
    "title":"Settlement and Commonwealth",
    "icon":`<i class="far fa-address-book fa-3x"></i>`,
    "p":"was the state existing in Iceland between the establishment of the Alþingi  in 930 and the pledge of fealty to the Norwegian king with the Old Covenant in 1262. "
  },
  {
    "title":"Settlement and Commonwealth",
    "icon":`<i class="far fa-address-book fa-3x"></i>`,
    "p":"was the state existing in Iceland between the establishment of the Alþingi  in 930 and the pledge of fealty to the Norwegian king with the Old Covenant in 1262. "
  },
  {
    "title":"Settlement and Commonwealth",
    "icon":`<i class="far fa-address-book fa-3x"></i>`,
    "p":"was the state existing in Iceland between the establishment of the Alþingi  in 930 and the pledge of fealty to the Norwegian king with the Old Covenant in 1262. "
  },
  {
    "title":"Settlement and Commonwealth",
    "icon":`<i class="far fa-address-book fa-3x"></i>`,
    "p":"was the state existing in Iceland between the establishment of the Alþingi  in 930 and the pledge of fealty to the Norwegian king with the Old Covenant in 1262. "
  },
  {
    "title":"Settlement and Commonwealth",
    "icon":`<i class="far fa-address-book fa-3x"></i>`,
    "p":"was the state existing in Iceland between the establishment of the Alþingi  in 930 and the pledge of fealty to the Norwegian king with the Old Covenant in 1262. "
  },
]


const historyModul = [
  {
    "title":"Settlement 1",
    "text":"Settlement 1"
  },
  {
    "title":"Settlement 2",
    "text":"Settlement 2"
  },
  {
    "title":"Settlement 3",
    "text":"Settlement 3"
  },
  {
    "title":"Settlement 4",
    "text":"Settlement 4"
  },
  {
    "title":"Settlement 5",
    "text":"Settlement 5"
  },
  {
    "title":"Settlement 6",
    "text":"Settlement 6"
  },
]

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

$("#historyHere #itemFull").on("click", function() {

  let index =  parseInt($(this).index());
  console.log(index);

  $("#modulHere").html(`

  <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog"
  aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">${historyModul[index].title}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">${historyModul[index].text}</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
  
  `)
})
