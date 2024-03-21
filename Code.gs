
function createTimeDrivenTriggers(){
  ScriptApp.newTrigger('myFunction')
      .timeBased()
      .everyMinutes(5)
      .create();
}
function myFunction(){
  for(var j=1;j<=2;j++){
    console.log(j)
     var get_customer='https://api.bigcommerce.com/stores/mnojzzjmxt/v2/customers/'+j;
     let loader={
      method:'GET',
      headers:{
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-Auth-Token': 'hfxcrv8ljxongvm3hfaytnq556ie6hd'
      }
     }
     var id="";
     var customer=UrlFetchApp.fetch(get_customer,loader);
     var customer_info=JSON.parse(customer.getContentText());
     console.log(customer_info);
     var custom_field=customer_info.form_fields;

     for(var i=0;i<custom_field.length;i++){
      console.log(custom_field[i].name)
      if(custom_field[i].name=="ERP_customer_id"){
        id=custom_field[i].value

      }
     }
     console.log(id);
     

  }
   
}


