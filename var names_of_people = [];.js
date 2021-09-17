var names_of_people = [];

function submit()
{
    var GuestName = document.getElementById("name1").ariaValueMax;
    names_of_people.push(GuestName);

    console.log(GuestName);

    console.log(names_of_people);
    var length_of_name = name_of_people.lenght;
    console.log(length_of_name);
    document.getElemnentById("display_name").innerHTML=names_of_people.toString();

}
function sorting()
{
    names_of_people.sort();
    var i= names_of_people.join("<br>");
    console.log(names_of_people);
    document.getElemnentById("sorted").innerHTML=i.toString();
}
function show()
{
    var i=names_of_people.join("<br>");
    console.log(names_of_people);
    document.getElemnentById("p1").innerHTML=i.toString();
    document.getElemnentById("sort_button").style.display="block";
}
function searching()
{
    var s = documnet.getElementById("s1").value;
    var found=0;
    var j;
    for(j=0; j<names_of_people.length>; j++)
    {
        if(s==names_of_people[j]){
            found=found+1;
    }
    document.getElemnentById("p2").innerHTML="name found +found+" time/s";
    console.log("found name "+found+" time/s');
}