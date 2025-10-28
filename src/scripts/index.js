import Swiper from 'swiper';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Russian } from "flatpickr/dist/l10n/ru.js"


if(document.querySelector('.calendar')){
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    window.addEventListener('click',(evt)=>{
        const form = document.querySelectorAll('.form')
    if(!evt.target.classList.contains('.calendar') && !evt.target.closest('.calendar')){
        form.forEach(element => {
            element.classList.remove('active')
        });
    }
})
    const calendarInput = document.querySelectorAll('.calendar input')
    calendarInput.forEach(element => {
        const fp = flatpickr(element, {
            mode: "range",
            "locale": Russian,
            dateFormat: "d.m.Y",
            altInput: true,
            altFormat: "d.m.Y", 
            defaultDate: [today, tomorrow],
            minDate: "today",  
            conjunction: " — ",
            onReady: function(selectedDates, dateStr, instance) {
            if (selectedDates.length === 2) {
                instance.altInput.value = instance.formatDate(selectedDates[0], "d.m.Y") + 
                    " — " + 
                    instance.formatDate(selectedDates[1], "d.m.Y");
            }
        }
            
        });
        element.closest('.form').addEventListener('click',(evt)=>{
            if(!evt.currentTarget.classList.contains('active')){
                evt.currentTarget.classList.add('active')
                fp.open()
            }else{
                fp.close()
                 evt.currentTarget.classList.remove('active')
            }

        })
    });
}
