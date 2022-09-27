import {
    Reveal
  } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';
  (() => {
    // Code for Terrible tech talk
    Reveal.on('ready', event => {
        setTimeout(() => {
            const realHour = document.getElementById('real-hour');
            if (realHour) {
                realHour.innerHTML = `Ici le ${new Intl.DateTimeFormat('fr-FR').format(new Date())}`;
                
                Reveal.on('hide-notification-event', () => {
                    let notificationDiv = document.querySelector('.notification-tmp');
                    if (notificationDiv){
                        notificationDiv.classList.remove('show');
                    }
                });
                Reveal.on('show-notification-event', () => {

                    let notificationDiv = document.querySelector('.notification-tmp');
                    if (!notificationDiv){
                        notificationDiv = document.createElement('div');
                        notificationDiv.classList.add('notification-tmp');
                        notificationDiv.innerHTML= `
                        <div class="wrapper">                        
                        <img src="./assets/images/fake-user-women.jpeg"/>
                        <span><strong>Messages</strong><br>Oublie pas le pain stp pour ce soir avec ma mère 😘</span>
                        </div`
                        document.body.appendChild(notificationDiv);
                        notificationDiv.addEventListener('click',()=>{
                            notificationDiv.classList.remove('show');
                        });
                    }

                    setTimeout(()=>{
                        notificationDiv.classList.add('show');
                    },50);
                    
                });
            }
        }, 1000);
    });
  })();