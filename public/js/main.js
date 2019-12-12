const myVM = (() => {
    
    let workLink = document.querySelectorAll('.work-link'),
        lightBox = document.querySelector('.lightbox'),
        video = document.querySelector('#videoTag'),
        reelLink = document.querySelector('#reel-link'),
        videoBox = document.querySelector('.videobox'),
        demoReelVideo = document.querySelector('#demoTag');

    // document.addEventListener("mousemove", function(e) {
    //     event.preventDefault();
    
    //     let xRay = document.querySelector('#xray');
    //     let xRayHalf = xRay.scrollWidth / 2;
    
    //     xRay.style.left = e.pageX - xRayHalf;
    //     xRay.style.top = e.pageY - xRayHalf;
    //     console.log(xRay.style.left);
    // })

    function parseWorkData(work){
        let targetDiv = lightBox.querySelector('.lb-content');
            targetImg = lightBox.querySelector('img');
            targetVid = lightBox.querySelector('.video video');

        let workContent = `
            <h2>${work.title}</h2>
            <br>
            <p>${work.info}</p>
            <br>
            <p>Technology used: ${work.tech}</p>
            <br>
            <p>Authors: ${work.team}</p>
        `;

        // slice out the file name
        let fileName = work.currentSrc.slice(0, -4);

        let videoContent = `<source src="${fileName}_vid.mp4">`;

        targetDiv.innerHTML = workContent;
        targetImg.src = `${fileName}_img.jpg`;
        targetVid.innerHTML = videoContent;
        video.load();
        video.play();
        
        lightBox.classList.add('show-lb');
    }

    function getWorkData(event){
        event.preventDefault();
        
        let url = `/work/${this.getAttribute('href')}`,
            currentImg = this.firstElementChild.getAttribute('src');

        console.log (currentImg);
        console.log (url);
        
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                data.currentSrc = currentImg;
                parseWorkData(data);
            })
            .catch((err) => console.log(err));
    }

    function showDemoReel() {
        console.log("showing demo reel");
        let demoReel = `<source src = "video/demo-reel.mp4">`;

        demoReelVideo.innerHTML = demoReel;

        videoBox.classList.add('show-vb');
    }

    workLink.forEach(work => work.addEventListener("click", getWorkData));
    reelLink.addEventListener("click", showDemoReel);

    // wire up the lightbox close button
    lightBox.querySelector('.close').addEventListener("click", function(){

        video.pause();
        video.currentTime = 0;

        lightBox.classList.remove('show-lb');
    })

     // wire up the videobox close button
     videoBox.querySelector('.close').addEventListener("click", function(){

        demoReelVideo.pause();
        demoReelVideo.currentTime = 0;

        videoBox.classList.remove('show-vb');
    })
    
})();