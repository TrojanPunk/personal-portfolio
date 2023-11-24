import emailjs from '@emailjs/browser'

const form = useRef();

const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_9z7ws4l', 'template_qf50u5f', form.current, 'zrV0RZIodocxkv3mr')
      .then((result) => {
          console.log(result.text);
          alert('Your mail is sent!');
      }, (error) => {
          console.log(error.text);
          alert('Oops... ' + JSON.stringify(error));
      });
  };