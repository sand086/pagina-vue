var url = "bd/crud.php";

var appPublicacion = new Vue({    
el: "#appPublicacion",   
data:{     
  publicacion:[], 
  message: '',
},
  
methods:{  
    //BOTONES        
    btnAlta:async function(){                    
        const {value: formValues} = await Swal.fire({
        focusConfirm: false,
        showCancelButton: true,
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