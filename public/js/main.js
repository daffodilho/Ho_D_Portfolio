const myVM = (() => {
    // get the user buttons and fire off an async DB query with Fetch
    let workLink = document.querySelectorAll('.work-link'),
        lightBox = document.querySelector('.lightbox');

    function parseWorkData(work){
        let targetDiv = lightBox.querySelector('.lb-content');
            targetImg = lightBox.querySelector('img');
            targetVid = lightBox.querySelector('.video');

        let workContent = `
            <h2>${work.title}</h2>
            <br>
            <p>${work.info}</p>
            <br>
            <p>Pros: ${work.tech}</p>
            <br>
            <p>Cons: ${work.team}</p>
        `;

        // slice out the file name
        let fileName = work.currentSrc.slice(0, -4);

        let videoContent = `<video autoplay controls src="${fileName}_vid.mp4"></video>`;

        targetDiv.innerHTML = workContent;
        targetImg.src = `${fileName}_img.jpg`;
        targetVid.innerHTML = videoContent;
        
        lightBox.classList.add('show-lb');
        debugger;
    }

    function getWorkData(event){
        event.preventDefault();
        // debugger;
        // 1, 2, or 3 depending on which anchor tag you click
        let url = `/work/${this.getAttribute('href')}`,
            currentImg = this.firstElementChild.getAttribute('src');

        console.log (currentImg);
        console.log (url);
        // debugger;
        // this goes and fetches the database content (or an API endpoint)
        // that's why it's called a fetch!
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                data.currentSrc = currentImg;
                parseWorkData(data);
            })
            .catch((err) => console.log(err));
    }

    workLink.forEach(work => work.addEventListener("click", getWorkData));

    // wire up the lightbox close button
    lightBox.querySelector('.close').addEventListener("click", function(){
        lightBox.classList.remove('show-lb');
    })
})();