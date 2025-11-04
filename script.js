window.addEventListener('load',()=>{
    const boton = document.querySelector('.boton')
    const wrapper = document.querySelector('.wrapper')
    function change_pos(){
        styles = window.getComputedStyle(wrapper)
        if(styles.getPropertyValue('justify-content') == 'center'){
            wrapper.style.setProperty('justify-content', 'left')
            wrapper.style.setProperty('align-content', 'start')
            return
        }
        if(styles.getPropertyValue('justify-content') == 'left' && styles.getPropertyValue('align-content') == 'start'){
            wrapper.style.setProperty('justify-content', 'right')
            return
        }
        if(styles.getPropertyValue('justify-content') == 'right' && styles.getPropertyValue('align-content') == 'start'){
            wrapper.style.setProperty('align-content', 'end')
            return
        }
        if(styles.getPropertyValue('justify-content') == 'right' && styles.getPropertyValue('align-content') == 'end'){
            wrapper.style.setProperty('justify-content', 'left')
            return
        }
        if(styles.getPropertyValue('justify-content') == 'left' && styles.getPropertyValue('align-content') == 'end'){
            wrapper.style.setProperty('align-content', 'start')
            return
        }

    }
    boton.addEventListener('mouseover', ()=>{
        change_pos()
    })
    boton.addEventListener('click', ()=>{
        window.alert('🙀🙀🙀')
    })
})