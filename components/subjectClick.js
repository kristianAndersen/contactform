
import { subjectValidation } from "./subjectValidation";
import { iconChange } from "./iconsChange";
const subjectClick = () => {
    const subjectWrap = document.querySelector('.subjectWrap');
    const inputWrap = document.querySelector('.inputWrapHidden');
    const subjectField = document.querySelector('#subject');
    const changesubject = document.querySelector('.changesubject');

    document.addEventListener('click', (e) => {
        const target = e.target.closest('.contact-button');
        if (!target) return;

        // Remove 'contact-button-clicked' class from all buttons
        document.querySelectorAll('.contact-button').forEach(btn => {
            btn.classList.remove('contact-button-clicked');
        });

        // Add 'contact-button-clicked' class to the clicked button
        target.classList.add('contact-button-clicked');

        const hasDataSub = target.getAttribute('data-sub');

        if (hasDataSub === 'true') {
            // Toggle sub-buttons visibility
            const nextSection = target.nextElementSibling;
            nextSection.classList.toggle('cb-sub-hidden');
            
        } else {
       

            // Set subject and show input form
            const subject = target.getAttribute('data-subject');
            const validSubject = subjectValidation(subject)

            console.log(typeof subject + ' ' + validSubject);
            
            if(typeof subject=='string'  && subject!=='Andet' && validSubject){
                iconChange(subjectField, 'success');
                subjectField.value = subject;
            }
            
            if(subject && validSubject!==true){
                iconChange(subjectField, 'error');
            }

            if(subject=='Andet'){
                subjectField.value = '';
                subjectField.removeAttribute("disabled");
                iconChange(subjectField, '');
            }
                
               
                subjectWrap.classList.toggle('subjectWrap');
                setTimeout(() => {
                     inputWrap.classList.toggle('inputWrapHidden');
                }, 850);
             
        }
    });


    changesubject.addEventListener('click', (e) => {
        console.log("back clicked")
        
        inputWrap.classList.toggle('inputWrapHidden');
        setTimeout(() => {
            subjectWrap.classList.toggle('subjectWrap');
        }, 850);
      
    });
};

export { subjectClick };