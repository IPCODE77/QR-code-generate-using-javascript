let inputtext = document.getElementById('input_text'),
    qr_btn = document.getElementById('btn'),
    qr_img_box = document.getElementById('qr_code'),
    qr_img = document.getElementById('qr_img'),
    qr_download = document.getElementById('link'),
    qr_dwn_btn = document.getElementById('download');


qr_btn.addEventListener('click', () => {
    let qr_val = inputtext.value
    qr_btn.innerText = 'Generating QR Code...'
    if (inputtext.value) {
        qr_img.src = ` https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qr_val}`
        qr_img.addEventListener('load', () => {
            qr_img_box.classList.add('active')
            qr_btn.innerText = 'Generate QR Code'
            console.log(qr_img.src);
            qr_dwn_btn.addEventListener('click', (e) => {
                e.preventDefault()
                let impath=qr_img.getAttribute('src');
                let fn=getFileName(impath);
                saveAs(impath,fn);
                
               
            })
            function getFileName(str){
                return str.substring(str.lastIndexOf('/')+1);
            }

        })
    }
    else {
        qr_img_box.classList.remove('active')
    }
})
inputtext.addEventListener('keyup', () => {
    qr_img_box.classList.remove('active')
})


