const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

//search rooms.json and filter it
const searchClass = async searchText => {
    const res = await fetch('https://github.com/siddsarkar/map-my-kgp/blob/master/data/rooms.json');
    const rooms = await res.json();

    //get match to input
    let matches = rooms.filter(room => {
        const regex = new RegExp(`${searchText}`,'gi');
        return room.number.match(regex) || room.landmark.match(regex);

    });

    if(searchText.length === 0){
        matches = [];
        matchList.innerHTML= '';

    }

    outputHtml(matches);

}
search.addEventListener('input', () => searchClass(search.value));

//show results in html

const outputHtml = matches => {
    if(matches.length > 0){
        const html = matches.map(match => 
        `
        <div id="root" class="container-fluid">
            <div id="crd" class="card rounded-sm  mb-3 shadow" >
                <div class="row">
                    <div class="col-lg-10">
                        <div class="row-6 ml-1 mt-1"><h4>${match.number}</h4></div>
                        <div class="row-6 ml-1"><h6>Here's the way</h6></div>
                    </div>
                    <div class="col-lg-2"></div>
                </div>
             <div class="submenu col container-fluid bg-light d-flex flex-column justify-content-between">
                <div class="row">
                    <h6>Landmark: ${match.landmark}</h6>
                </div>
                <div class="row">
                        <h6>Map: here</h6>
                </div>
                <div class="row">
                    <iframe
                            src="${match.map_iframe_src}"
                            width="100%"
                            height="450"
                            allowfullscreen=""
                            aria-hidden="false"
                            onclick= "JavaScript:void(0)"
                            sandbox="allow-scripts"
                            style="border: 0;"
                            tabindex="0">
                    </iframe>
                </div>
                <div class="row">
                    <h6>Directions: </h6>
                    <hr>
                    <a  href="${match.navigate_to}" target="_blank">
                        <input type="button" class="btn btn-primary" value="OPEN WITH MAPS">
                    </a>
                </div>
            </div>
            </div>
        </div>
        `
        )
        .join('');
        matchList.innerHTML = html;
        
    }
};
