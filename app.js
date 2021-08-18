let vm = Vue.createApp({
    data() {
      return {
        perspective: 100,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0
        }
    },
    methods:{
      reset(){
        this.perspective= 100
        this.rotateX= 0
        this.rotateY= 0
        this.rotateZ= 0
      },
      copy(){
          console.log('copy')
        const e1 = document.createElement("textarea")

        e1.setAttribute('readonly','')
        e1.style.position = 'absolute'
        e1.style.left ='-9999px'
        // e1.style.display= 'none';
        e1.value = `transform: ${this.box.transform}`
        
        document.body.appendChild(e1)
        e1.select()
        document.execCommand('copy')
        document.body.removeChild(e1)
      }
    },
    computed:{
        box(){
            return {
                transform:`perspective(${this.perspective}px)
                rotateX(${this.rotateX}deg)
                rotateY(${this.rotateY}deg)
                rotateZ(${this.rotateZ}deg)`
            }
        }
    }
  }).mount('#app')
  