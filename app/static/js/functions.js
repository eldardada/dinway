export const toggleActiveCLass = element => element.classList.toggle('active');

export function addVideoFunctionality(section) {

    let video = section.querySelector('[data-video]');
    const parent = video.parentElement;
    const videoCopy = video;
    const btn = section.querySelector('[data-video_btn]');
    const close = section.querySelector('[data-video_close]');
    const overlay = document.querySelector('.overlay');

    function videoNoExist() {
        return !section.querySelector('[data-video]');
    }

    function videoOnClick() {
        video = videoCopy;
        video.style.display = 'block';
        video.classList.add('active');
        overlay.classList.add('active');
    }

    window.addEventListener('resize', () => {
        if(videoNoExist()) {
            video = videoCopy;
            parent.append(video);
        }
    })

    function closeVideo() {
        video.classList.remove('active');
        overlay.classList.remove('active');
        
        video.style.display = '';

        video.remove();
        video = videoCopy;
        parent.append(video);
    }

    close.addEventListener('click', closeVideo);
    btn.addEventListener('click', videoOnClick);
}

