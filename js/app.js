
/* alert(`Into the dragon`) */

let teamMates = [
    {
            fullName: "Ekun Baliskis Ajoke",
            img: "luchi",
            bestmovie: "Smart Money" ,
            complexion: "Dark Skin",
            bestFood: "Spaghetti",
            Age: "28",
            groupname: "Zeus",
            Learnt:"HTML, CSS, JavaScript",
            track: "Front-End Dev.",
            Position: "The accountant"
        },
        {
            fullName: "David Marvellous",
            img: "mavDavis",
            bestmovie: "Teen Wolf" ,
            complexion: "Dark-skin",
            bestFood: "Spaghetti",
            Age: "28",
            groupname: "Zeus",
            Learnt:"HTML, CSS, JavaScript",
            track: "Front-End Dev.",
            Position: "Light-bearer"
        },
        {
            fullName: "Simple Soul",
            img: "simplesoul",
            bestmovie: "King of Boys" ,
            complexion: "Light skin",
            bestFood: "Spaghetti",
            Age: "28",
            groupname: "Zeus",
            Learnt:"HTML, CSS, JavaScript",
            track: "Front-End Dev.",
            Position: "Team-Lead"
        },
        {
            fullName: "Luchi Cynthia",
            img: "cynthia",
            bestmovie: "Lagos Bling" ,
            complexion: "Light skin",
            bestFood: "Spaghetti",
            Age: "28",
            groupname: "Zeus",
            Learnt:"HTML, CSS, JavaScript",
            track: "Front-End Dev.",
            Position: "Team-player"
        },
        {
            fullName: "tolu tolu",
            img: "tolzMan",
            bestmovie: "Spatacus" ,
            complexion: "Dark skin",
            bestFood: "Spaghetti",
            Age: "28",
            groupname: "Zeus",
            Learnt:"HTML, CSS, JavaScript",
            track: "Front-End Dev.",
            Position: "Team-player"
        },
        {
            fullName: "HayJ Hayj",
            img: "Tj1",
            bestmovie: "" ,
            complexion: "Light skin",
            bestFood: "Spaghetti",
            Age: "28",
            groupname: "Zeus",
            Learnt:"HTML, CSS, JavaScript",
            track: "Front-End Dev.",
            Position: "Game-changer"
        },
        {
            fullName: "Danny Danny",
            img: "danny",
            bestmovie: "" ,
            complexion: "Light skin",
            bestFood: "Spaghetti",
            Age: "28",
            groupname: "Zeus",
            Learnt:"HTML, CSS, JavaScript",
            track: "Front-End Dev.",
            Position: "Front-runner"
        },
        {
            fullName: "Etisnosa S",
            img: "Etinosa",
            bestmovie: "" ,
            complexion: "Light skin",
            bestFood: "Spaghetti",
            Age: "28",
            groupname: "Zeus",
            Learnt:"HTML, CSS, JavaScript",
            track: "Front-End Dev.",
            Position: "Front-runner"
        },
        {
            fullName: "Oreoluwa Oloyede",
            img: "oreSauce",
            bestmovie: "" ,
            complexion: "Dark Skin",
            bestFood: "Spaghetti",
            Age: "28",
            groupname: "Zeus",
            Learnt:"HTML, CSS Dev.",
            Position: "The Front-runner"
        },
        {
            fullName: "Paul Ihejirika",
            img: "NONSO",
            bestmovie: "Game Of Thrones" ,
            complexion: "Light-skin",
            bestFood: "Spaghetti/Okro Soup",
            Age: "28",
            groupname: "Zeus",
            Learnt:"HTML, CSS, JavaScript",
            track: "Front-End Dev.",
            Position: "The Perfectionist"
        }
    ]

    console.log('the third is', teamMates[2])
    
   let membersSection = document.getElementById('members-wrapper');
   let html = '';
   teamMates.forEach(e => {
       html += `
            <div class="col-12 col-lg-6 col-md-6 pt-3">
              <div class="bgg card rounded-3 rounded-start">
                <div class="row">
                    <div class="pic-section col-12 col-lg-6 col-md-12 ">
                        <img src="./images/${e.img}.jpg" alt="" class="pt-1 img-fluid">
                        <h5 class="pb-3 px-1 bg-primary p-2 text-center text-white"><span class="fw-bold">${e.fullName}</span></h5>
                    </div>
                    <div class="info-section col-12 col-lg-6 col-md-6 pt-4 w-50">
                        <p><span class="fw-bold fst-italic px-1 w-100"> Best Movie:</span> ${e.bestmovie}</p>
                        <p><span class="fw-bold fst-italic   px-1"> Complexion:</span>${e.complexion}</p>
                        <p><span class="fw-bold  fst-italic  px-1"> Track:</span>${e.track}</p>
                        <p><span class="fw-bold fst-italic   px-1"> Age:</span>${e.Age}</p>
                        <p><span class="fw-bold  fst-italic  px-1"> Learnt:</span>${e.Learnt}</p>
                        <p><span class="fw-bold  fst-italic  px-1"> Group-name:</span>${e.groupname}</p>
                        <p class="px-1"><span class="fw-bold px-1"> Position:</span>${e.Position}</p>
                        <div class="button-section pb-3 pt-1">
                          <button class="btn btn-primary  text-white pt-1" onClick="myFunction()" >Click Me</button>
                        </div>
                    </div>
                </div>
              </div>
            </div>
       `
       console.log(e.fullName)

       let aler = e.fullname;
       membersSection.innerHTML = html  

       
       
   })
