function valid()
{
    let a=document.querySelector("#inp1").value;
    let b=document.querySelector("#inp2").value;
    let c=document.querySelector("#inp3").value;
    let d=document.querySelector(".uname").value;
    let e=document.querySelector(".pass").value;
    let f=document.querySelector(".emid").value;

    if(d=="")
    {
        alert("enter usermname");
    }
    else if( e=="")
    {
        alert("enter password");
    }
    else if( f=="")
    {
        alert("enter email id")
    }

    document.querySelector("#inp1").value="";
    
    document.querySelector("#inp2").value="";

    
    document.querySelector("#inp3").value="";

    let g= document.querySelector("#refid").cloneNode(true);

    g.removeAttribute("id")
    g.children[0].innerHTML=a;
    g.children[0].innerHTML=b;
    g.children[0].innerHTML=c;

    let comment=document.querySelector(g.comment.firstChild);
    

    

}