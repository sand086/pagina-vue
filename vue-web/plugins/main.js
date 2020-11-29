var url = "bd/crud.php";

var appPublicacion = new Vue({    
el: "#appPublicacion",   
data:{     
  publicacion:[],          
     marca:"",
     modelo:"",
     stock:"",
     total:0,       
 },    
methods:{  
    //BOTONES        
    btnAlta:async function(){                    
        const {value: formValues} = await Swal.fire({
        focusConfirm: false,
        showCancelButton: true,
        preConfirm: () => {            
            return [
              this.marca = document.getElementById('marca').value,
              this.modelo = document.getElementById('modelo').value,
             this.stock = document.getElementById('stock').value                    
            ]
          }
        })        
    },           
    //PROCEDIMIENTOS para el CRUD     
    listarPublicacion:function(){
        axios.post(url, {opcion:4}).then(response =>{
           this.publicacion = response.data;       
        });
    },               
},      
created: function(){            
   this.listarPublicacion();            
},    
  
});