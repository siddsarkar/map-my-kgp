const search = document.getElementById('search');
const matchList = document.getElementById('match-list');
const allList = document.getElementById('all-list');
const nrList = document.getElementById('nr-list');
const ncList = document.getElementById('nc-list');

//search rooms.json and filter it

const searchClass = async searchText => {
    const res = await fetch('http://siddsarkar.me/map-my-kgp/data/rooms.json/');
    const rooms = await res.json();

    //get match to input

    let matches = rooms.filter(room => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return room.number.match(regex) || room.landmark.match(regex);

    });

    if (searchText.length === 0) {
        matches = [];
        matchList.innerHTML = '';
    }

    outputHtml(matches);
}

search.addEventListener('input', () => {
    searchClass(search.value);

});

//show results in html

const outputHtml = matches => {
    if (matches.length > 0) {
        const html = matches.map(match =>
        `
        <div class="col-md-3">
            <div class="card shadow mb-1">
                <div class="card-body">
                    <h4 class="card-title">${match.number}</h4>
                    <p class="card-text">Text</p>
                </div>
            </div>
        </div>
        `
        ).join('');
        matchList.innerHTML = '<div class="small pl-3">Search results</div>' + html;

    }
};

//Tabs-lists

document.addEventListener('DOMContentLoaded', async searchText => {
    const res = await fetch('../data/rooms.json');
    const rooms = await res.json();

    //all-list
    for (let i = 0; i < rooms.length; i++) {
        const allHtml =
        `
        <div class="col-md-3">
            <div class="card shadow mb-2">
                <div class="card-body">
                    <h4 class="card-title">${rooms[i].number}</h4>
                    <p class="card-text">Text</p>
                </div>
            </div>
        </div>
        `;
        allList.innerHTML += allHtml;
    }

    //nr-list
    for (let i = 0; i < rooms.length; i++) {
        if (`${rooms[i].abbr}` === "NR") {
            const nrHtml =
            `
            <div class="col-md-3">
                <div class="card shadow mb-2">
                    <div class="card-body">
                        <h4 class="card-title">${rooms[i].number}</h4>
                        <p class="card-text">Text</p>
                    </div>
                </div>
            </div>
            `;
            nrList.innerHTML += nrHtml;
        }
    }

    //nc-list
    for (let i = 0; i < rooms.length; i++) {
        if (`${rooms[i].abbr}` === "NC") {
            const ncHtml =
            `
            <div class="col-md-3">
                <div class="card shadow mb-2">
                    <div class="card-body">
                        <h4 class="card-title">${rooms[i].number}</h4>
                        <p class="card-text">Text</p>
                    </div>
                </div>
            </div>
            `;
            ncList.innerHTML += ncHtml;
        }
    }

}, false);

//bootstrap-nav-tabs

$('#myTab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
});
