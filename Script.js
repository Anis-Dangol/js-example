//alert('Hello World ');
// console.log('Hello World')
function validation()
{
   // alert('prajwol i');
  // document.getElementById("trigger").addEventListener("click",validation);
    var name = document.getElementById('name').value;
    var address = document.getElementById('address').value;

    if (name == '')
    {
        // alert('name is required');
        // document.querySelector('#name')
        document.getElementById('nameErr').innerHTML="Name is required";
        document.getElementById('name').focus();
    }
    if(address == ''){
        document.getElementById('addressErr').innerHTML="Address is required";
        document.getElementById('name').focus();
        // alert('address is required');
    }
}
document.getElementById("myform").addEventListener("submit",validation);