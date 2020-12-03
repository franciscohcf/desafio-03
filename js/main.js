(function() {
    function addStyle(styles) {

        var css = document.createElement('style');
        css.TYPE = 'text/css';

        if (css.styleSheet)
            css.styleSheet.cssText = styles;
        else
            css.appendChild(document.createTextNode(styles));

        document.getElementsByTagName("div")[0].appendChild(css);
        document.getElementsByTagName("footer")[0].appendChild(css);
    }

    var styles = 'footer { text-align: center; margin-bottom: 20px; background-color:white; border: 5px; border-radius: 10px 20px 30px}';

    window.onload = function() { addStyle(styles) };

    var tag1 = document.querySelector("#tag1");
    tag1.className = "tag1";
    tag1.textContent = "Criado por Francisco Holanda";

    var tag2 = document.querySelector("#tag2");
    tag2.className = "tag2";

    var d = new Date();
    document.getElementById("tag2").innerHTML = "Acessado em: " + d;
})()