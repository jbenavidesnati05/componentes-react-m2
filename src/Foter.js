import instagram from './imagenes/instagram.jpg'
import facebook from './imagenes/facebook.png'
import twiter from './imagenes/twiter.JPG'
import linkedin from './imagenes/linkedin.JPG'

export default function Foter(){
    return (<footer><nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="">
      <div class="collapse navbar-collapse" id="">
            <div class="redes">
                <a class="red" href="https://www.instagram.com/" target="_blank"><img src={instagram} width="4%"></img></a>
                <a class="red" href="https://www.facebook.com/" target="_blank"><img src={facebook} width="4%"></img></a>
                <a class="red" href="https://www.twitter.com/" target="_blank"><img src={twiter} width="4.5%"></img></a>
                <a class="red" href="https://www.linkedin.com/" target="_blank"><img src={linkedin} width="4.0%"></img></a>

            </div>
        
      </div>
    </div>
  </nav>

    </footer>)
}