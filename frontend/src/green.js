import './App.css';
function Green() {
    function down_green(){
        document.getElementById('green-head1').style.left="-1000px"
        document.getElementById('green-head1').style.transition="1s"
        document.getElementById('obj-green').style.top="-1000px"
        document.getElementById('obj-green').style.transition="1s"
        document.getElementById('hover').style.display="none"
        
        setTimeout(()=>{
            document.getElementById('green').style.display="none"
            document.getElementById('pink').style.display="block"
            document.getElementById('hover').style.display="flex"

        },500)
        document.getElementById('pink-head1').style.left="10%"
        document.getElementById('pink-head1').style.transition="1s"
        document.getElementById('obj-pink').style.top="10%"
        document.getElementById('obj-pink').style.transition="1s"
     
    }
    function up_green(){
        document.getElementById('green-head1').style.left="-1000px"
        document.getElementById('green-head1').style.transition="1s"
        document.getElementById('obj-green').style.top="-1000px"
        document.getElementById('obj-green').style.transition="1s"
        document.getElementById('hover').style.display="none"
        setTimeout(()=>{
            document.getElementById('green').style.display="none"
            document.getElementById('orange').style.display="block"
            document.getElementById('hover').style.display="flex"

        },500)
        document.getElementById('orange-head1').style.left="10%"
        document.getElementById('orange-head1').style.transition="1s"
        document.getElementById('obj-orange').style.top="10%"
        document.getElementById('obj-orange').style.transition="1s"
    }
    return (
        <section id='green'>
            <img id='bacground-img-green' alt='' src='apple.png'></img>
            <img id='obj-green' alt='' src='green.png'></img>
            <p id='txt-green'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eligendi placeat, autem doloremque quaerat repellat numquam aliquid temporibus nam incidunt eius odio perferendis saepe atque fugit maiores? Porro, eaque libero?
            </p>
            <h1 id="green-head1">
                Green Apple
            </h1>
            <div id='green-btn'>
                <img src='icon.png' alt='' onClick={up_green} id='up-green'></img>
                <img src='icon.png' alt='' onClick={down_green} id='down-green'></img>
            </div>

        </section>
    )
}
export default Green