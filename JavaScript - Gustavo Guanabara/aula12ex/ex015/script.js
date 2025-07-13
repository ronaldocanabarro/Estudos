function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var formAno = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if (formAno.value.length == 0 || Number(formAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var formSex = document.getElementsByName('radsex');
        var idade = ano - Number(formAno.value);
        var genero = '';
        var img = document.createElement('img');

        img.setAttribute('id', 'foto');
        img.setAttribute('width', '250px');
        img.setAttribute('height', '250px');

        if (formSex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                // Bebê
                img.setAttribute('src', 'homem-bebe.png');
            } else if (idade < 18) {
                // Criança
                img.setAttribute('src', 'homem-crianca.png');
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'homem-adulto.png');
            } else {
                // Idoso
                img.setAttribute('src', 'homem-idoso.png');
            };
        } else {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                // Bebê
                img.setAttribute('src', 'mulher-bebe.png');
            } else if (idade < 18) {
                // Criança
                img.setAttribute('src', 'mulher-crianca.png');
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'mulher-adulto.png');
            } else {
                // Idoso
                img.setAttribute('src', 'mulher-idoso.png');
            };
        };
        
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    };
};