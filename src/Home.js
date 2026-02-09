import logo from './logo.svg';
import './Home.css';

import DodgingButton from './DodgingButton';
import { useNavigate } from 'react-router-dom';

import emailjs from "emailjs-com";

function sendEmail() {
  emailjs.send(
    "service_0wecnoi",
    "template_qlgz98p",
    {},
    "PWgmG3BrlcVo0VZWk"
  )
  .then(() => {
    // alert("Email sent 💌");
  })
  .catch((err) => {
    console.error(err);
  });
}






export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="sparkle-page">
  <div className="content">
    <div className='pink-cow'>

    </div>
    <div className='brown-cow'>

    </div>
    <p className="font">Be my Valentine?</p>
    <p className="spinny">🐄</p>

    <div className="button-row">
      <button className="action-btn yes-btn"
      onClick={() => {
    sendEmail();
    navigate("/success");
  }}
>
        yes
      </button>

      <DodgingButton />
    </div>
  </div>
</div>

  );
}


