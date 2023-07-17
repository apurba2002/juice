import './App.css';
function Orange() {

    function down_orange() {
        document.getElementById('orange-head1').style.left = "-1000px"
        document.getElementById('orange-head1').style.transition = "1s"
        document.getElementById('obj-orange').style.top = "-1000px"
        document.getElementById('obj-orange').style.transition = "1s"
        document.getElementById('hover').style.display="none"
        setTimeout(() => {
            document.getElementById('orange').style.display = "none"
            document.getElementById('green').style.display = "block"
            document.getElementById('hover').style.display="flex"

        }, 500)
        document.getElementById('green-head1').style.left = "10%"
        document.getElementById('green-head1').style.transition = "1s"
        document.getElementById('obj-green').style.top = "10%"
        document.getElementById('obj-green').style.transition = "1s"
    }
    function up_green() {
        document.getElementById('green-head1').style.left = "-1000px"
        document.getElementById('green-head1').style.transition = "1s"
        document.getElementById('obj-green').style.top = "-1000px"
        document.getElementById('obj-green').style.transition = "1s"
        document.getElementById('hover').style.display="none"
        setTimeout(() => {
            document.getElementById('green').style.display = "none"
            document.getElementById('orange').style.display = "block"
            document.getElementById('hover').style.display="flex"

        }, 500)
        document.getElementById('orange-head1').style.left = "10%"
        document.getElementById('orange-head1').style.transition = "1s"
        document.getElementById('obj-orange').style.top = "10%"
        document.getElementById('obj-orange').style.transition = "1s"
    }
    return (
        <section id='orange'>
            <img id='bacground-img-orange' alt='' src='orange.webp'></img>
            <img id='obj-orange' alt='' src='orange.png'></img>
            <p id='txt-orange'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eligendi placeat, autem doloremque quaerat repellat numquam aliquid temporibus nam incidunt eius odio perferendis saepe atque fugit maiores? Porro, eaque libero?
            </p>
            <h1 id="orange-head1">
                Orange
            </h1>
            <div id='orange-btn'>

                <img src='icon.png' alt='' id='down-orange' onClick={down_orange}></img>
            </div>

        </section>

    )
}

export default Orange