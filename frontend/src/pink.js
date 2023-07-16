import './App.css';
import { AiOutlineLeftCircle } from 'react-icons/ai';
function Pink() {
    function up_Pink(){
        document.getElementById('pink-head1').style.left="-1000px"
        document.getElementById('pink-head1').style.transition="2.5s"
        document.getElementById('obj-pink').style.top="-1000px"
        document.getElementById('obj-pink').style.transition="2.5s"
        setTimeout(()=>{
            document.getElementById('pink').style.display="none"
            document.getElementById('green').style.display="block"

        },1900)
        document.getElementById('green-head1').style.left="10%"
        document.getElementById('green-head1').style.transition="2.5s"
        document.getElementById('obj-green').style.top="10%"
        document.getElementById('obj-green').style.transition="2.5s"
    }
    function down_green(){
        document.getElementById('green-head1').style.left="-1000px"
        document.getElementById('green-head1').style.transition="2.5s"
        document.getElementById('obj-green').style.top="-1000px"
        document.getElementById('obj-green').style.transition="2.5s"
        setTimeout(()=>{
            document.getElementById('green').style.display="none"
            document.getElementById('pink').style.display="block"

        },1900)
        document.getElementById('pink-head1').style.left="10%"
        document.getElementById('pink-head1').style.transition="2.5s"
        document.getElementById('obj-pink').style.top="10%"
        document.getElementById('obj-pink').style.transition="2.5s"
    }


    return (
        <>
            <section id='pink'>
                <img id='bacground-img-pink' alt='' src='pinkb.png'></img>
                <img id='obj-pink' alt='' src='pink5.png'></img>
                <p id='txt-pink'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eligendi placeat, autem doloremque quaerat repellat numquam aliquid temporibus nam incidunt eius odio perferendis saepe atque fugit maiores? Porro, eaque libero?
                </p>
                <h1 id="pink-head1">
                    Strawberry
                </h1>
                <div id='pink-btn'>
                    <img onClick={up_Pink} src='icon.png' alt='' id='up-pink'></img>
                </div>

            </section>
            <section id='green'>
                <img id='bacground-img-green' alt='' src='apple.png'></img>
                <img id='obj-green' alt='' src='green.png'></img>
                <p id='txt-pink'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eligendi placeat, autem doloremque quaerat repellat numquam aliquid temporibus nam incidunt eius odio perferendis saepe atque fugit maiores? Porro, eaque libero?
                </p>
                <h1 id="green-head1">
                    Strawberry
                </h1>
                <div id='green-btn'>
                    <img  src='icon.png' alt='' id='up-green'></img>
                    <img  src='icon.png' alt='' onClick={down_green} id='down-green'></img>
                </div>

            </section>
        </>

    )
}
export default Pink