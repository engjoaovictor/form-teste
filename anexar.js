/* ----------------- Input da foto Nº1 ------------------- */

const input = document.querySelector('#foto1');
input.addEventListener('change', function(e) {
    const tgt = e.target || window.event.srcElement;
  
  const files = tgt.files;
  const fr = new FileReader();
  
  fr.onload = function () {
    document.querySelector('#preview-image').src = fr.result;
    document.querySelector('#preview-image011').src = fr.result;
  }
  
  fr.readAsDataURL(files[0]);
});

/* ----------------- Input da foto Nº2 ------------------- */

const input2 = document.querySelector('#foto2');
input2.addEventListener('change', function(e) {
    const tgt = e.target || window.event.srcElement;
  
  const files = tgt.files;
  const fr = new FileReader();
  
  fr.onload = function () {
    document.querySelector('#preview-image2').src = fr.result;
    document.querySelector('#preview-image21').src = fr.result;
  }
  
  fr.readAsDataURL(files[0]);
});

/* ----------------- Input da foto Nº3 ------------------- */

const input3 = document.querySelector('#foto3');
input3.addEventListener('change', function(e) {
    const tgt = e.target || window.event.srcElement;
  
  const files = tgt.files;
  const fr = new FileReader();
  
  fr.onload = function () {
    document.querySelector('#preview-image3').src = fr.result;
    document.querySelector('#preview-image31').src = fr.result;
  }
  
  fr.readAsDataURL(files[0]);
});

/* ----------------- Input da foto Nº4 ------------------- */

const input4 = document.querySelector('#foto4');
input4.addEventListener('change', function(e) {
    const tgt = e.target || window.event.srcElement;
  
  const files = tgt.files;
  const fr = new FileReader();
  
  fr.onload = function () {
    document.querySelector('#preview-image4').src = fr.result;
    document.querySelector('#preview-image41').src = fr.result;
  }
  
  fr.readAsDataURL(files[0]);
});

/* ----------------- Input da foto Nº5 ------------------- */

const input5 = document.querySelector('#foto5');
input5.addEventListener('change', function(e) {
    const tgt = e.target || window.event.srcElement;
  
  const files = tgt.files;
  const fr = new FileReader();
  
  fr.onload = function () {
    document.querySelector('#preview-image5').src = fr.result;
    document.querySelector('#preview-image51').src = fr.result;
  }
  
  fr.readAsDataURL(files[0]);
});

/* ----------------- Input da foto Nº6 ------------------- */

const input6 = document.querySelector('#foto6');
input6.addEventListener('change', function(e) {
    const tgt = e.target || window.event.srcElement;
  
  const files = tgt.files;
  const fr = new FileReader();
  
  fr.onload = function () {
    document.querySelector('#preview-image6').src = fr.result;
    document.querySelector('#preview-image61').src = fr.result;
  }
  
  fr.readAsDataURL(files[0]);
});

/* ----------------- Input da foto Nº7 ------------------- */

const input7 = document.querySelector('#foto7');
input7.addEventListener('change', function(e) {
    const tgt = e.target || window.event.srcElement;
  
  const files = tgt.files;
  const fr = new FileReader();
  
  fr.onload = function () {
    document.querySelector('#preview-image7').src = fr.result;
    document.querySelector('#preview-image71').src = fr.result;
  }
  
  fr.readAsDataURL(files[0]);
});

/* ----------------- Input da foto Nº8 ------------------- */

const input8 = document.querySelector('#foto8');
input8.addEventListener('change', function(e) {
    const tgt = e.target || window.event.srcElement;
  
  const files = tgt.files;
  const fr = new FileReader();
  
  fr.onload = function () {
    document.querySelector('#preview-image8').src = fr.result;
    document.querySelector('#preview-image81').src = fr.result;
  }
  
  fr.readAsDataURL(files[0]);
});

/* ----------------- Input da foto Nº9 ------------------- */

const input9 = document.querySelector('#foto9');
input9.addEventListener('change', function(e) {
    const tgt = e.target || window.event.srcElement;
  
  const files = tgt.files;
  const fr = new FileReader();
  
  fr.onload = function () {
    document.querySelector('#preview-image9').src = fr.result;
    document.querySelector('#preview-image91').src = fr.result;
  }
  
  fr.readAsDataURL(files[0]);
});

/* ----------------- Input da foto Nº10 ------------------- */

const input10 = document.querySelector('#foto10');
input10.addEventListener('change', function(e) {
    const tgt = e.target || window.event.srcElement;
  
  const files = tgt.files;
  const fr = new FileReader();
  
  fr.onload = function () {
    document.querySelector('#preview-image10').src = fr.result;
    document.querySelector('#preview-image101').src = fr.result;
  }
  
  fr.readAsDataURL(files[0]);
});

/* ----------------- Input da foto Nº11 ------------------- */

const input11 = document.querySelector('#foto11');
input11.addEventListener('change', function(e) {
    const tgt = e.target || window.event.srcElement;
  
  const files = tgt.files;
  const fr = new FileReader();
  
  fr.onload = function () {
    document.querySelector('#preview-image11').src = fr.result;
    document.querySelector('#preview-image111').src = fr.result;
  }
  
  fr.readAsDataURL(files[0]);
});

/* ----------------- Input da foto Nº12 ------------------- */

const input12 = document.querySelector('#foto12');
input12.addEventListener('change', function(e) {
    const tgt = e.target || window.event.srcElement;
  
  const files = tgt.files;
  const fr = new FileReader();
  
  fr.onload = function () {
    document.querySelector('#preview-image12').src = fr.result;
    document.querySelector('#preview-image121').src = fr.result;
  }
  
  fr.readAsDataURL(files[0]);
});