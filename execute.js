var radio_list=[];
function radio_unchecked(id)
{
    let element = document.getElementById(id);
    if(element.type=="radio")
    {
        let checked = false;
        for(let i=0; i<radio_list.length; i++)
        {
            if(element.id==radio_list[i])
            {
                checked=true;
                radio_list.splice(i, 1); 
                break;   
            }
        }
        if(checked == false)
        {
            radio_list.push(element.id);
        }
    }
}
$(document).ready(function() {
    $("input").click(function(event) {
        //console.log(event.target.id);
        //console.log(event.target.checked);
        radio_unchecked(event.target.id);
    });
});