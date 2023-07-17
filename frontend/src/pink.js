import './App.css';
import { AiOutlineLeftCircle } from 'react-icons/ai';
import Hover from './hover';
function Pink() {
    function up_Pink(){
        document.getElementById('pink-head1').style.left="-1000px"
        document.getElementById('pink-head1').style.transition="1s"
        document.getElementById('obj-pink').style.top="-1000px"
        document.getElementById('obj-pink').style.transition="1s"
        document.getElementById('hover').style.display="none"
        
        setTimeout(()=>{
            document.getElementById('pink').style.display="none"
            document.getElementById('green').style.display="block"
            
            document.getElementById('hover').style.display="flex"

        },500)
        document.getElementById('green-head1').style.left="10%"
        document.getElementById('green-head1').style.transition="1s"
        document.getElementById('obj-green').style.top="10%"
        document.getElementById('obj-green').style.transition="1s"

     
    }
    


    return (
        <>
            <section id='pink'>
                <img id='bacground-img-pink' alt='' src='s.webp'></img>
                <img id='obj-pink' alt='' src='pink5.png'></img>
                <p id='txt-pink'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eligendi placeat, autem doloremque quaerat repellat numquam aliquid temporibus nam incidunt eius odio perferendis saepe atque fugit maiores? Porro, eaque libero?
                </p>
                <h1 id="pink-head1">
                    Strawberry
                </h1>
                <div id='pink-btn'>
                    <img onClick={up_Pink}  src='icon.png' alt='' id='up-pink'></img>
                </div>

            </section>
           
           
        </>

    )
}
export default Pink